import mongoose from "mongoose";

export default async function connect(){
    const URI=process.env.DB_URL+process.env.DB_NAME;
  // mongodb://127.0.0.1:27017/program
    const db=await mongoose.connect(URI);
    console.log("database connected");
    return db;
  
}