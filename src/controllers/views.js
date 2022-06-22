const path = require("path");

const renderHomePage = (req, res) => {
  //write to file
  res.sendFile(path.join(__dirname, "../../public/index.html"));
};

const renderNotePage = (req, res) => {
  //write to file
  const filePath = path.join(__dirname, "../../public/notes.html");

  res.sendFile(filePath);
};

module.exports = { renderHomePage, renderNotePage };
