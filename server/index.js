import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import initRoutes from "./routes/index";
import dbConnect from "./config/dbconnect";

const app = express();
dotenv.config();
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// connnect database
dbConnect();

// routes
initRoutes(app);

app.use("/", (req, res) => {
  res.send("Hello World!");
});

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
