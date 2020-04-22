const router = require("express").Router();
const barRoute = require("./barRoutes");

router.use("/api", barRoute);

module.exports = router;