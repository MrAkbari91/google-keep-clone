const express = require('express');
const router = express.Router();
const {body, validationResult} = require('express-validator');

const Note = require('../models/Note');
const fetchuser = require('../middleware/fetchuser');

// get all the notes of user using get: api/notes/fetchallnotes
router.get('/fetchallnotes', fetchuser, async (req, res) => {
    try {
        // fetch all notes by userid
        const notes = await Note.find({user: req.user.id})
        res.json(notes)
    } catch (err) {
        console.log(err.message)
        res.status(err.status).send('error', err.message)
    }
})

// add notes using post: api/notes/addnotes
router.post('/addnote', fetchuser, [
    body('title').exists(),
    body('description').exists(),
    body('tag').exists(),
], async (req, res) => {
        try {
            // if any validation error when add notes
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({errors: errors.array()});
            }

            const {title, description, tag} = req.body
            const note = new Note({
                title, description, tag, user: req.user.id
            })

            const savenotes = await note.save();
            res.json(savenotes);

        } catch (err) {
            console.log(err.message)
            res.status(err.status).send('error', err.message)
        }
    }
)


// Update note using put: api/notes/updatenote/:id

router.put('/updatenote/:id', fetchuser, async (req, res) => {
    const {title, description, tag} = req.body
    try {
        const newNotes = {}
        if (title) {
            newNotes.title = title
        }
        if (description) {
            newNotes.description = description
        }
        if (tag) {
            newNotes.tag = tag
        }

        //find notes to be updated and update it
        let note = await Note.findById(req.params.id);
        if (!note) {
            return res.status(404).send("not found")
        }

        if (note.user.toString() !== req.user.id) {
            return res.status(404).send("not Allowed");
        }
        note = await Note.findByIdAndUpdate(req.params.id, {$set: newNotes}, {new: true})
        res.json({note})
    } catch (err) {
        console.log(err.message)
        res.status(err.status).send('error', err.message)
    }
})


// Delete note using delete: api/notes/deletenote/:id

router.delete('/deletenote/:id', fetchuser, async (req, res) => {
    try {
        //find notes to be delete and delete it
        let note = await Note.findById(req.params.id);
        if (!note) {
            return res.status(404).send("not found")
        }
        // allow delete only if userown this note
        if (note.user.toString() !== req.user.id) {
            return res.status(404).send("not Allowed");
        }
        note = await Note.findByIdAndDelete(req.params.id)
        res.json({"Succsess": "note has been deleted", note: note})
    } catch (err) {
        console.log(err.message)
        res.status(err.status).send('error', err.message)
    }
})

module.exports = router