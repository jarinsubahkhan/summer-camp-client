import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const ManageUsers = () => {
    const [axiosSecure] = useAxiosSecure();
    const {data: users = [], refetch} = useQuery(['users'], async() => {
        const res = await axiosSecure.get('/users')
        return res.data;
    })

const handleMakeInstructor = user => {
    fetch(`http://localhost:5000/users/instructor/${user._id}`, {
        method: 'PATCH'
    })
    .then(res => res.json())
    .then(data => {
        if(data.modifiedCount){
            refetch();
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'You are now an instructor!',
                showConfirmButton: false,
                timer: 1500
              })
        }
    })
}

    const handleMakeAdmin = user => {
fetch(`http://localhost:5000/users/admin/${user._id}`, {
    method: 'PATCH'
})
.then(res => res.json())
.then(data => {
    if(data.modifiedCount){
        refetch();
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'You are now an admin!',
            showConfirmButton: false,
            timer: 1500
          })
    }
})
    }
    return (
        <div className="text-stone-400">
          <h2 className="font-bold text-2xl">Total Users: {users.length} </h2> 
          <div className="overflow-x-auto bg-stone-500 text-white rounded-lg mt-8">
  <table className="table">
    {/* head */}
    <thead className="bg-red-400 text-black font-semibold">
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {
        users.map((user, index) =>  <tr key={user._id}>
            <td>{index + 1}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.role === 'instructor' ? <><button disabled className="btn btn-outline btn-error">Make Instructor</button></> : 
            <button onClick={() => handleMakeInstructor(user)} className="btn btn-outline btn-error">Make Instructor</button>}</td>
            <td>{user.role === 'admin' ? <button disabled className="btn btn-outline btn-error">Make Admin</button> :
            <button onClick={() => handleMakeAdmin(user)} className="btn">Make Admin</button>}</td>
          </tr>)
      }
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default ManageUsers;