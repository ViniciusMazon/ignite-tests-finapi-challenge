import { Router } from 'express';

import { CreateUserController } from '../modules/users/useCases/createUser/CreateUserController';

const usersRouter = Router();
const createUserController = new CreateUserController();

usersRouter.post('/', createUserController.execute);

export { usersRouter };
