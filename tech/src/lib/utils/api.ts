import { NextResponse } from "next/server";
import { ZodError } from "zod";

export type ApiError = {
  error: {
    code: string;
    message: string;
    details?: Array<{ field: string; message: string }>;
  };
};

export function successResponse<T>(data: T, status = 200) {
  return NextResponse.json({ data }, { status });
}

export function paginatedResponse<T>(
  data: T[],
  total: number,
  page: number,
  perPage: number
) {
  return NextResponse.json({
    data,
    meta: {
      total,
      page,
      per_page: perPage,
      total_pages: Math.ceil(total / perPage),
    },
  });
}

export function errorResponse(
  code: string,
  message: string,
  status: number,
  details?: Array<{ field: string; message: string }>
) {
  return NextResponse.json(
    { error: { code, message, details: details ?? [] } },
    { status }
  );
}

export function validationErrorResponse(error: ZodError) {
  const details = error.issues.map((err) => ({
    field: err.path.join("."),
    message: err.message,
  }));
  return errorResponse("VALIDATION_ERROR", "요청 본문 유효성 검사 실패", 400, details);
}

export function unauthorizedResponse(message = "인증이 필요합니다.") {
  return errorResponse("UNAUTHORIZED", message, 401);
}

export function forbiddenResponse(message = "권한이 없습니다.") {
  return errorResponse("FORBIDDEN", message, 403);
}

export function notFoundResponse(resource = "리소스") {
  return errorResponse("NOT_FOUND", `요청하신 ${resource}을(를) 찾을 수 없습니다.`, 404);
}

export function conflictResponse(code: string, message: string) {
  return errorResponse(code, message, 409);
}
