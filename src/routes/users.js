const express = require('express')
const userSchema = require('../models/user.models.js')

const router = express.Router()

// Create User

router.post('/users', (req, res) => {
    const user = userSchema(req.body)
    user
        .save()
        .then((data) => res.json(data))
        .catch((err) => res.json({ message: err }))
})


// Get all Users

router.get('/users', (req, res) => {
    userSchema
        .find()
        .then((data) => res.json(data))
        .catch((err) => res.json({ message: err }))
})



// Get single User

router.get('/users/:id', (req, res) => {
    const { id } = req.params
    userSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((err) => res.json({ message: err }))
})

// Update User

router.put('/users/:id', (req, res) => {
    const { id } = req.params
    const { name, age, email } = req.body
    userSchema
        .updateOne({ _id: id }, { $set: { name: name, age: age, email: email } })
        .then((data) => res.json(data))
        .catch((err) => res.json({ message: err }))
})


// Delete User

router.delete('/users/:id', (req, res) => {
    const { id } = req.params
    userSchema
        .remove({ _id: id })
        .then((data) => res.json(data))
        .catch((err) => res.json({ message: err }))
})


module.exports = router