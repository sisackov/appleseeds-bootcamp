const express = require('express');
const router = express.Router();

router.use(logger);
router.use(express.json());

const sendSuccess = (req, res) => {
    console.log(req.body);
    res.send(`success using ${req.method}`);
};

router
    .route('/')
    .get(sendSuccess)
    .post(sendSuccess)
    .put(sendSuccess)
    .delete(sendSuccess);

function logger(req, res, next) {
    console.log(req.originalUrl);
    next();
}

module.exports = router;
