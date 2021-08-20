const router = require("express").Router();
const Controller = require("../controllers/controllerTransactions");

router.get("/transaction", Controller.allTransaction);
router.post("/transaction", Controller.postTransaction);
router.delete("/transaction/:id", Controller.deleteTransaction);

module.exports = router;
