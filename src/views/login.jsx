function Login({ setIsLogin, setUser }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        const savedUser = JSON.parse(localStorage.getItem("user"));

        if (
            savedUser &&
            email === savedUser.email &&
            password === savedUser.password
        ) {
            setUser(savedUser);
        } else {
            alert("Invalid credentials");
        }
    };

    return (
        <>
            <h2>Login</h2>
            <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
            <br />
            <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
            <br />
            <button onClick={handleLogin}>Login</button>
            <p onClick={() => setIsLogin(false)}>Create new account</p>
        </>
    );
}