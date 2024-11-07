import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/",{
    dbName: "local"
}).then(()=>{
    console.log("Connected to MongoDB");
}).catch(()=>{
    console.log("Error connecting to MongoDB");
})