import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {

    const [credentials, setCredentials] = useState({ name: '', email: '', password: '' })
    const { name, email, password } = credentials
    let navigate = useNavigate();
    const handleEvent = async (e) => {
        e.preventDefault();

        const response = await fetch("http://localhost:5000/api/auth/createuser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, password })
        })

        const json = await response.json();
        console.log(json);
        if (json.success) {
            // Save the auth token and redirect
            localStorage.setItem('token', json.authToken);
            navigate("/login");

        } else {
            alert(json.errors);
        }
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    return (
        <>
            <section className="h-screen">
                <div className="h-full">
                    <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
                        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
                            </div>
                            <div className="relative w-96 px-8 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20 dark:bg-gray-700 dark:border-gray-200 border">
                                <div className="max-w-md mx-auto">
                                    <div>
                                        <h1 className="text-2xl font-semibold dark:text-white">Sign Up</h1>
                                    </div>
                                    <div className="divide-y divide-gray-200">
                                        <form className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7" onSubmit={handleEvent}>
                                            <div className="relative z-0 w-full group">
                                                <input type="text" id='name' name='name' value={credentials.name} onChange={onChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer dark:text-white" placeholder=" " required />
                                                <label htmlFor="floating_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Full Name</label>
                                            </div>
                                            <div className="relative z-0 w-full mb-6 group">
                                                <input type="email" id='email' name='email' value={credentials.email} onChange={onChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer dark:text-white" placeholder=" " required />
                                                <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                                            </div>
                                            <div className="relative z-0 w-full mb-6 group">
                                                <input type="password" id='password' name='password' value={credentials.password} onChange={onChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer dark:text-white" placeholder=" " required />
                                                <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                                            </div>
                                            <div className="relative z-0 w-full mb-6 group">
                                                <button className="bg-blue-500 text-white rounded-md px-8 py-2" type="submit">Sign up</button>
                                            </div>
                                            <div className="relative z-0 w-full mb-6 group">
                                                <p className='text-sm dark:text-white'>Already have account? <Link to="/login" className='text-sm text-blue-600 hover:underline'>Login</Link></p>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Signup