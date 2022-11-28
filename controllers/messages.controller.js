function getMessage(req, res) {
  res.send("This is the messages route.");
}

function postMessage(req, res) {
  console.log("Updating mesages...");
}

module.exports = {
  getMessage,
  postMessage,
};
