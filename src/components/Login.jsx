import React, { useState } from 'react';
import './Login.css';
const Login = () => {
    const [role, setRole] = useState('student');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Handler functions
    const handleRoleChange = (e) => setRole(e.target.value);
    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);

    const handleLogin = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        console.log('Login Attempt:', { role, email, password });
        try {
            const response = await fetch('http://localhost:5000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ role, email, password }),
            });

            if (!response.ok) {
                throw new Error('Login Failed');
            }

            const data = await response.json();
            console.log('Login Success:', data);
            // Redirect to home page or perform other actions on success
        } catch (error) {
            console.error('Error:', error);
            alert('Login failed. Please check your credentials.');
        }
    };
    const handleRegister = async (e) =>{
        e.preventDefault();
        console.log('Register Attempt:', { role, email, password });
        try {
            const response = await fetch('http://localhost:5000/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ role, email, password }),
            });

            if(!response.ok){
                throw new Error('Registration Failed');
            }

            const data = await response.json();
            console.log('Registration Success:', data);
            // Redirect to home page or perform other actions on success
        }catch(error){
            console.error('Error:', error);
            alert('Registration failed. Please check your credentials.');
        }
    }

    return (
        <div className="authbox">
            <div className="loginleft">
                <h1>Login</h1>
                <form onSubmit={handleLogin}>
                    <div>
                        <label>
                            <input
                                type="radio"
                                name="role"
                                value="student"
                                checked={role === 'student'}
                                onChange={handleRoleChange}
                            />
                            Student
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="role"
                                value="teacher"
                                checked={role === 'teacher'}
                                onChange={handleRoleChange}
                            />
                            Teacher
                        </label>
                    </div>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={email}
                        onChange={handleEmailChange}
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={password}
                        onChange={handlePasswordChange}
                        required
                    />
                    <button type="submit">Login</button>
                </form>
            </div>

            {/* Registration Section */}
            <div className="RegistrationRight">
                <div className="registration">
                    <h1>Registration</h1>
                    <form onSubmit={handleRegister}>
                        <input type="text" name="name" placeholder="Name" required />
                        <div>
                            <input type="email" name="email" placeholder="Email" required />
                            <button type="button">Send OTP</button>
                        </div>
                        <div>
                            <label>
                                <input type="radio" name="role" value="student" />
                                Student
                            </label>
                            <label>
                                <input type="radio" name="role" value="teacher" />
                                Teacher
                            </label>
                        </div>
                        <input type="text" name="otp" placeholder="OTP" required />
                        <input type="password" name="password" placeholder="Password" required />
                        <input type="password" name="cpassword" placeholder="Confirm Password" required />
                        <button type="submit">Register</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
