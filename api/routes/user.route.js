import express from "express";
import { test, updateUser } from "../controllers/user.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.get("/test", test);
router.put("/update/:userId", verifyToken, updateUser);

export default router;
// default means we'r exporting it as router but while importing we'r free to give it any other name, for our case we'll give it userRoutes name while importing in index.js
