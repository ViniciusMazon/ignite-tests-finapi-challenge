import { AppError } from "../../../../shared/errors/AppError";

export namespace GetStatementOperationError {
  export class UserNotFound extends AppError {
    constructor() {
      super('User not found', 404);
    }
  }

  export class StatementNotFound extends AppError {
    constructor() {
      super('Statement not found', 404);
    }
  }
}
