const { Router } = require("express");
const { getNotes, createNote, deleteNote } = require("../controllers/notes");

const router = Router();

router.post("/", createNote);
router.get("/", getNotes);
router.delete("/:id", deleteNote);

module.exports = router;
