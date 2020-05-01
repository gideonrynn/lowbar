const router = require("express").Router();
const taskRoutes = require("./taskRoutes");

router.use("/api", taskRoutes);

module.exports = router;