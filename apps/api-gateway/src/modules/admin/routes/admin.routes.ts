import express, { Application } from "express";
import adminController from "../controller/admin.controller";


const adminRoute: Application = express();
const controller = new adminController();

adminRoute.get("/get-users", controller.getAllUsers);
adminRoute.get("/get-instructors", controller.getAllInstructors);
adminRoute.delete("/delete-user/:id", controller.deleteUser);
adminRoute.post("/add-faq", controller.addFAQ);
adminRoute.get("/get-faq", controller.getFAQ);
adminRoute.post("/add-categories", controller.addCategories);
adminRoute.get("/get-categories", controller.getCategories);

export default adminRoute;
