const router = require("express").Router();
const itineraries = require("./itineraries");
const transactions = require("./transactions");
const users = require("./users");

router.use("/", users);
router.use("/", transactions);
router.use("/", itineraries);

module.exports = router;
