const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');

const Note = require('../models/Note');
const fetchuser = require('../middleware/fetchuser');

// get all the notes of user api/notes/fetchallnotes
router.get('/fetchallnotes', fetchuser, async (req, res) => {
    try {
        // fetch all notes by userid
        const notes = await Note.find({ user: req.user.id })
        res.json(notes)
    } catch (err) {
        console.log(err.message)
        res.status(err.status).send('error', err.message)
    }
})

// add notes using post api/notes/addnotes
router.post('/addnote', fetchuser, [
    body('title').exists(),
    body('description').exists(),
    body('tag').exists(),
], async (req, res) => {
    try {
        // if any validation error when add notes 
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { title, description, tag } = req.body
        const note = new Note({
            title, description, tag, user: req.user.id
        })

        const savenotes = await note.save();

        res.json(savenotes);

    } catch (err) {
        console.log(err.message)
        res.status(err.status).send('error', err.message)
    }
})
module.exports = router