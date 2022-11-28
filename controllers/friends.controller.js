const model = require("../models/friends.model");

function postFriend(req, res) {
  //validation check
  if (!req.body.name) {
    return res.status(400).json({
      error: "Missing friend name",
    });
  }

  const newFriend = {
    id: model.length,
    name: req.body.name,
  };
  model.push(newFriend);

  res.json(newFriend);
}

function getFriends(req, res) {
  res.json(model);
}

function getFriend(req, res) {
  const friendId = Number(req.params.friendId);
  const friend = model[friendId];
  if (friend) {
    res.status(200).json(friend);
  } else {
    res.status(404).json({
      error: "Friend does not esist",
    });
  }
}

module.exports = {
  postFriend,
  getFriend,
  getFriends,
};
