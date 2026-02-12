import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './views/login';
import Register from './views/signup';
import Dashboard from './views/Dashboard';
import AdminLogin from './views/AdminLogin';
import AdminDashboard from './views/AdminDashboard';

function App() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Check for existing session
        const session = localStorage.getItem('userSession');
        if (session) {
            setUser(JSON.parse(session));
        }
        setLoading(false);
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-blue-600">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
            </div>
        );
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Dashboard user={user} setUser={setUser} />} />
                <Route path="/login" element={<LoginWrapper user={user} setUser={setUser} />} />
                <Route path="/signup" element={<RegisterWrapper />} />
                <Route path="/admin/login" element={<AdminLogin />} />
                <Route path="/admin/dashboard" element={<AdminDashboard />} />
            </Routes>
        </BrowserRouter>
    );
}

const LoginWrapper = ({ user, setUser }) => {
    if (user) {
        return <Navigate to="/" replace />;
    }

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <Login setIsLogin={() => { }} setUser={setUser} />
                <div className="mt-4 text-center">
                    <p className="text-sm text-gray-600">
                        Don't have an account? <a href="/signup" className="text-blue-500 hover:underline">Sign up</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

const RegisterWrapper = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <Register setIsLogin={() => { }} />
                <div className="mt-4 text-center">
                    <p className="text-sm text-gray-600">
                        Already have an account? <a href="/login" className="text-blue-500 hover:underline">Log in</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default App;

