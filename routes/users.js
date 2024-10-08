import express from "express";

const router = express.Router()

import { updateUser, deleteUser, getUser, getAllUsers } from "../controllers/user.js";


// update
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);
router.get("/:id", getUser);
router.get("/", getAllUsers);


export default router;