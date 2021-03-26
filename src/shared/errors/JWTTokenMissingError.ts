import { AppError } from "./AppError";

export class JWTTokenMissingError extends AppError {
  constructor() {
    super("JWT token is missing!", 401);
  }
}
