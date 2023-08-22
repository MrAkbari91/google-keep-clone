import React, { useContext } from 'react';
import noteContext from '../context/notes/NotesContext';
import { FaTrash } from "react-icons/fa6";

const Notesitem = (props) => {
    const context = useContext(noteContext)
    const { deleteNote } = context;

    const { note, updateNote } = props;
    return (
        <>
            <div className="block w-rounded-lg p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 relative h-auto">
                <FaTrash className='absolute top-3 right-3 dark:text-white cursor-pointer' onClick={() => deleteNote(note._id)} />
                <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                    {note.title}
                </h5>
                <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                    {note.description}
                </p>
            </div>
        </>
    );
}

export default Notesitem;