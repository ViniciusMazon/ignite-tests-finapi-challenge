import { AppError } from "../../../../shared/errors/AppError";

export class GetBalanceError extends AppError {
  constructor() {
    super('User not found', 404);
  }
}
