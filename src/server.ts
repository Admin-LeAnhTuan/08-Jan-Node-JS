import express from "express";
import http from "http";
import dotenv from "dotenv"
import bodyParser from "body-parser";

const ConnectDatabase = require("./helper/Connection.helper");
import productRouter from "./router/Product.router"
import categoryRouter from "./router/Category.router"
dotenv.config({
    path:"./config/.env"
})



// khoi tao app root
const app = express();
const server = http.createServer(app);

// khai bao bien
const port = 3000;

app.use(bodyParser.json());

// use router
app.use("/product", productRouter);
app.use("/category", categoryRouter);


// conection database
ConnectDatabase();

// running server 
server.listen(port, ()=> {
    console.log(`Server runing on http://localhost:${port}`)
})