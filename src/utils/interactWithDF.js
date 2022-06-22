// import the fs and path modules
const fs = require("fs");
const path = require("path");

// read from file
const readFromFile = (fileName) => {
  try {
    const filePath = path.join(__dirname, `../../db/${fileName}.json`);

    // get data
    const retrieveData = fs.readFileSync(filePath, "utf8");

    return JSON.parse(retrieveData);
  } catch (error) {
    console.log(`[ERROR: Something went wrong | ${error.message}]`);

    return res
      .status(500)
      .json({ suscess: false, error: "Something went wrong" });
  }
};

//write to file
const writeToFile = (fileName, data) => {
  try {
    //get path to the db file
    const filePath = path.join(__dirname, `../../db/${fileName}.json`);

    //write data into the db file
    return fs.writeFileSync(filePath, JSON.stringify(data));
  } catch (error) {
    console.log(`[ERROR: Something went wrong | ${error.message}]`);

    return res
      .status(500)
      .json({ suscess: false, error: "Something went wrong" });
  }
};

module.exports = { readFromFile, writeToFile };
