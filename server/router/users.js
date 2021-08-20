const router = require("express").Router();
const Controller = require("../controllers/controllerUsers");

router.post("/register", Controller.register);
router.post("/login", Controller.login);
router.get("/user", Controller.allUser);

module.exports = router;
