const { Router } = require("express");
const { renderNotePage, renderHomePage } = require("../controllers/view");

const router = Router();

router.get("/notes", renderNotePage);
router.get("/*", renderHomePage);

module.exports = router;
