const { Router } = require("express");

const views = require("./views");
const api = require("./api");

const router = Router();

router.use("/api", api);
router.use("/", views);

module.exports = router;
