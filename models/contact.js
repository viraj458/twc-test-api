const mongoose = require("mongoose")
const validator = require("validator")

const {isEmail, isMobilePhone} = validator;

const Schema = mongoose.Schema;

const ContactSchema = new Schema({
    full_name:{
        type:String,
        required:[true,'Fullname is required']
    },
    gender:{
        type:String,
        required:[true,'Gender is required'],
        enum:['Male','Female']
    },
    email:{
        type:String,
        required:[true,'Email is required'],
        validate:[isEmail,'Please enter valid email']
    },
    phone_number:{
        type:String,
        required:[true,'Phone number is required'],
        validate:[isMobilePhone,'Please enter valid phone number']
    },
    user_id: {
        type: String,
        required: true
    }
})

const Contact =mongoose.model('Contact',ContactSchema);
module.exports = {Contact}