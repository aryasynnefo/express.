import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    date:{
        type:Date
    },
    name:{
        type:String
    }
})


export default mongoose.model.Users||mongoose.model("User",userSchema);



































