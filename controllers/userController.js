const jwt = require('jsonwebtoken')
const User = require('../models/userModel')

const createToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRET, { expiresIn: '1h' })
}


// signup a user
const signupUser = async (req, res) => {
    const {email, password} = req.body
  
    try {
      const user = await User.signup(email, password)
  
      // create a token
      const token = createToken(user._id)
  
      res.status(200).json({email, token})
    } catch (err) {
      res.status(400).json({error: err.message})
    }
}
  


  module.exports = { signupUser }