"use client";

import { useCallback, useTransition } from "react";
import { usePathname, useRouter } from "next/navigation";
import { updateUserRole, toggleUserActive } from "./actions";

export function RoleChangeForm({
  userId,
  currentRole,
}: {
  userId: string;
  currentRole: "student" | "instructor" | "admin";
}) {
  const [pending, startTransition] = useTransition();

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      const newRole = e.target.value as "student" | "instructor" | "admin";
      if (newRole === currentRole) return;
      startTransition(async () => {
        await updateUserRole(userId, newRole);
      });
    },
    [userId, currentRole]
  );

  const roleColors: Record<string, string> = {
    student: "bg-blue-100 text-blue-700",
    instructor: "bg-sunset-100 text-sunset-700",
    admin: "bg-purple-100 text-purple-700",
  };

  return (
    <select
      value={currentRole}
      onChange={handleChange}
      disabled={pending}
      className={`text-xs font-medium px-2 py-1 rounded-full border-0 cursor-pointer transition-opacity ${
        roleColors[currentRole] || "bg-slate-100 text-slate-600"
      } ${pending ? "opacity-50" : ""}`}
    >
      <option value="student">🎓 수강생</option>
      <option value="instructor">📝 강사</option>
      <option value="admin">👑 관리자</option>
    </select>
  );
}

export function ToggleActiveForm({
  userId,
  isActive,
}: {
  userId: string;
  isActive: boolean;
}) {
  const [pending, startTransition] = useTransition();

  return (
    <button
      onClick={() => {
        startTransition(async () => {
          await toggleUserActive(userId, !isActive);
        });
      }}
      disabled={pending}
      className={`text-xs font-medium px-3 py-1.5 rounded-lg border transition-colors ${
        isActive
          ? "text-red-600 border-red-300 hover:bg-red-50"
          : "text-green-600 border-green-300 hover:bg-green-50"
      } ${pending ? "opacity-50 cursor-not-allowed" : ""}`}
    >
      {pending ? "처리 중..." : isActive ? "비활성화" : "활성화"}
    </button>
  );
}

export function SearchForm({
  currentSearch,
  currentRole,
}: {
  currentSearch: string;
  currentRole: string;
}) {
  const router = useRouter();
  const pathname = usePathname();

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const form = new FormData(e.currentTarget);
      const search = form.get("search") as string;
      const role = form.get("role") as string;
      const params = new URLSearchParams();

      if (search?.trim()) params.set("search", search.trim());
      if (role && role !== "all") params.set("role", role);
      params.set("page", "1");

      router.push(`${pathname}?${params.toString()}`);
    },
    [pathname, router]
  );

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-3">
      <div className="relative">
        <svg
          className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          name="search"
          type="text"
          defaultValue={currentSearch}
          placeholder="이름 검색..."
          className="pl-9 pr-3 py-2 w-56 text-sm border border-slate-200 rounded-lg bg-white text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-ocean-300 focus:border-ocean-400"
        />
      </div>
      <select
        name="role"
        defaultValue={currentRole}
        className="px-3 py-2 text-sm border border-slate-200 rounded-lg bg-white text-slate-700 focus:outline-none focus:ring-2 focus:ring-ocean-300"
      >
        <option value="all">전체 역할</option>
        <option value="student">수강생</option>
        <option value="instructor">강사</option>
        <option value="admin">관리자</option>
      </select>
      <button
        type="submit"
        className="px-4 py-2 text-sm font-medium text-white bg-ocean-700 rounded-lg hover:bg-ocean-800 transition-colors"
      >
        검색
      </button>
    </form>
  );
}
