const jwt = require('jsonwebtoken');

const jwtsecret = "Dhabali";

const fetchuser = (req, res, next) =>{

    //get user information from jsonwebtoken and pass it to the callback function to be executed when the user is authenticated
    //get user information from jsonwebtoken and add in to req object
    const token = req.header('auth-token');
    if(!token) {
        res.status(401).send({error: 'Invalid credentials please login with valid credentials token'});
    }

    try {
        const data =jwt.verify(token, jwtsecret);
        req.user = data.user;
        next();

    }catch (error) {
        res.status(401).send({error: 'Invalid credentials please login with valid credentials'});
    }
}

module.exports = fetchuser;