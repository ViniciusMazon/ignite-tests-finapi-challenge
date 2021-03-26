import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { GetStatementOperationUseCase } from './GetStatementOperationUseCase';

export class GetStatementOperationController {
  async execute(request: Request, response: Response) {
    const { id: user_id } = request.user;
    const { statement_id } = request.params;

    const getStatementOperation = container.resolve(GetStatementOperationUseCase);

    const statementOperation = await getStatementOperation.execute({
      user_id,
      statement_id
    });

    return response.json(statementOperation);
  }
}
