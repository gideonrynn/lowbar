const db = require("../models");
const router = require("express").Router();

// returns all plant entries in the db
router.get('/bars', (req, res) => {
    
    db.Bar.find()
      .then(bars => res.json(bars))

});

module.exports = router;