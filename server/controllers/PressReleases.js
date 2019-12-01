/* Dependencies */
var PR = require("../models/PressReleases.model.js");

/* retrieve all specials */
exports.list = function (req, res) {
  res.json(req.Press);
};

/* Create a Special */
exports.create = function (req, res) {
  var Press = new PR(req.body);

  /* save to mongoDB */
  Press.save()
    .then(newPress => res.json(newPress))
    .catch(err => res.status(400).send(err));
};

/* Show the current special */
exports.read = function (req, res) {
  PR.findById(req.params)
    .then(foundPress => res.json(foundPress))
    .catch(err => res.status(400).send(err));
};

/* Update a special */
exports.update = function (req, res) {
  PR.findById(req.params)
    .then(foundPress => {
      foundPress.title = req.body.title;
      foundPress.text = req.body.text;
      foundPress.pdf = req.body.pdf;
      foundPress.expireDate = req.body.expireDate;
      foundPress.save()
        .then(updatedPress => res.json(updatedPress))
        .catch(err => res.status(400).send(err));
    })
    .catch(err => res.status(400).send(err));
};

/* Delete a special */
exports.delete = function (req, res) {
  PR.findByIdAndRemove(req.params)
    .then(deletedPress => res.json(deletedPress))
    .catch(err => res.status(400).send(err));
};

/* 
  Middleware: find N specials and pass on sorted by created date,
  either newest or oldest.
 */
exports.getNewOrOld = function (req, res, next) {
  /* if order=old query param is passed, gets N oldest specials */
  var order = req.query.order == 'old' ? 1 : -1;
  PR.find()
    .sort({
      createdDate: order
    })
    .limit(parseInt(req.query.num))
    .then(foundPress => req.Press = foundPress)
    .catch(err => res.status(400).send(err))
    .then(() => next())

};