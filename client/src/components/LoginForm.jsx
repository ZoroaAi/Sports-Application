import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const res = await axios.post('http://localhost:3001/api/auth/login', { email, password});
            console.log('login response data', res.data);
            localStorage.setItem('user', JSON.stringify(res.data.user))
            localStorage.setItem('token', res.data.token);
            navigate('/');
        }catch(err){
            console.log(err);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email: </label>
            <input type="email" name="email" id="email" required value={email} onChange={e => setEmail(e.target.value)}/>

            <label htmlFor="password">Password: </label>
            <input type="password" name="password" id="password" required value={password} onChange={e => setPassword(e.target.value)}/>

            <input type="submit" value="Login" />
        </form>
    )
}

export default LoginForm;