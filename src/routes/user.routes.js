// routes.js
import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";

// Create an instance of the Express Router
const router = Router();

// Define a route for user registration using the POST method
router.route("/register").post(registerUser);

// Export the router for use in other files
export default router;
