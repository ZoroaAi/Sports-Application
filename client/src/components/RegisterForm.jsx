

const RegisterForm = () => {
    return (
        <form action="" method="post">
            <label htmlFor="uname">Username: </label>
            <input type="text" name="uname" id="uname" required/>

            <label htmlFor="email">Email: </label>
            <input type="email" name="email" id="email" required/>

            <label htmlFor="password1">Password: </label>
            <input type="password" name="password1" id="password1" required/>
            
            <label htmlFor="password2">Confirm Password: </label>
            <input type="text" name="password2" id="password2" required/>

            <label htmlFor="location">Location: </label>
            <input type="text" name="location" id="location"/>

            <label htmlFor="sports">Sports</label>
            <select name="sports" id="sports">
                <option value="gym">Gym</option>
                <option value="gym">Football</option>
                <option value="gym">Basketball</option>
                <option value="gym">Tennis</option>
                <option value="gym">Running</option>
                <option value="gym">Athletics</option>
            </select>

            <input type="submit" value="loginButton" />
        </form>
    );
};

export default RegisterForm;