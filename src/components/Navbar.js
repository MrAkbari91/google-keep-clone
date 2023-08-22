import React from 'react';
// import { NavLink } from 'react-router-dom';
import { useNavigate, Link } from 'react-router-dom';
import { MdStickyNote2 } from "react-icons/md";
import DarkModeToggle from './DarkModeToggle';

const Navbar = () => {
    let navigate = useNavigate();


    const Logout = () => {
        localStorage.removeItem('token')
        navigate("/login");

    }

    return (
        <>
            <nav
                className='bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900 w-full z-10 top-0'>
                <div className='container flex flex-wrap items-center justify-between mx-auto'>
                    <Link to='/' className='flex items-center'>
                        <MdStickyNote2 className='text-3xl mr-3 sm:mr-4 text-yellow-300' />
                        <span className='self-center text-3xl whitespace-nowrap dark:text-white logo'>Keep</span>
                    </Link>
                    <div className='flex md:order-2 gap-3'>

                        <DarkModeToggle />
                        <button onClick={Logout} className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>Log out</button>


                        <button data-collapse-toggle='navbar-cta' type='button'
                            className='inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
                            aria-controls='navbar-cta' aria-expanded='false'>
                            <span className='sr-only'>Open main menu</span>
                            <svg className='w-6 h-6' aria-hidden='true' fill='currentColor' viewBox='0 0 20 20'
                                xmlns='http://www.w3.org/2000/svg'>
                                <path fillRule='evenodd'
                                    d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                                    clipRule='evenodd'></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;