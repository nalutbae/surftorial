"use client";

import { useRef, useEffect, useCallback, useState } from "react";

interface VideoPlayerProps {
  lessonId: string;
  courseId: string;
  isEnrolled: boolean;
  isFreePreview: boolean;
}

interface ProgressData {
  progress: {
    id: string;
    watchedSec: number;
    lastPosition: number;
    isCompleted: boolean;
  };
  videoUrl: string | null;
  lesson: {
    id: string;
    title: string;
    durationSec: number | null;
    isFreePreview: boolean;
  };
}

export default function VideoPlayer({ lessonId, courseId, isEnrolled, isFreePreview }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastPosition, setLastPosition] = useState(0);
  const progressTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Fetch video URL and progress
  useEffect(() => {
    let cancelled = false;

    async function fetchVideoData() {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`/api/lessons/${lessonId}/progress`);
        if (!res.ok) {
          if (res.status === 401) {
            setError("로그인이 필요합니다.");
            return;
          }
          if (res.status === 403) {
            setError("수강 중인 강의만 시청할 수 있습니다.");
            return;
          }
          throw new Error("비디오를 불러오지 못했습니다.");
        }
        const json = await res.json();
        const data = json.data as ProgressData;

        if (!cancelled) {
          setVideoUrl(data.videoUrl);
          setLastPosition(data.progress?.lastPosition ?? 0);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : "비디오 로딩 중 오류가 발생했습니다.");
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    // Only fetch if enrolled or free preview
    if (isEnrolled || isFreePreview) {
      fetchVideoData();
    } else {
      setLoading(false);
      setError("수강 신청 후 시청할 수 있습니다.");
    }

    return () => {
      cancelled = true;
    };
  }, [lessonId, isEnrolled, isFreePreview]);

  // Auto-save progress every 15 seconds
  const saveProgress = useCallback(async () => {
    if (!videoRef.current || !isEnrolled) return;
    const currentTime = Math.floor(videoRef.current.currentTime);
    if (currentTime <= 0) return;

    try {
      await fetch(`/api/lessons/${lessonId}/progress`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          watched_seconds: currentTime,
          last_position: currentTime,
        }),
      });
    } catch {
      // Silently fail — we'll retry on next interval
    }
  }, [lessonId, isEnrolled]);

  // Set up progress timer when video plays
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !isEnrolled) return;

    const handlePlay = () => {
      if (progressTimerRef.current) clearInterval(progressTimerRef.current);
      progressTimerRef.current = setInterval(saveProgress, 15000);
    };

    const handlePause = () => {
      if (progressTimerRef.current) {
        clearInterval(progressTimerRef.current);
        progressTimerRef.current = null;
      }
      saveProgress(); // Save immediately on pause
    };

    const handleEnded = () => {
      if (progressTimerRef.current) {
        clearInterval(progressTimerRef.current);
        progressTimerRef.current = null;
      }
      saveProgress(); // Save final progress
    };

    video.addEventListener("play", handlePlay);
    video.addEventListener("pause", handlePause);
    video.addEventListener("ended", handleEnded);

    return () => {
      video.removeEventListener("play", handlePlay);
      video.removeEventListener("pause", handlePause);
      video.removeEventListener("ended", handleEnded);
      if (progressTimerRef.current) {
        clearInterval(progressTimerRef.current);
      }
    };
  }, [saveProgress, isEnrolled]);

  // Resume from last position
  const handleLoadedMetadata = () => {
    if (videoRef.current && lastPosition > 0) {
      videoRef.current.currentTime = lastPosition;
    }
  };

  // Loading state
  if (loading) {
    return (
      <div className="w-full h-full bg-slate-900 flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <div className="w-10 h-10 border-4 border-ocean-200 border-t-ocean-500 rounded-full animate-spin" />
          <p className="text-slate-400 text-sm">비디오를 불러오는 중...</p>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="w-full h-full bg-slate-900 flex items-center justify-center">
        <div className="flex flex-col items-center gap-4 text-center px-6">
          <svg className="w-16 h-16 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m0 0v2m0-2h2m-2 0H10m10-6V7a4 4 0 00-4-4H6a4 4 0 00-4 4v6m16 0a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2a2 2 0 012-2m10-6V7a4 4 0 00-4-4H6a4 4 0 00-4 4v6" />
          </svg>
          <p className="text-slate-300 text-sm max-w-xs">{error}</p>
          {(!isEnrolled && !isFreePreview) && (
            <button className="btn btn-sunset mt-2">수강 신청하기</button>
          )}
        </div>
      </div>
    );
  }

  // No video URL
  if (!videoUrl) {
    return (
      <div className="w-full h-full bg-slate-900 flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <svg className="w-16 h-16 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
          <p className="text-slate-400 text-sm">비디오를 준비 중입니다.</p>
        </div>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="w-full h-full relative bg-black">
      <video
        ref={videoRef}
        className="w-full h-full object-contain"
        controls
        playsInline
        preload="metadata"
        onLoadedMetadata={handleLoadedMetadata}
      >
        <source src={videoUrl} type="application/x-mpegURL" />
        브라우저가 비디오 재생을 지원하지 않습니다.
      </video>
    </div>
  );
}