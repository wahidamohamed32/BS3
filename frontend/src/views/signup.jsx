import React, { useState } from "react";
import { signup } from '../utils/api';

export default function Register({ setIsLogin }) {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignup = async () => {
        try {
            await signup({ fullName, email, password });
            alert('Signup successful! Please login.');
            window.location.href = '/login';
        } catch (error) {
            const message = error.message || 'Signup failed. Please try again.';
            alert(`Signup failed: ${message}`);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center space-y-4">
            <h2 className="text-2xl font-bold">Sign Up</h2>
            <input
                className="border p-2 rounded w-64"
                placeholder="Full Name"
                onChange={e => setFullName(e.target.value)}
            />
            <input
                className="border p-2 rounded w-64"
                placeholder="Email"
                onChange={e => setEmail(e.target.value)}
            />
            <input
                className="border p-2 rounded w-64"
                type="password"
                placeholder="Password"
                onChange={e => setPassword(e.target.value)}
            />
            <button
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-64"
                onClick={handleSignup}
            >
                Sign Up
            </button>

        </div>
    );
}
