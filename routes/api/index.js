const router = require("express").Router();
const articleRoutes = require("./articles");

// Routes

// Matches with /api/articles
router.use("/articles", articleRoutes);

module.exports = router;
