import userModel from "../models/users.model";

class userService{
    async createUserService(payload:{name:string,email:string,password:string}){
     try{
        const createduser = await userModel.create({
            name: payload.name,
            email: payload.email,
            password: payload.password
        }) 

        return createduser
     }catch(error){
        return error
     }
    }
}

export default new userService()