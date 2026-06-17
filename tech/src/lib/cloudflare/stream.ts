const CF_ACCOUNT_ID = process.env.CLOUDFLARE_ACCOUNT_ID!;
const CF_STREAM_API_TOKEN = process.env.CLOUDFLARE_STREAM_API_TOKEN!;

interface SignedTokenOptions {
  videoId: string;
  expiresInHours?: number;
}

/**
 * Generate a signed URL for Cloudflare Stream video playback.
 * Signed URLs provide time-limited access to protected video content.
 */
export async function generateSignedUrl({
  videoId,
  expiresInHours = 2,
}: SignedTokenOptions): Promise<{ signedUrl: string; expiresAt: Date }> {
  const expiresAt = new Date();
  expiresAt.setHours(expiresAt.getHours() + expiresInHours);

  const response = await fetch(
    `https://api.cloudflare.com/client/v4/accounts/${CF_ACCOUNT_ID}/stream/${videoId}/token`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${CF_STREAM_API_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        exp: Math.floor(expiresAt.getTime() / 1000),
        accessRules: [{ type: "any" }],
      }),
    }
  );

  if (!response.ok) {
    throw new Error(`Failed to generate signed URL: ${response.statusText}`);
  }

  const data = await response.json();
  const token = data.result.token;

  const signedUrl = `https://videodelivery.net/${videoId}?token=${token}`;

  return { signedUrl, expiresAt };
}

/**
 * Upload a video to Cloudflare Stream.
 * Returns the Stream UID for storage in the database.
 */
export async function uploadVideo(file: File, metadata?: Record<string, string>) {
  const formData = new FormData();
  formData.append("file", file);
  if (metadata) {
    formData.append("meta", JSON.stringify(metadata));
  }

  const response = await fetch(
    `https://api.cloudflare.com/client/v4/accounts/${CF_ACCOUNT_ID}/stream`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${CF_STREAM_API_TOKEN}`,
      },
      body: formData,
    }
  );

  if (!response.ok) {
    throw new Error(`Failed to upload video: ${response.statusText}`);
  }

  const data = await response.json();
  return data.result as {
    uid: string;
    playback: { hls: string };
    status: { state: string };
  };
}

/**
 * Delete a video from Cloudflare Stream.
 */
export async function deleteVideo(videoId: string) {
  const response = await fetch(
    `https://api.cloudflare.com/client/v4/accounts/${CF_ACCOUNT_ID}/stream/${videoId}`,
    {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${CF_STREAM_API_TOKEN}`,
      },
    }
  );

  if (!response.ok && response.status !== 404) {
    throw new Error(`Failed to delete video: ${response.statusText}`);
  }
}
