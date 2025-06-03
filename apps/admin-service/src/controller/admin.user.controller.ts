import { IAdminUserService } from "../interfaces/iAdmin.User.service";

export class AdminUserController {
  constructor(private service: IAdminUserService) { }

  getUsers = async () => {
    try {
      // throw new Error("error")
      const response = await this.service.getUsers()
      return response;
    } catch (e: any) {
      return ({ error: "rabbitmq error" })
    }
  };

  getInstructors = async () => {
    try {
      const response = await this.service.getInstructors()
      return response;
    } catch (e: any) {
      return ({ error: "rabbitmq error" })
    }
  };

  deleteUser = async (userId: string) => {
    try {
      const response = await this.service.deleteUser(userId);
      return response
    } catch (e: any) {
      return ({ error: "rabbitmq error" })
    }
  }

}
