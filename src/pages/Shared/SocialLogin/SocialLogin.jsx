import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";



const SocialLogin = () => {

    const {googleSignIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

const handleGoogleSignIn = () => {
    googleSignIn()
    .then(result => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        const saveUser = {name: loggedInUser.displayName, email: loggedInUser.email}
        fetch('http://localhost:5000/users', {
    method: 'POST',
    headers: {
        'content-type':'application/json'
    },
    body: JSON.stringify(saveUser) 
})
.then(res => res.json())
.then(() => {
        // reset();
        navigate(from, { replace: true });
    
})
    })
}



    return (
        <div>
       
      <hr />
      <div className="mt-5">
        {/* Social login buttons */}
        <button onClick={handleGoogleSignIn} className="btn btn-outline text-white border-red-400">Google Login</button>
      </div>       
        </div>
    );
};

export default SocialLogin;