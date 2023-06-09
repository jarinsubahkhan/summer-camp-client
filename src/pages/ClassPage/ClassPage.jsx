/*eslint-disable */

import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

const ClassPage = ({classesDone}) => {

  const{_id, name,instructor_name, image, students_available, price, students_total} = classesDone;

const {user} = useContext(AuthContext);
const navigate = useNavigate();
const location = useLocation();

  const handleSelect = (classesDone) => {
 console.log(classesDone);
if(user && user.email){
  const selectedClass = {selectedClassId: _id, name, image, price, instructor_name, students_available, students_total, email: user.email}
  fetch('http://localhost:5000/selected', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(selectedClass) 
  })
  .then(res => res.json())
  .then(data => {
    if(data.insertedId){
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'You have added your class.',
        showConfirmButton: false,
        timer: 1500
      })
    }
  })
    
  }
  else{
    Swal.fire({
      title: 'Please login to join the class!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Login now!'
    }).then((result) => {
      if (result.isConfirmed) {
       navigate('/login', {state: {from: location}})
      }
    })
  }
  }
return (
    
           
           <div className="p-5">
            
            <div className="card card-side bg-black shadow-xl">
          <figure><img className="w-[360px] h-[200px]" src={image} alt="Movie"/></figure>
          <div className="card-body">
            <h2 className="card-title uppercase text-stone-400">{name} Dance</h2>
            <p className="font-semibold text-slate-100">Teacher : {instructor_name.name}</p>
            <div className="flex font-bold text-stone-400">
                <p><small>Available seats : {students_available}</small></p>
                <p><small>Price : ${price}</small></p>
            </div>
            <div className="card-actions justify-end">
              <button onClick={() => handleSelect(classesDone)} className="btn bg-red-500 text-white border-black">Select</button>
            </div>
          </div>
        </div>        
                </div>
    
    );
};

export default ClassPage;