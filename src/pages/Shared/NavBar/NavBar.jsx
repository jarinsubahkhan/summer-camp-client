

const NavBar = () => {
    return (
        <div>
   <div className="navbar bg-black text-white">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Home</a></li>
        <li><a>Instructors</a></li>
        <li><a>Classes</a></li>
        <li><a>Dashboard</a></li>
      </ul>
    </div>
    <p className="font-bold text-2xl ml-4 text-white"><span className="font-bold text-2xl text-red-500">Tango</span>Ace</p>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li><a>Home</a></li>  
       <li><a>Instructors</a></li>
       <li><a>Classes</a></li>
       <li><a>Dashboard</a></li>
    </ul>
  </div>
  <div className="navbar-end">
  <div className="w-10 rounded-full">
          <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
    <a className="btn">LOGIN</a>
  </div>
</div>         
        </div>
    );
};

export default NavBar;