const jwt = require('jsonwebtoken')
const User = require('../models/userModel')

const auth = async(req, res, next) => {
    //verify user is authenticated
    const {authentication} = req.headers

    if(!authentication){
        return res.status(401).json({error:'Authentication token is required'})
    }

    const token = authentication.split(' ')[1]

    try {
        const {_id} = jwt.verify(token, process.env.SECRET)
        req.user = await User.findOne({ _id }).select('_id')
        next()
    } catch (err) {
        console.log(error)
        res.status(401).json({error: 'Request is not authorized'})
    }

}

module.exports = auth