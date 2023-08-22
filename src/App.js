import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'flowbite/dist/flowbite.min.css'
import 'flowbite/dist/flowbite'
import NotesState from './context/notes/NotesState';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';

const App = () => {

    return (
        <>
            <div>
                <NotesState>
                    <Router>
                        <Routes>
                            <Route exact path='/' element={<Home />}></Route>
                            <Route exact path='/login' element={<Login />}></Route>
                            <Route exact path='/signup' element={<Signup />}></Route>
                        </Routes>
                    </Router>
                </NotesState>
            </div>
        </>
    );
}

export default App; 