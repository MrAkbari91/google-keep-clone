import React, { useContext, useState } from 'react';
import noteContext from '../context/notes/NotesContext';
import bin from './bin.png'
import edit from './edit.png'

const Notesitem = (props) => {
    const context = useContext(noteContext)
    const { deleteNote } = context;

    const { note } = props;
    return (
        <>
            <div className="col-sm-3 mb-3">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{note.title}</h5>
                        <p className="card-text">{note.description}</p>
                        <p className="card-text">{note.tag}</p>
                        <div>
                            <img src={bin} width={20} alt="bin" onClick={() => { deleteNote(note._id) }} />

                            <img src={edit} width={20} alt="edit" />
                        </div>
                        {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}

                    </div>
                </div>
            </div>
        </>
    );
}

export default Notesitem;