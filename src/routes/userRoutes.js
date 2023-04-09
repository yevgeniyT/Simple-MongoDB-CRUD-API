import express from "express";
//import all controllers in one object
import {
    createUser,
    getAllUsers,
    getSingleUser,
    deleteUser,
    updateUser,
    loginUser,
} from "../controllers/userControllers.js";

const router = express.Router();

router.get("/", getAllUsers);
router.post("/", createUser);
router.get("/:id", getSingleUser);
router.delete("/:id", deleteUser);
router.put("/:id", updateUser);
router.post("/login", loginUser);

export default router;
