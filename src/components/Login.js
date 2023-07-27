import React, { useState } from 'react'
import { useNavigate  } from 'react-router-dom'

const Login = () => {
    const [credentials, setCredentials] = useState({ email: '', password: '' })
    let navigate = useNavigate ();
    const handleEvent = async (e) => {
        e.preventDefault();

        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })
        })

        const json = await response.json();
        console.log(json);
        if (json.success) {
            // Save the auth token and redirect
            localStorage.setItem('token', json.authToken);
            navigate("/");

        } else {
            alert("Invalid credentials");
        }
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    return (
        <>
            <form onSubmit={handleEvent}>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" id='email' name='email' value={credentials.email} onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" id='password' name='password' value={credentials.password} onChange={onChange} />
                </div>
                <button type="submit" className="btn btn-primary" >Submit</button>
            </form>
        </>
    )
}

export default Login
