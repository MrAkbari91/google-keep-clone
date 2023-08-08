import React from 'react';
import Notes from './Notes';
import Navbar from './Navbar';

const Home = () => {
    return (
        <>
        <Navbar />
            <div className="container mx-auto">
                <Notes />
            </div>
        </>
    );
}

export default Home;