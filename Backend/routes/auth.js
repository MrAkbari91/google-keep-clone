const express = require('express');
const router = express.Router();
const User = require('../models/User');
const {body, validationResult} = require('express-validator');


//create user using post "/api/auth/" doesnt require auth
router.post('/', [
    body('name', 'Enter a valid name minimum length 5 charactor').isLength({min: 5}),
    body('email', 'Enter valid Email').isEmail(),
    body('password', 'Enter password atlist 8 charactor').isLength({min: 8}),
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }
    User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    }).then(user => res.json(user))
        .catch(err => {
            console.log(err)
            res.json({error: 'This email is already used!', message: err.message})
        });
})

module.exports = router