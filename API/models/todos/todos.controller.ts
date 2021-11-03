import { NextFunction, Request, Response } from "express";
import TodosService from "./todos.service";

export default class TodosController {
  static async getAllTodos(req: Request, res: Response, next: NextFunction) {
    try {
      const todos = await TodosService.getAllTodos();
      res.status(200).json(todos);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  static async getTodoByID(req: Request, res: Response, next: NextFunction) {
    const todoID = req.params.id;
    try {
      const todo = await TodosService.getTodoByID(todoID);
      res.status(200).json(todo);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async postNewTodo(req: Request, res: Response, next: NextFunction) {
    const newTodo = req.body;
    try {
      const response = await TodosService.postNewTodo(newTodo);
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async updateTodoProgress(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const todoProgress = req.body.progress;
    const todoID = req.params.id;
    try {
      const response = await TodosService.updateTodoProgress(
        todoID,
        todoProgress
      );
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async deleteTodo(req: Request, res: Response, next: NextFunction) {
    const todoID = req.params.id;
    try {
      const todo = await TodosService.deleteTodo(todoID);
      res.status(200).json(todo);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
