//require utils and other modules
const {
  readFromDataFile,
  writeToDataFile,
} = require("../utils/interactWithDF");

const { v4: uuidv4 } = require("uuid");

const getNotes = (req, res) => {
  try {
    // read from data file
    const notes = readFromDataFile("db");

    // send data and return response
    return res.json(notes);
  } catch (error) {
    console.log(`[ERROR: Server error | ${error.message}]`);

    return res.status(500).json({ suscess: false, error: "Server error" });
  }
};

const deleteNote = (req, res) => {
  try {
    // get id for the note
    const { id } = req.params;

    // get all data from file
    const notes = readFromDataFile("db");

    // remove note from file
    const filteredDataFile = notes.filter((item) => {
      return item.id !== id;
    });

    // write into data file
    writeToDataFile("db", filteredDataFile);

    // send response
    return res.json({
      message: "Note has been successfully delated!",
    });
  } catch (error) {
    console.log(`[ERROR: Server error | ${error.message}]`);

    return res.status(500).json({ suscess: false, error: "server error" });
  }
};

const createNote = (req, res) => {
  try {
    //get data
    const { title, text } = req.body;

    //generate unique id
    const id = uuidv4();

    //write the note into a data file
    const createANote = { id, title, text };

    //get data
    const notes = readFromDataFile("db");

    // insert new note
    notes.push(createANote);
    console.log(notes);

    // write to file(db)
    writeToDataFile("db", notes);

    //send file as a response
    return res.json({ success: true, data: notes });
  } catch (error) {
    console.log(`[ERROR: Server error | ${error.message}]`);
    return res.status(500).json({ suscess: false, error: "server error" });
  }
};

module.exports = { getNotes, deleteNote, createNote };
