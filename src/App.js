import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import NotesState from './context/notes/NotesState';
import Login from './components/Login';
import Signup from './components/Signup';

const App = () => {
    return (
        <NotesState>
            <Router>
                <Navbar />
                <div className="container">
                    <Routes>
                        <Route exact path='/' element={<Home />}></Route>
                        <Route exact path='/home' element={<Home />}></Route>
                        <Route exact path='/about' element={<About />}></Route>
                        <Route exact path='/login' element={<Login />}></Route>
                        <Route exact path='/signup' element={<Signup />}></Route>
                    </Routes>
                </div>
            </Router>
        </NotesState>

    );
}

export default App; 