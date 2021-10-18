import { Router } from "express";
const router = Router();
import TodosController from "./todos.controller";

router.get("", TodosController.getAllTodos);
router.get("/:id", TodosController.getTodoByID);
router.post("", TodosController.postNewTodo);
router.put("/:id", TodosController.updateTodo);
router.delete("/:id", TodosController.deleteTodo);

export default router;