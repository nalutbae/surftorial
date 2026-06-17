"use client";

import { useTransition } from "react";
import { toggleCoursePublished } from "./actions";

export function PublishToggleForm({
  courseId,
  isPublished,
}: {
  courseId: string;
  isPublished: boolean;
}) {
  const [pending, startTransition] = useTransition();

  return (
    <button
      onClick={() => {
        startTransition(async () => {
          await toggleCoursePublished(courseId, isPublished);
        });
      }}
      disabled={pending}
      className={`text-xs font-medium px-3 py-1.5 rounded-lg border transition-colors ${
        isPublished
          ? "text-yellow-600 border-yellow-300 hover:bg-yellow-50"
          : "text-green-600 border-green-300 hover:bg-green-50"
      } ${pending ? "opacity-50 cursor-not-allowed" : ""}`}
    >
      {pending
        ? "처리 중..."
        : isPublished
          ? "🔒 비공개"
          : "✅ 공개"}
    </button>
  );
}
