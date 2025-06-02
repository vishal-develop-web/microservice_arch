import { NextFunction, Request, Response } from "express";

import AdminRabbitMQClient from "../rabbitmq/client";
import "dotenv/config";
import { StatusCode } from "../../../interfaces/enum";
import { retryAndBreakerOperation } from "../../../retry-handler/retry";

export interface CustomRequest extends Request {
  role?: string;
  userId?: string;
}

export default class AdminController {
  getAllUsers = async (
    req: CustomRequest,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const operation = "get-all-users";
      const response: any = await retryAndBreakerOperation(() => AdminRabbitMQClient.produce(null, operation));
      res.status(StatusCode.OK).json(JSON.parse(response.content.toString()));
    } catch (e: any) {
      next(e);
    }
  };

  getAllInstructors = async (
    req: CustomRequest,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const operation = "get-all-instructors";
      const response: any = await AdminRabbitMQClient.produce(null, operation);
      res.status(StatusCode.OK).json(JSON.parse(response.content.toString()));
    } catch (e: any) {
      next(e);
    }
  };

  deleteUser = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const operation = "delete-user";
      const userId = req.params.id;
      const response: any = await AdminRabbitMQClient.produce(
        userId,
        operation
      );
      res.status(StatusCode.OK).json(JSON.parse(response.content.toString()));
    } catch (e: any) {
      next(e);
    }
  };

  addFAQ = async (req: CustomRequest, res: Response, next: NextFunction) => {
    try {
      const operation = "add-faq";
      const questions = req.body;
      const response: any = await AdminRabbitMQClient.produce(
        questions,
        operation
      );
      res.status(StatusCode.OK).json(JSON.parse(response.content.toString()));
    } catch (e: any) {
      next(e);
    }
  };

  getFAQ = async (req: CustomRequest, res: Response, next: NextFunction) => {
    try {
      const operation = "get-faq";
      const response: any = await AdminRabbitMQClient.produce(
        null,
        operation
      );
      res.status(StatusCode.OK).json(JSON.parse(response.content.toString()));
    } catch (e: any) {
      next(e);
    }
  };

  addCategories = async (req: CustomRequest, res: Response, next: NextFunction) => {
    try {
      const operation = "add-categories";
      const categories = req.body;
      const response: any = await AdminRabbitMQClient.produce(
        categories,
        operation
      );
      res.status(StatusCode.OK).json(JSON.parse(response.content.toString()));
    } catch (e: any) {
      next(e);
    }
  };

  getCategories = async (req: CustomRequest, res: Response, next: NextFunction) => {
    try {
      const operation = "get-categories";
      const response: any = await AdminRabbitMQClient.produce(
        null,
        operation
      );
      res.status(StatusCode.OK).json(JSON.parse(response.content.toString()));
    } catch (e: any) {
      next(e);
    }
  };
}
