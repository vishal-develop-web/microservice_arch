
import { IRepository } from "../interfaces/iRepository";
import FAQModel from "../model/schemas/faq.schema";
import CategoriesModel from "../model/schemas/categories.schema";

class DBConnectionError extends Error {
  constructor(message: string = "Database connection error") {
    super(message);
    this.name = "DBConnectionError";
    Object.setPrototypeOf(this, DBConnectionError.prototype);
  }
}

export class AdminRepository implements IRepository {


  async addCategories(categories: any): Promise<Object> {
    try {
      await CategoriesModel.deleteMany();
      await CategoriesModel.create(categories);
      return { success: true };
    } catch (e: any) {
      throw new DBConnectionError();
    }
  }

  async getCategories(): Promise<any> {
    try {
      const categories = await CategoriesModel.find();
      return categories;
    } catch (e: any) {
      throw new DBConnectionError();
    }
  }

  async getFAQ(): Promise<any> {
    try {
      const faq = await FAQModel.find();
      return faq;
    } catch (e: any) {
      throw new DBConnectionError();
    }
  }

  async addFAQ(questions: any): Promise<Object> {
    try {
      await FAQModel.deleteMany();
      await FAQModel.create(questions);
      return { success: true };
    } catch (e: any) {
      throw new DBConnectionError();
    }
  }
}
