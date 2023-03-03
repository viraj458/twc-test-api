const express = require('express')
const {
    getContacts,
    getContact,
    createContact,
    deleteContact,
    updateContact
} = require('../controllers/contactController')
const auth = require('../middleware/auth')
const router = express.Router()

//auth for all contact routes
router.use(auth)

//read all contacts
router.get('/', getContacts)

//read one contact
router.get('/:id', getContact)

//create a contact
router.post('/', createContact)

//delete a contact
router.delete('/:id', deleteContact)

//update a contact
router.put('/:id', updateContact)

module.exports = router