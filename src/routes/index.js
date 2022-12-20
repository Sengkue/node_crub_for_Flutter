const router = require('express').Router();
const userRouter = require('../routes/userRoute');

userRouter(router);

module.exports = router;


