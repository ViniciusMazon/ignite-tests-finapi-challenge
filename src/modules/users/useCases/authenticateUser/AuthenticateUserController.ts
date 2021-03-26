import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { AuthenticateUserUseCase } from './AuthenticateUserUseCase';

export class AuthenticateUserController {
  async execute(request: Request, response: Response) {
    const { email, password } = request.body;

    const authenticateUser = container.resolve(AuthenticateUserUseCase);

    const { user, token } = await authenticateUser.execute({
      email,
      password
    });

    return response.json({ user, token });
  }
}
