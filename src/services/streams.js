const router = require("express").Router();
const  {MAX_NUM_STREAM_CONCURRENTLY} = require("../../config/config");
const validateUserId = require("../utils/validateUserId");
const formatErrors = require("../utils/formatErrors");
const {getNumOfConcurrentStreamByUserId} = require("../database/streamUsers");
router.get("/:userId", getById);

function getById(req, res) {
    try {
        const numberStreams = validateAndGetNumberOfStreams(req.params);
        return res.status(200).json({numberStreams});
    } catch(error) {
        return res.status(error.code).json({"errorCode":error.code, "message":error.message});
    }
}

function validateAndGetNumberOfStreams(params) {
    const isInvalid = validateUserId(params);
    if(!isInvalid) {
        const numStreams = getNumOfConcurrentStreamByUserId(params.userId);
        if(numStreams) {
            if(numStreams < MAX_NUM_STREAM_CONCURRENTLY){
                return numStreams;
            } else {
                throw formatErrors("Forbidden", "This user already has 3 concurrent streams");        
            }
        } else {
            throw formatErrors("NotFound", "User not found");
        }
    }
    throw formatErrors("Validation", isInvalid.message);
}
module.exports = router;
