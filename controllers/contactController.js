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

//get a contact
const getContact = async() => {
    try {
        const {id} = req.body
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({error:"contact not found"})
        }
        const contact = await Contact.findById(id)
        if(!contact){
            return res.status(404).json({error:"contact not found"})
        }
        res.status(200).json(contact)
    } catch (err) {
        res.status(400).json({error:err.message})
    }

}
