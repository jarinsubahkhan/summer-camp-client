import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";


const SignUp = () => {

    const { register, handleSubmit, reset, formState: {errors}} = useForm();

    const {createUser, updateUserProfile} = useContext(AuthContext);
const navigate = useNavigate();

const onSubmit = data => {
    console.log(data);
createUser(data.email, data.password)
.then(result => {
    const loggedUser = result.user;
    console.log(loggedUser);
    updateUserProfile(data.name, data.photoUrl)
    .then(() => {
        console.log('user profile updated');
        reset();
        navigate('/');
    })
    .catch(error => console.log(error))
})
};


    const [showPassword, setShowPassword] = useState(false);

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
      };
    

    return (
        <div className="bg-stone-600">
 <div className="hero min-h-screen bg-stone-600">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
    <h1 className="text-5xl font-bold text-black">Register <span className="text-red-500"> now</span>!</h1>
      <p className="py-6 text-white font-semibold">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit(onSubmit)} className="card-body bg-stone-800 rounded-md">
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white font-semibold">Name</span>
          </label>
          <input type="text" {...register("name")} name="name" placeholder="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">         
            <span className="label-text text-white font-semibold">Email</span>
          </label>
          <input type="email" {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                {errors.email && <span className="text-red-300">Email is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white font-semibold">Password</span>
          </label>
          <input
                  name="password"
                  {...register("password", { required: true, minLength: 6,
                    pattern: /^(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/
                })}
                  placeholder="password"
                  className="input input-bordered"
                  type={showPassword ? 'text' : 'password'}
                />
                {errors.password && errors.password.type === 'minLength' && (
                  <span className="text-red-300">Password must be at least 6 characters</span>
                )}
                {errors.password && errors.password.type === 'pattern' && (
                  <span className="text-red-300">
                    Password must contain at least one capital letter and one special character
                  </span>
                )}
           <button className="text-slate-300 btn-sm" type="button" onClick={handleShowPassword}>
          {showPassword ? 'Hide' : 'Show'} Password
        </button>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white font-semibold">Confirm Password</span>
          </label>
          <input type="password" {...register("confirmPassword")} name="confirmPassword" placeholder="confirmPassword" className="input input-bordered"required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white font-semibold">Photo URL</span>
          </label>
          <input type="text" {...register("photoUrl")} name="photoUrl" placeholder="photoUrl" className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
        <input className="btn bg-red-500 border-none text-white" type="submit" value="REGISTER" />
        </div>
        <p className="text-red-300">
        Already have an account? <Link className="underline text-white" to="/login">Login</Link>
      </p>
      </form>
    </div>
  </div>
</div>           
        </div>
    );
};

export default SignUp;