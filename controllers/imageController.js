const db = require('../models');

module.exports = {
  findAll: function(req, res) {
    db.Data.find(req.query)
    .then(dbImage => res.json(dbImage))
    .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    console.log(req.params.id);
    db.Data.findById(req.params.id)
      .then(dbImage => {
        console.log(dbImage)
        res.json(dbImage)})
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Data.create(req.body)
      .then(dbImage => res.json(dbImage))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Data.findOneAndUpdate({ id: req.params.id }, req.body)
      .then(dbImage => res.json(dbImage))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Data.findById(req.params.id)
      .then(dbImage => dbImage.remove())
      .then(dbImage => res.json(dbImage))
      .catch(err => res.status(422).json(err));
  },
};
