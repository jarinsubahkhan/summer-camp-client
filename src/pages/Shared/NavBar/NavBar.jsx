import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";


const NavBar = () => {

  const {user, logOut} = useContext(AuthContext);

  const handleLogOut = () => {

logOut()
.then(() => { })
.catch(error => console.log(error));

  }

    return (
        <div>
   <div className="navbar bg-black text-white">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/instructors">Instructors</Link></li>
        <li><Link to="/classes">Classes</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
      </ul>
    </div>
    <p className="font-bold text-2xl ml-4 text-white"><span className="font-bold text-2xl text-red-500">Tango</span>Ace</p>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li><Link to="/">Home</Link></li>  
    <li><Link to="/instructors">Instructors</Link></li>
       <li><Link to="/classes">Classes</Link></li>
       <li><Link to="/dashboard">Dashboard</Link></li>
    </ul>
  </div>
  <div className="navbar-end">
  {/* <div className="w-10 rounded-full">
          <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
     */}
    {
      user ? <>
       
          <img className="w-10 mr-4 rounded-full" src={user?.photoURL} />
       
      <button onClick={handleLogOut} className="btn btn-active">LOGOUT</button>
      </> : 
      
      <><Link to="/login" className="btn">LOGIN</Link></>
    }
  </div>
</div>         
        </div>
    );
};

export default NavBar;