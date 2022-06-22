const path = require("path");

const renderHomePage = (req, res) => {
  try {
    // Write to file
    return res.sendFile(path.join(__dirname, "../../public/index.html"));
  } catch (error) {
    console.log(`[ERROR: Something went wrong | ${error.message}]`);

    return res
      .status(500)
      .json({ suscess: false, error: "Something went wrong" });
  }
};

const renderNotePage = (req, res) => {
  try {
    //write to file
    const filePath = path.join(__dirname, "../../public/notes.html");

    return res.sendFile(filePath);
  } catch (error) {
    console.log(`[ERROR: Something went wrong | ${error.message}]`);

    return res
      .status(500)
      .json({ suscess: false, error: "Something went wrong" });
  }
};

module.exports = { renderHomePage, renderNotePage };
