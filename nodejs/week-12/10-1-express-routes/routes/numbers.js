const express = require('express');
const router = express.Router();

router.use(logger);
router.use(express.json());

// router.get('/', (req, res) => {
//     sendSuccess(req, res);
// });

// router.post('/', (req, res) => {
//     sendSuccess(req, res);
// });

// router.put('/', (req, res) => {
//     sendSuccess(req, res);
// });

// router.delete('/', (req, res) => {
//     sendSuccess(req, res);
// });
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
