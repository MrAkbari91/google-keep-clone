import React, { useContext } from 'react';
import noteContext from '../context/notes/NotesContext';
import Notesitem from './Notesitem';
import Addnote from './Addnote';

const Notes = () => {

    const context = useContext(noteContext)
    const { notes } = context;
    return (
        <>  
            <Addnote />

            <div className="row">
                {notes.map((note) => {

                    return (
                        <Notesitem note={note} key={note._id} />
                    )
                })}
            </div>
        </>
    );
}

export default Notes;