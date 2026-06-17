"use server";

import { getPrisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { requireRole } from "@/lib/utils/auth";

export async function toggleCoursePublished(courseId: string, currentlyPublished: boolean) {
  const auth = await requireRole("admin");
  if ("error" in auth) {
    return { error: "관리자 권한이 필요합니다." };
  }

  const prisma = await getPrisma();
  await prisma.course.update({
    where: { id: courseId },
    data: {
      isPublished: !currentlyPublished,
      publishedAt: !currentlyPublished ? new Date() : null,
    },
  });
  revalidatePath("/admin/courses");
  return { success: true };
}
