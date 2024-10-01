import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import cookieParser from "cookie-parser";
import User from "./models/user.model";
import userRouter  from "./routes/user/user.route";
import companyRouter from "./routes/company/company.route";

const app = express();


app.use(express.urlencoded({extended : true}))
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors({
    origin : "http://localhost:5174",
    credentials : true
}));
app.use("/user" , userRouter)
app.use('/company' , companyRouter)
app.get("/", (req , res) => {
  // const user = new User({
  //   name : "adsf", 
  //   email : "adf",
  //   avatar : "adsf"
  // })
  // user.save()
  res.send("Hello World!");
});

export = app;
