import React, {useContext} from 'react';
import noteContext from '../context/notes/NotesContext';
import { FaTrash } from "react-icons/fa6";

const Notesitem = (props) => {
    const context = useContext(noteContext)
    const {deleteNote} = context;

    const {note, updateNote} = props;
    return (
        <>

            <div
                className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div className="flex justify-end px-4 pt-4">
                    <button className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
                            type="button" onClick={() => deleteNote(note._id)}>
                            <FaTrash />
                    </button>

                </div>
                <div className="flex flex-col items-center pb-10" onClick={updateNote(note)}>
                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{note.title}</h5>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{note.description}</span>
                </div>
            </div>

            {/*<div className="col-sm-3 mb-3">*/}
            {/*    <div className="card">*/}
            {/*        <div className="card-body">*/}
            {/*            <div onClick={() => {*/}
            {/*                updateNote(note)*/}
            {/*            }}>*/}
            {/*                <h5 className="card-title">{note.title}</h5>*/}
            {/*                <p className="card-text">{note.description}</p>*/}
            {/*            </div>*/}
            {/*            <div className='text-end'>*/}
            {/*                <img src={bin} width={20} alt="bin" onClick={() => {*/}
            {/*                    deleteNote(note._id)*/}
            {/*                }}/>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </>
    );
}

export default Notesitem;