import { Router } from "express";
import {
  getAllUser,
  addUser,
  updateUser,
  deleteUser,
  getById,
} from "../service/userService.js";

const router = Router();

//get all user
router.get("/", getAllUser);

//add user
router.post("/", addUser);

//delete user
router.delete("/:id", deleteUser);

//update user
router.put("/:id", updateUser);

//getBy Id
router.get("/:id", getById);
export const userRouter = router;
