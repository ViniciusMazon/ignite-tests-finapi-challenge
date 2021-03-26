import { AppError } from "../../../../shared/errors/AppError";

export class ShowUserProfileError extends AppError {
  constructor() {
    super('User not found', 404);
  }
}
