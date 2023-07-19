const express = require('express');
const router = express.Router();
const User = require('../models/User');

//create user using post "/api/auth/" doesnt require auth
router.post('/', (req, res) => {
    const user = User(req.body)
    user.save()
    console.log(req.body);
    res.send(req.body)
})


module.exports = router