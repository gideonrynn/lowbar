const db = require("../models");
const router = require("express").Router();

// returns all plant entries in the db
router.get('/tasks', (req, res) => {
    
    db.Task.find()
      .then(tasks => res.json(tasks))

});

module.exports = router;