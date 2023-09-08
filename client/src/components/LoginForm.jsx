
const LoginForm = () => {
    return (
        <form action="" method="get">
            <label htmlFor="email">Email: </label>
            <input type="email" name="email" id="email" required/>

            <label htmlFor="password1">Password: </label>
            <input type="password" name="password1" id="password1" required/>
        </form>
    )
}

export default LoginForm;