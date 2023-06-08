import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";


const Login = () => {
   
    const [showPassword, setShowPassword] = useState(false);
  
    const {signIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from.pathname || "/";

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email,password);
    signIn(email, password)
    .then(result => {
      const user = result.user;
      console.log(user);
      Swal.fire({
        title: 'You are successfully logged in!',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      });
      navigate(from, {replace: true});
    })
    // Logic for login submission
  };

    return (
        <div className="bg-stone-600">
     <div className="hero min-h-screen bg-stone-600">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
    <h1 className="text-5xl font-bold text-black">Login <span className="text-red-500"> now</span>!</h1>
      <p className="py-6 font-semibold text-white">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit} className="card-body bg-stone-800 rounded-md">
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold text-red-500">Email</span>
          </label>
           <input type="email" 
        //    value={email} 
        //   onChange={handleEmailChange}
           name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold text-red-500">Password</span>
          </label>
          <input name="password" placeholder="password" className="input input-bordered"   type={showPassword ? 'text' : 'password'}
        //   value={password}
        //   onChange={handlePasswordChange}
          required />
           <button className="text-slate-300 btn-sm" type="button" onClick={handleShowPassword}>
          {showPassword ? 'Hide' : 'Show'} Password
        </button>
        </div>
        <div className="form-control mt-6">
          <input className="btn bg-red-500 border-none text-white" type="submit" value="LOGIN" />
        </div>
        <p className="text-red-400">
        Don`t have an account? <Link className="text-white underline" to="/register">Register</Link>
      </p>
      <div className="">
        {/* Social login buttons */}
        <button className="btn btn-outline text-white border-red-400">Google Login</button>
      </div>
      </form>
     
    </div>
  </div>
</div>      
        </div>
    );
};

export default Login;