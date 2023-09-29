import express, { response } from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";
import bookRoutes from "./routes/bookRoutes.js";
import cors from "cors";

const app = express();

app.use(express.json());

// Middleware to handle CORS policy
// Option #1: Allow all origins with defualt of cors(*)
app.use(cors());
// Option #2: Allow only specific origins
// app.use(
//     cors({
//         origin: "http://localhost:5555",
//         methods: ["GET", "POST", "PUT", "DELETE"],
//         allowedHeaders: ['Content-Type']
// }));

app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("Welcome to my book store");
});

app.use('/books', bookRoutes)

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
