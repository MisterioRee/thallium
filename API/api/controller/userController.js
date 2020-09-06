const User = require('../models/userModel');


exports.signUp = ('/signup', (req, res, next) => {

    User.find({ email: req.body.email })
        .exec()
        .then((user) => {
            if (user.length >= 1) {
                return res.status(409).json({
                    message: 'Email Already Exists'
                });
            } else {
                bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
                    if (err) {
                        res.status(201).json({
                            error: err
                        });
                    } else {
                        const user = new User({
                            _id: new mongoose.Types.ObjectId(),
                            email: req.body.email,
                            password: hash
                        }).save()
                            .then(result => {
                                console.log(result);
                                res.status(201).json({
                                    message: 'user created successfully',
                                });
                            })
                            .catch((err) => {
                                console.log(err);
                                res.status(500).json({
                                    error: err
                                });
                            })
                    }
                });
            }
        })
});

