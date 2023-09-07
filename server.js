import express from 'express';
import dotenv from 'dotenv';
import router from './router.js';
import cors from 'cors';
import connect from './conn.js';    
const app=express();
dotenv.config();
app.use(cors());
app.use(express.json());
app.use('/api',router);
connect().then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log("server running");
    })  
}).catch((error)=>{
    console.log(error);
})
