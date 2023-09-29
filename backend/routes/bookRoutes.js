import express from "express";
import { Book } from "../models/bookModel.js";

const router = express.Router();

router.post("/", async (request, response) => {
  try {
    if (
      !request.body.name ||
      !request.body.author ||
      !request.body.publishedYear
    ) {
      return response.status(400).send({
        message: "Send all required fields: name, author, publishedYear",
      });
    }
    const newBook = new Book({
      name: request.body.name,
      author: request.body.author,
      publishedYear: request.body.publishedYear,
    });
    console.log("Book created");
    const book = await Book.create(newBook);
    console.log("Book saved");
    return response.status(200).send(book);
  } catch (error) {
    console.log(error);
    response.status(500).send({ message: error.message });
  }
});

router.get("/", async (request, response) => {
  try {
    const books = await Book.find({});

    return response.status(200).json({
      count: books.length,
      data: books,
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

router.get("/:id", async (request, response) => {
  try {
    const { id } = request.params;

    const book = await Book.findById(id);

    return response.status(200).json({
      book,
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

router.put("/:id", async (request, response) => {
  try {
    if (
      !request.body.name ||
      !request.body.author ||
      !request.body.publishedYear
    ) {
      return response.status(400).send({
        message: "Send all required fields: name, author, publishedYear",
      });
    }

    const { id } = request.params;

    const results = await Book.findByIdAndUpdate(id, request.body);
    console.log(results);

    if (!results) {
      return response.status(404).send({ message: "Book not found" });
    }

    return response.status(200).send({ message: "Book updated" });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

router.delete("/:id", async (request, response) => {
  try {
    const { id } = request.params;

    const results = await Book.findByIdAndDelete(id);

    if (!results) {
      return response.status(404).send({ message: "Book not found" });
    }

    return response.status(200).send({ message: "Book deleted" });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});


export default router;