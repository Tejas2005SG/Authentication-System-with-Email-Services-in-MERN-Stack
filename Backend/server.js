import express from "express"; // module form 
import dotenv from "dotenv";
import {connectDb } from "./Db/connectDb.js";
import authRoutes from "./Routes/auth.route.js"
import cors from "cors";
import path from "path";
import cookieParser from "cookie-parser";



dotenv.config();
const app = express();
const PORT = process.env.PORT||3000;
const __dirname = path.resolve();

app.use(cors({origin:"http://localhost:5173", credentials:true}))


app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));


app.use("/api/auth", authRoutes);

if(process.env.NODE_ENV==="production"){
    app.use(express.static(path.join(__dirname, "/Frontend/dist")));

    app.get("*", (req,res)=>{
        res.sendFile(path.resolve(__dirname, "Frontend", "dist", "index.html"));
    })
}



app.listen(PORT,()=>{
    console.log(PORT)
    connectDb();
});





