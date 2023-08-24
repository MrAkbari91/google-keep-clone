import React, { useContext, useState } from 'react';
import noteContext from '../context/notes/NotesContext';

const Addnote = () => {
    const [isFocused, setIsFocused] = useState(false);
    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    const context = useContext(noteContext)
    const { addNote } = context;
    const [note, setNote] = useState({ title: "", description: "" })

    const handleClick = (e) => {
        e.preventDefault();
        addNote(note)
        setNote({ title: "", description: "" })
    }

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }

    
    return (
        <>
            <div className="mx-auto my-5 w-full lg:max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg">

                <form className="mt-8 space-y-6" action="#" >
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                        <input type="text" id="title" name="title" value={note.title} onChange={onChange} onFocus={handleFocus} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Title" required />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                        <textarea name="description" id="description" placeholder="description" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={onChange} value={note.description} required rows="5" cols="60"> </textarea>
                    </div>

                    <button type="submit" className="w-full px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handleClick}>Save</button>

                </form>
            </div>
        </>
    )
}

export default Addnote