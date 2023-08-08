import React, { useContext, useState } from 'react';
import noteContext from '../context/notes/NotesContext';
import { Button, Card, Checkbox, Label, TextInput } from 'flowbite-react';

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
            <div className="mx-auto my-5 w-full lg:max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg border border-gray-200 shadow-xl dark:bg-gray-800 dark:border-gray-700">

                <form className="mt-8 space-y-6" action="#">
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                        <input type="text" id="title" name="title" value={note.title} onChange={onChange} onFocus={handleFocus} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Title" required />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                        <textarea  name="description" id="description" placeholder="description" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={onChange} value={note.description} required rows="5" cols="60"> </textarea> 
                    </div>

                    <button type="submit" className="w-full px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save</button>

                </form>
            </div>
            {/* <form className="flex flex-col gap-4">
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="email1"
                            value="Your email"
                        />
                    </div>
                    <TextInput
                        id="title" name="title" value={note.title} onChange={onChange} onFocus={handleFocus}
                        required
                        type="email"
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="password1"
                            value="Your password"
                        />
                    </div>
                    <TextInput
                        sizing="lg"
                        type="text"
                        name="description" id='description large' onChange={onChange} value={note.description}
                    />
                </div>
                <div className="flex items-center gap-2">
                    <Checkbox id="remember" />
                    <Label htmlFor="remember">
                        Remember me
                    </Label>
                </div>
                <Button type="submit" onClick={handleClick}>
                    Submit
                </Button>
            </form> */}

            {/* <div className="m-4">
             <h2>Add Notes</h2>
             <div className="row justify-content-center">
                 <div className="col-md-6 ">
                     <div className="card">
                         <div className="card-body">
                             <form className='my-3'>
        
                                 <div className="mb-3">
                                     <label className="form-label">Title</label>
                                     <input type="text" className="form-control" />
                                 </div>
                                 {isFocused ? (
                                     <div className="mb-3">
                                         <label className="form-label">Description</label>
                                         <textarea className="form-control"></textarea>
                                     </div>) : ('')}
                                 <button type="submit" className="btn btn-primary" >Submit</button>
                             </form>
                         </div>
                     </div>
                 </div>
             </div>
         </div> */}

        </>
    )
}

export default Addnote