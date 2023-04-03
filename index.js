const express = require("express");
const mongoose = require("mongoose");
const app = express();
const { checkBody } = require("./utils/checkBody");
require("dotenv").config();
const { Pet } = require("./schema/pet");

app.use(express.json());

const PORT = process.env.PORT || 6000;

mongoose.connect(process.env.MONGO_CONNECTION).then(() => {
  console.log("Database connected");
});

app.get("/all", async (req, res) => {
  try {
    const pets = await Pet.find({});
    if (!pets && pets.length <= 0) throw new Error("No pets found");
    res.send({ message: "Pets:", data: pets });
  } catch (error) {
    res.send({ message: error.message });
  }
});

app.post("/", async (req, res) => {
  try {
    const { body } = req;
    if (!checkBody(body)) throw new Error("All fields are required!");
    const pet = new Pet(body);
    await pet.save();
    res.status(201).send({ message: "Pet saved successfully" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

app.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const pet = await Pet.findById(id);
    if (!pet) throw new Error("Pet not found");
    res.send({ message: "Pet found", data: pet });
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
});

app.put("/:id", async (req, res) => {
  try {
    const { body } = req;
    if (!checkBody(body)) throw new Error("All fields are required!");
    const id = req.params.id;
    const pet = await Pet.findById(id);
    if (!pet) throw new Error("Pet not found!");

    await Pet.updateOne({ _id: id }, { ...body });
    res.send({
      message: "Updated successfully!",
      data: { id: pet._id, ...body },
    });
  } catch (error) {
    res.send({ message: error.message });
  }
});

app.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const pet = await Pet.findById(id);
    if (!pet) throw new Error("Pet not found!");
    await Pet.deleteOne({ _id: id });
    res.send({ message: "Pet deleted from database!" });
  } catch (error) {
    res.send({ message: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
