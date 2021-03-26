import { User } from "../../entities/User";

export interface IAuthenticateUserResponseDTO {
  token: string;
  user: Pick<User, 'id' | 'name' | 'email'>;
}
