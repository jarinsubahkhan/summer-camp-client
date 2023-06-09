import { FaTrashAlt } from "react-icons/fa";
import useSelected from "../../../hooks/useSelected";
import Swal from "sweetalert2";


const MyDanceClass = () => {
    const [selected, refetch] = useSelected();

    const handleDelete = select => {
        Swal.fire({
            title: 'Are you sure you want delete?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
             fetch(`http://localhost:5000/selected/${select._id}`, {
                method: 'DELETE'
             })
             .then(res => res.json())
             .then(data => {
                if(data.deletedCount>0){
                    refetch();
                    alert('Your selected class has been deleted successfully!')
                }
             })
            }
          })
    }

    return (
        <div className="text-white">
 <div className="flex uppercase items-center justify-between">
 <h2 className="text-3xl font-bold text-center">Total Selected Class: {selected.length}</h2> 
      <button className="btn btn-error text-white btn-sm">Payment</button>    
    </div>  

    <div className="overflow-x-auto bg-stone-500 rounded-lg mt-8 text-black">
  <table className="table">
    {/* head */}
    <thead className="bg-red-400">
      <tr className="text-black font-semibold">
        <th>
          #
        </th>
        <th>Name</th>
        <th>Email</th>
        <th>Price</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {
        selected.map((select, index) => <tr key={select._id}>
            <td>
            {index + 1}
            </td>
            <td>
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={select?.image} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                <div>
                  <div className="font-bold">{select.name} Dance</div>
                  <div className="text-sm opacity-50">By {select.instructor_name.name}</div>
                </div>
              </div>
            </td>
            <td>
              {select?.email}
              <br/>
            
            </td>
            <td>${select.price}</td>
            <td>
              <button onClick={() => handleDelete(select)} className="btn btn-outline text-black btn-xs"><FaTrashAlt></FaTrashAlt></button>
            </td>
          </tr> )
      }
  
      {/* row 2 */}
 
      {/* row 3 */}

      {/* row 4 */}
     
    </tbody>
    
  </table>
</div> 
        </div>
    );
};

export default MyDanceClass;