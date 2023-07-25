import { useState } from 'react';
import NoteContext from './NotesContext';

const NotesState = (props) => {
    const NotesInitial = [
        {
            "_id": "64bd910352afbe45dbe8efc1",
            "user": "64bd843c43b9b69208fec4e2",
            "title": "my title",
            "description": "description demo",
            "tag": "todo",
            "date": "2023-07-23T20:43:47.865Z",
            "__v": 0
        },
        {
            "_id": "64c001aadad2d4531fd26f42",
            "user": "64bd843c43b9b69208fec4e2",
            "title": "my title",
            "description": "description demo",
            "tag": "todo",
            "date": "2023-07-25T17:08:58.731Z",
            "__v": 0
        },
        {
            "_id": "64c001acdad2d4531fd26f56",
            "user": "64bd843c43b9b69208fec4e2",
            "title": "my title",
            "description": "description demo",
            "tag": "todo",
            "date": "2023-07-25T17:09:00.513Z",
            "__v": 0
        }
    ]
    const [notes, setNotes] = useState(NotesInitial);

    // Add note
    const addNote = (data) => {
        //  call Add note api
        const note = {
            "_id": data.title,
            "user": "64bd843c43b9b69208fec4e2",
            "title": data.title,
            "description": data.description,
            "tag": data.tag,
            "date": "2023-07-25T17:09:00.513Z",
            "__v": 0
        }
        setNotes(notes.concat(note))

    }

    // Delete note
    const deleteNote = (id) => {
        console.log("delete note with id", id);
        // call Delete api
        const newNotes = notes.filter((note) => { return note._id !== id })
        setNotes(newNotes)
    }

    const editNote = (id, data) => {
        // api all
        // for (let index = 0; index < notes.length; index++) {
        //     const element = notes[index];
        //     if (element._id === id) {
        //         element.title = data.title;
        //         element.description = data.description;
        //         element.tag = data.tag;
        //     }

        // }

    }

    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NotesState;