const { Router } = require("express");
const { renderNotePage, renderHomePage } = require("../controllers/views");

const router = Router();

router.get("/notes", renderNotePage);
router.get("/*", renderHomePage);

module.exports = router;
