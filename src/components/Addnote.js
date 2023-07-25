import React, { useContext, useState } from 'react';
import noteContext from '../context/notes/NotesContext';


const Addnote = () => {

    const context = useContext(noteContext)
    const { addNote } = context;
    const [note, setNote] = useState({ title: "", description: "", tag: "default" })

    const handleClick = (e) => {
        e.preventDefault();
        addNote(note)
    }

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }

    return (
        <div>
            <div className="m-4">
                <h2>Add Notes</h2>
                <div className="row justify-content-center">
                    <div className="col-md-6 ">
                        <div className="card">
                            <div className="card-body">
                                <form className='my-3'>
                                    <div className="mb-3">
                                        <label className="form-label">Title</label>
                                        <input type="text" className="form-control" id="title" name="title" onChange={onChange} />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Description</label>
                                        <textarea name="description" id='description' onChange={onChange} className="form-control"></textarea>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Tag</label>
                                        <input type="text" className="form-control" id="tag" name="tag" onChange={onChange} />
                                    </div>
                                    <button type="submit" className="btn btn-primary" onClick={handleClick}>Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Addnote