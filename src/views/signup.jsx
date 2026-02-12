function Register({ setIsLogin }) {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = () => {
        const user = { fullName, email, password };
        localStorage.setItem("user", JSON.stringify(user));
        alert("Registration successful!");
        setIsLogin(true);
    };

    return (
        <>
            <h2>Sign Up</h2>
            <input placeholder="Full Name" onChange={e => setFullName(e.target.value)} />
            <br />
            <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
            <br />
            <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
            <br />
            <button onClick={handleRegister}>Register</button>
            <p onClick={() => setIsLogin(true)}>Already have an account? Login</p>
        </>
    );
}