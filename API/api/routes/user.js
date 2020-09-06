const express = require('express');
const router = express.Router();

const User = require('../models/userModel');
const UserController = require('../controller/userController');



router.post('/signup', UserController.signUp);


router.post('/login', UserController.login)


router.delete('/:userId', UserController.deleteUser);

module.exports = router;

