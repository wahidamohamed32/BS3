import React, { useState } from "react";

export default function Login({ setIsLogin, setUser }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        const savedUser = JSON.parse(localStorage.getItem("user"));

        if (
            savedUser &&
            email === savedUser.email &&
            password === savedUser.password
        ) {
            localStorage.setItem("userSession", JSON.stringify(savedUser));
            setUser(savedUser);
        } else {
            alert("Invalid credentials");
        }
    };

    return (
        <div className="flex flex-col items-center justify-center space-y-4">
            <h2 className="text-2xl font-bold">Login</h2>
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
                onClick={handleLogin}
            >
                Login
            </button>
            <p
                className="text-blue-600 cursor-pointer hover:underline"
                onClick={() => setIsLogin(false)}
            >
                Create new account
            </p>
        </div>
    );
}
