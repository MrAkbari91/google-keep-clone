import React, { useState } from 'react';
import NoteContext from './NotesContext';

const NotesState = (props) => {
    // const url = window.location.origin;
    const host = "http://localhost:5000"


    const NotesInitial = []
    const [notes, setNotes] = useState(NotesInitial);

    const getNotes = async () => {
        // API Call 
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": localStorage.getItem('token')
            }
        });
        const json = await response.json()
        setNotes(json)
    }


    // Add note
    const addNote = async (data) => {
        //  call Add note api
        const response = await fetch((`${host}/api/notes/addnote`), {
            method: 'POST',
            headers: {
                'content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
            body: JSON.stringify(data)
        });
        const note = await response.json();
        setNotes(notes.concat(note))

    }

    // Delete note
    const deleteNote = async (id) => {

        // call Delete api
        const response = await fetch((`${host}/api/notes/deletenote/${id}`), {
            method: 'DELETE',
            headers: {
                'content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
            body: JSON.stringify()
        });
        const json = response.json();


        const newNotes = notes.filter((note) => { return note._id !== id })
        setNotes(newNotes)
    }

    const editNote = async (id, title, description) => {
        // api all
        const response = await fetch((`${host}/api/notes/updatenote/${id}`), {
            method: 'PUT',
            headers: {
                'content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
            body: JSON.stringify({ title, description })
        });
        // const json = response.json();

        let newNotes = JSON.parse(JSON.stringify(notes))
        for (let index = 0; index < newNotes.length; index++) {
            const element = newNotes[index];
            if (element._id === id) {
                newNotes[index].title = title;
                newNotes[index].description = description;
                break;
            }

        }
        setNotes(newNotes);
    }

    return (
        <NoteContext.Provider value={{ notes, getNotes, addNote, deleteNote, editNote }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NotesState;