// Re-export from the centralized validations module
export {
  lessonCreateSchema,
  lessonUpdateSchema,
  updateProgressSchema,
  progressUpdateSchema,
} from "@/lib/validations";

export type {
  LessonCreateInput,
  LessonUpdateInput,
  ProgressUpdateInput,
  UpdateProgressInput,
} from "@/lib/validations";