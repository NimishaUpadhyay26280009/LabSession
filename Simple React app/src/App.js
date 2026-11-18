import React, { useState } from 'react'; 
import './App.css'; 
 
function InputField({ label, type, value, onChange }) { 
 
    return ( 
        <div className="mb-3"> 
 
            <label className="form-label"> 
                {label} 
            </label> 
 
            <input 
                type={type} 
                className="form-control" 
                value={value} 
                onChange={onChange} 
                placeholder={`Enter ${label}`} 
            /> 
 
        </div> 
    ); 
} 
 
 
function RegistrationForm({ heading }) { 
 
    const [name, setName] = useState(""); 
    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState(""); 
 
    const [submitted, setSubmitted] = useState(false); 
 
    const handleSubmit = (event) => { 
 
        event.preventDefault(); 
 
 
        setSubmitted(true); 
 
    }; 
 
    return ( 
 
        <div className="card shadow p-4"> 
 
            <h2 className="text-center mb-4"> 
                {heading} 
            </h2> 
 
            <form onSubmit={handleSubmit}> 
 
                {/* Name Input */} 
                <InputField 
                    label="Name" 
                    type="text" 
                    value={name} 
                    onChange={(e) => { 
                        setName(e.target.value); 
                        setSubmitted(false); 
                    }} 
                /> 
 
                {/* Dynamic Greeting */} 
                {name && ( 
                    <p className="text-primary"> 
                        Hello, {name} 
                    </p> 
                )} 
 
                {/* Email Input */} 
                <InputField 
                    label="Email" 
                    type="email" 
                    value={email} 
                    onChange={(e) => { 
                        setEmail(e.target.value); 
                        setSubmitted(false); 
                    }} 
                /> 
 
                {/* Password Input */} 
                <InputField 
                    label="Password" 
                    type="password" 
                    value={password} 
                    onChange={(e) => { 
 
                        setPassword(e.target.value); 
                        setSubmitted(false); 
                    }} 
                /> 
 
                <button 
                    type="submit" 
                    className="btn btn-primary w-100" 
                > 
                    Submit 
                </button> 
 
            </form> 
 
            {/* Conditional Rendering */} 
            {submitted && ( 
 
                <div className="alert alert-success mt-4"> 
 
                    <h4>Registration Successful!</h4> 
 
                    <p>Name: {name}</p> 
 
                    <p>Email: {email}</p> 
 
                    <p>Password: {password}</p> 
 
                </div> 
 
            )} 
 
        </div> 
 
    ); 
} 
 
 
function App() { 
 
    return ( 
 
        <div className="container mt-5"> 
 
            <RegistrationForm 
                heading="User Registration Form" 
            /> 
 
        </div> 
 
    ); 
 
 
} 
 
export default App;