const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const Config = require('../config/config')
dotenv.config();
const secret = Config.JWT_SECRET
const expiration = Config.JWT_EXPIRATION_TIME;

const generateToken = (res, id) => {
    const token = jwt.sign({ id }, secret, {
        expiresIn: expiration,
    });

    return res.cookie('myFinanceToken', token, {
        expires: new Date(Date.now() + expiration),
        secure: false, // set to true if your using https
        httpOnly: true,
    });
};

const verifyToken = async (req, res, next) => {
    const token = req.cookies.myFinanceToken || '';
    try {
        if (!token) {
            return res.status(401).json('You need to Login');
        }
        const decrypt = await jwt.verify(token, secret);
        req.params.userID = decrypt.id;
        next();
    } catch (err) {
        return res.status(500).json(err.toString());
    }
};


module.exports = {
    verifyToken,
    generateToken,
}
