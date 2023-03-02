const Contact = require('../models/contactModel')
const mongoose = require('mongoose')

//get all contacts
const getContacts = async() => {
    try {
        const user_id = req.user._id
        const contacts = await Contact.find({user_id}).sort({createdAt: -1})

        res.status(200).json(contacts)
    } catch (err) {
        res.status(400).json({error:err.message})
    }
}

