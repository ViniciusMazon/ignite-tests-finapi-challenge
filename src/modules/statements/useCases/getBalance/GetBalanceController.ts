import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { BalanceMap } from '../../mappers/BalanceMap';
import { GetBalanceUseCase } from './GetBalanceUseCase';

export class GetBalanceController {
  async execute(request: Request, response: Response) {
    const { id: user_id } = request.user;

    const getBalance = container.resolve(GetBalanceUseCase);

    const balance = await getBalance.execute({ user_id });

    const balanceDTO = BalanceMap.toDTO(balance);

    return response.json(balanceDTO);
  }
}
