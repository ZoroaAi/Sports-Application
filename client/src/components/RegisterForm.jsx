import { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';


const RegisterForm = () => {
    const [ username, setUsername] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password1, setPassword1 ] = useState('');
    const [ password2, setPassword2 ] = useState('');
    const [ location, setLocation ] = useState('');
    const [ sports, setSports ] = useState('');
    const [ error, setError ] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const postData = {
            username: username,
            email: email,
            password1: password1,
            password2: password2,
            location: location,
            sports: sports
        }

        try{
            const res = await axios.post('http://localhost:3001/api/users/register', postData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            alert('Registered Successfully')
            console.log(res.data.username);
            setError(<p className="success">{res.data}</p>);
            navigate('/login');
        } catch(err) {
            console.log(err);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username: </label>
            <input type="text" name="username" id="username" required value={username} onChange={e => setUsername(e.target.value)}/>

            <label htmlFor="email">Email: </label>
            <input type="email" name="email" id="email" required value={email} onChange={e => setEmail(e.target.value)}/>

            <label htmlFor="password1">Password: </label>
            <input type="password" name="password1" id="password1" required value={password1} onChange={e => setPassword1(e.target.value)}/>
            
            <label htmlFor="password2">Confirm Password: </label>
            <input type="password" name="password2" id="password2" required value={password2} onChange={e => setPassword2(e.target.value)}/>

            <label htmlFor="location">Location: </label>
            <input type="text" name="location" id="location" value={location} onChange={e => setLocation(e.target.value)}/>

            <label htmlFor="sports">Sports</label>
            <select name="sports" id="sports" required value={sports} onChange={e => setSports(e.target.value)}>
                <option value="gym">Gym</option>
                <option value="football">Football</option>
                <option value="basketball">Basketball</option>
                <option value="tennis">Tennis</option>
                <option value="running">Running</option>
                <option value="athletics">Athletics</option>
            </select>

            <input type="submit" value="Register" />

            {error}
        </form>
    );
};

export default RegisterForm;