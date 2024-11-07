import express from "express"
require("./config/db.config")
const app = express()
app.use(express.json())


import router from "./routes/user.routes"

app.use("/api",router)

app.listen(3000,()=>{
    console.log("server is running on port 3000")
})
