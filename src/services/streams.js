const router = require("express").Router();
router.get("/:userId", getById);

function getById(req, res) {
    return res.json({})
}

module.exports = router;
