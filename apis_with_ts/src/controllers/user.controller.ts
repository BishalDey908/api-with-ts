import userService from "../services/user.service";
import { Request,Response } from "express";


class userController{
    
    async createUser(req:Request,res:Response){
        try{
            const createduser = await userService.createUserService((req as any).body)
            return res.status(201).json({message:"user created",data:createduser});
        }catch(error){
            console.log(error)
        }
    }
}

export default new userController()