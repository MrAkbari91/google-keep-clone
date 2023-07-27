const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fetchuser = require('../middleware/fetchuser');

const jwtsecret = "Dhabali";


//create user route
//create user using post "/api/auth/createuser" doesnt require auth
router.post('/createuser', [
    body('name', 'Enter a valid name minimum length 5 charactor').isLength({ min: 5 }),
    body('email', 'Enter valid Email').isEmail(),
    body('password', 'Enter password atlist 8 charactor').isLength({ min: 8 }),
], async (req, res) => {
    //if there are errors then return false or bad request
    const errors = validationResult(req);
    let success = false;
    if (!errors.isEmpty()) {
        success = false;
        return res.status(400).json({ success, errors: errors.array() });
    }
    try {
        //check if user with same email exists already
        let user = await User.findOne({ email: req.body.email })
        if (user) {
            success = false;
            return res.status(400).json({ success, errors: "User with this email already exists" })
        }
        const password = req.body.password
        var salt = bcrypt.genSaltSync(10);
        var hash = await bcrypt.hashSync(password, salt)

        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: hash
        })
        const data = {
            user: {
                id: user.id
            }
        }
        const authToken = jwt.sign(data, jwtsecret);
        success = true;
        res.json({ success, authToken })


    } catch (err) {
        res.status(err.status).send('error', err.message)
    }
})


// login route
// Authenticate a user using post "/api/auth/login"

router.post('/login', [
    body('email', 'Enter valid Email').isEmail(),
    body('password', "Password can't be blank").exists(),
], async (req, res) => {
    //if there are errors then return false or bad request
    const errors = validationResult(req);
    let success = false;
    if (!errors.isEmpty()) {
        success = false;
        return res.status(400).json({ success: false, errors: errors.array() });
    }
    const { email, password } = req.body;
    try {
        // find user data using email
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ errors: "user not found" });
        }
        // compare has password 
        const passwordCompare = await bcrypt.compare(password, user.password);
        if (!passwordCompare) {
            success = false;
            return res.status(400).json({ success, errors: "try to login with proper credentials" });
        }

        const data = {
            user: {
                id: user.id
            }
        }
        const authToken = jwt.sign(data, jwtsecret);
        let success = true;
        res.json({ success, authToken })

    } catch (err) {
        // console.log(err, 'catch');
        res.send(err.status, err.message);
    }

})

//get user data route
router.post('/getuser', fetchuser, async (req, res) => {
    try {
        userId = req.user.id;
        // get user data from auth-token using in header from middleware excerpt password
        const user = await User.findById(userId).select("-password")
        res.send(user)
    } catch (err) {
        res.status(400).send('internal server error: ' + err.message)
    }

})


module.exports = router