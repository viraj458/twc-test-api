const Contact = require('../models/contactModel')
const mongoose = require('mongoose')

//get all contacts
const getContacts = async(req, res) => {
    try {
        // const user_id = req.user._id
        const contacts = await Contact.find().sort({createdAt: -1})

        res.status(200).json(contacts)
    } catch (err) {
        res.status(400).json({error:err.message})
    }
}

//get a contact
const getContact = async(req, res) => {
    try {
        const {id} = req.params
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

//create a contact
const createContact = async(req, res) => {
    try {
        const user_id = req.user._id
        const {fullName,gender,email,phoneNumber} = req.body
        const contact = await Contact.create({full_name:fullName,gender,email,phone_number:phoneNumber,user_id})
        res.status(200).json(contact)
    } catch (err) {
        res.status(400).json({error:err.message})
    }
}

//delete a contact
const deleteContact = async(req, res) => {
    try {
        const {id} = req.params
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({error:"contact not found"})
        }
        const contact = await Contact.findByIdAndDelete(id)
        if(!contact){
            return res.status(404).json({error:"contact not found"})
        }
        res.status(200).json(contact)
    } catch (err) {
        res.status(400).json({error:err.message})
    }
}

//update a contact
const updateContact = async(req, res) => {
    try {
        const {id} = req.params
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({error: "contact not found"})
        }
        const contact = await Contact.findByIdAndUpdate((id), {
            ...req.body
        },{new:true})
        if(!contact){
            res.status(404).json({error:"contact not found"})
        }
        res.status(200).json(contact)

    } catch (err) {
        res.status(400).json({error:err.message})
    }
}

module.exports = {
    getContacts,
    getContact,
    createContact,
    deleteContact,
    updateContact
}