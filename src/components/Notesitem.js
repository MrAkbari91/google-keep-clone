import React, { useContext, useState } from 'react';
import noteContext from '../context/notes/NotesContext';
import bin from './bin.png'

const Notesitem = (props) => {
    const context = useContext(noteContext)
    const { deleteNote } = context;

    const { note, updateNote } = props;
    return (
        <>
            <div className="col-sm-3 mb-3">
                <div className="card">
                    <div className="card-body">
                        <div onClick={() => { updateNote(note) }}>
                            <h5 className="card-title">{note.title}</h5>
                            <p className="card-text">{note.description}</p>
                        </div>
                        <div className='text-end'>
                            <img src={bin} width={20} alt="bin" onClick={() => { deleteNote(note._id) }} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Notesitem;