const express = require('express');

const router = express.Router();


const {
    userLogin,
    createUser
} = require('../controller/userController');

router.get('/', (req,res) => { res.send("connected to app") });
router.post('/login', userLogin);
router.post('/create-account', createUser);
module.exports = router;