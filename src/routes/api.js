const router = require("express").Router();

router.use("/", require("./api/inmuebles"));

module.exports = router;
