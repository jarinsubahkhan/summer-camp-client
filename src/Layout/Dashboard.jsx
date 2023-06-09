import { Link, Outlet } from "react-router-dom";
import { FaSchool, FaCcMastercard, FaHome, FaRegPlusSquare, FaUserPlus, FaBookmark, FaUserAlt, FaPaypal } from 'react-icons/fa';

const Dashboard = () => {
    return (
        <div>
     <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    {/* Page content here */}
    <Outlet></Outlet>
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div className="drawer-side  bg-stone-500">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 h-full font-semibold text-black">
      {/* Sidebar content here */}
      <li><Link to="/classes"><FaHome></FaHome> Student`s classes</Link></li>
      <li><Link to="/dashboard/myclass"><FaSchool></FaSchool> My Selected Classes</Link></li>
      <li><Link to="/dashboard/enrollclass"><FaPaypal></FaPaypal> My Enrolled Classes</Link></li>
      <li><Link to="/dashboard/payment"><FaCcMastercard></FaCcMastercard> Payment History</Link></li>
      <div className="divider"></div>
      <li><Link to="/dashboard/addclass"><FaRegPlusSquare></FaRegPlusSquare> Add a class</Link></li>
      <li><Link to="/dashboard/myclasses"><FaSchool></FaSchool> My Classes</Link></li>
      <li><Link to="/dashboard/students"><FaUserPlus></FaUserPlus> Total enrolled students</Link></li>
      <li><Link to="/dashboard/feedback"><FaBookmark></FaBookmark> Feedback</Link></li>
      <div className="divider"></div>
      <li><Link to="/"><FaHome></FaHome>Home</Link></li>
      <li><Link to="/dashboard/manageclass"><FaSchool></FaSchool> Manage Classes</Link></li>
      <li><Link to="/dashboard/manageusers"><FaUserAlt></FaUserAlt> Manage Users</Link></li>
    </ul>
  
  </div>
</div>       
        </div>
    );
};

export default Dashboard;