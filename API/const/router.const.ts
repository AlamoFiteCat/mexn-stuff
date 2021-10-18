import { Router } from "express";
const router = Router();

import auth from "../models/auth/auth.routes";
import todos from "../models/todos/todos.routes";

router.use("/auth", auth);
router.use("/todos", todos);

export default router;
