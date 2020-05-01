const db = require("../models");
const router = require("express").Router();
const moment = require("moment")

// returns all task entries in the db
router.get('/tasks', (req, res) => {
    
    db.Task.find()
      .then(tasks => res.json(tasks))

});

// updates task entry in the db
router.put('/tasks/:id', (req, res) => {

  db.Task
    .findByIdAndUpdate(req.params.id, req.body)
    .then(tasks => res.json(tasks))
    .catch(err => console.log(err))

});

module.exports = router;