import mongoose from "mongoose";

export const connectDB = async () => {
    try{
        await mongoose.connect("mongodb://localhost:27017/trivial-chat", {useNewUrlParser: true, useUnifiedTopology:true});
        await console.log("database is connected...");
    }catch (err){
        console.log(err)
    }
}
