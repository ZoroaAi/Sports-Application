import axios from "axios"

const Logout = () => {
    const handleLogout = async () => {
        try{
            // Invalidate refresh token
            await axios.post("http://localhost:3001/api/auth/logout", {
                token: localStorage.getItem("refreshToken")
            });

            // Remove refresh token from localStorage
            localStorage.removeItem("token");
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <button onClick={handleLogout}>
            Logout
        </button>
    )
}

export default Logout;