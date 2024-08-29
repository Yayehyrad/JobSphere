import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();


app.use(express.urlencoded({extended : true}))
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors({
    origin : "http://localhost:5174",
    credentials : true
}));
app.get("/", (req , res) => {
  res.send("Hello World!");
});

export = app;
