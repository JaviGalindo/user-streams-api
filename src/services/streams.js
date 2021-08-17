const router = require("express").Router();
router.get("/:userId", getById);
const {getNumOfConcurrentStreamByUserId} = require("../database/streamUsers");

function getById(req, res) {
    const numStreams = getNumOfConcurrentStreamByUserId(req.params.userId);

    return res.json({numStreams});
}

module.exports = router;
