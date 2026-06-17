"use client";

import { useState, useEffect } from "react";

interface ProgressBarProps {
  courseId: string;
  totalLessons: number;
}

interface ProgressInfo {
  completed: number;
  total: number;
  percentage: number;
}

export default function ProgressBar({ courseId, totalLessons }: ProgressBarProps) {
  const [progress, setProgress] = useState<ProgressInfo>({
    completed: 0,
    total: totalLessons,
    percentage: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProgress() {
      try {
        const res = await fetch(`/api/users/me/enrollments`);
        if (!res.ok) return;
        const json = await res.json();

        // Find enrollment for this course
        const enrollment = json.data?.find(
          (e: { courseId: string; completedLessons: number; totalLessons: number }) =>
            e.courseId === courseId
        );

        if (enrollment) {
          const completed = enrollment.completedLessons ?? 0;
          const total = enrollment.totalLessons ?? totalLessons;
          const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;
          setProgress({ completed, total, percentage });
        }
      } catch {
        // Silently fail — progress bar is non-critical
      } finally {
        setLoading(false);
      }
    }

    fetchProgress();
  }, [courseId, totalLessons]);

  if (loading) {
    return (
      <div className="animate-pulse">
        <div className="h-4 bg-slate-200 rounded-full" />
      </div>
    );
  }

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-sm">
        <span className="text-slate-600">
          완료 {progress.completed}/{progress.total}강
        </span>
        <span className="font-semibold text-ocean-700">{progress.percentage}%</span>
      </div>
      <div className="w-full h-3 bg-slate-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-ocean-500 to-ocean-600 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progress.percentage}%` }}
        />
      </div>
      {progress.percentage === 100 && (
        <p className="text-sm text-green-600 font-medium flex items-center gap-1">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          수강 완료!
        </p>
      )}
    </div>
  );
}