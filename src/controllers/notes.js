//require utils and other modules
const {
  readFromDataFile,
  writeToDataFile,
} = require("../utils/interactWithDF");

const { v4: uuidv4 } = require("uuid");

const getNotes = (req, res) => {
  // read from data file
  const notes = readFromDataFile("db");
  // send data and return response
  return res.json(notes);
};

function deleteNote(req, res) {
  // get id for the note
  const { id } = req.params;

  // get all data from file
  const notes = readFromDataFile("db");

  // remove note from file
  const filteredDataFile = notes.filter((item) => {
    item.id !== id;
  });

  // write into data file
  writeToDataFile("db", filteredDataFile);

  // send response
  res.json({
    message: "Note has been successfully delated!",
  });
}

const createNote = (req, res) => {
  //get data from db
  const notes = readFromDataFile("db");

  //get data from the user
  const { title, text } = req.body;

  //generate unique id
  const id = uuidv4();

  //write note into data file
  const createANote = { id, title, text };
  writeToDataFile("db", [newNote, ...notes]);

  //send file as response - is it needed?
  res.json(createANote);
};

module.exports = { getNotes, deleteNote, createNote };
