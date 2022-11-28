const path = require("path");

function getMessage(req, res) {
  res.sendFile(path.join(__dirname, "..", "public", "skimountain.jpg"));
  //   res.send("This is the messages route.");
}

function postMessage(req, res) {
  console.log("Updating mesages...");
}

module.exports = {
  getMessage,
  postMessage,
};
