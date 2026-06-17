// Re-export from the centralized validations module
export {
  registerSchema,
  loginSchema,
  profileUpdateSchema as updateProfileSchema,
} from "@/lib/validations";

export type {
  RegisterInput,
  LoginInput,
  ProfileUpdateInput,
} from "@/lib/validations";