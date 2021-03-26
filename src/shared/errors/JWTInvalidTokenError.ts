import { AppError } from "./AppError";

export class JWTInvalidTokenError extends AppError {
  constructor() {
    super("JWT invalid token!", 401);
  }
}
