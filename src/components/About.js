import React, { useContext } from 'react';
import noteContext from '../context/notes/NotesContext';

const About = () => {
    const a = useContext(noteContext);
    return (
        <>
            <h1>About Page of {a.name} {a.surname}</h1>
        </>
    );
}

export default About;