const express = require("express");
const Notes = require("../models/Note.js");

const router = express.Router();

router.get("/", (req, res) => {
  res.send({ name: "anshul gupta!!!" });
});

// create the note

router.post("/create-note", async (req, res) => {
  try {
    const { title, des } = req.body;
    console.log("---", title, des);

    if (!title || !des) {
      return res.send({ response: "Details of the note is missing !" });
    }
    const newNote = new Notes({ title, des });
    await newNote.save();

    res.send({ response: { noteCreated: true, newNote } });
    return;
  } catch (err) {
    res.send({ response: "Error creating note" });
    console.log(err);
    return;
  }
});

router.get("/get-all-note", async (req, res) => {
  try {
    const allNotes = Notes.find();
    const list = await allNotes;
    console.log("list  -- ", list);

    res.send({ response: { list } });
    return;
  } catch (err) {
    res.send({ response: "Error fetching all note" });
    console.log(err);
    return;
  }
});

router.delete("/delete-note/:id", async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.send({ response: "ID of note is missing !" });
    }
    const note = await Notes.findByIdAndDelete(id);
    if (!note) {
      return res.send({ response: " note is not present !" });
    }
    res.send({
      response: { noteDeleted: true, message: "Note deleted successfully" },
    });
    return;
  } catch (err) {
    res.send({ error: "Error deleting note" });
    console.log(err);
    return;
  }
});

module.exports = router;
