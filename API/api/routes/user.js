const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const User = require('../models/userModel');
const UserController = require('../controller/userController');

const bcrypt = require('bcrypt');
const saltRounds = 10;

router.post('/signup', UserController.signUp);


router.post('/login', UserController.login)


router.delete('/:userId', UserController.deleteUser);

module.exports = router;

