import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import colors from "colors";
import gymDetailsRoutes from "./routes/gymDetailsRoutes.js";
import bodyParser from "body-parser";

dotenv.config();

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = process.env.PORT || 5000;

app.use("/api/gymDetails", gymDetailsRoutes);

app.get("/", (req, res) => {
  res.send("API is fucking running....");
});

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow
      .underline
  )
);
