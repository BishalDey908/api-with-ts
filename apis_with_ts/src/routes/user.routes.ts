import userController from "../controllers/user.controller";


const express = require('express');
const router = express.Router();

router.post("/createUser",userController.createUser)

export default router
