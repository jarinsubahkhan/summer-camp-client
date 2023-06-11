import useHooks from "../../../hooks/useHooks";


const MyClasses = () => {
    const [classesPopular] = useHooks();
    // const sortedClasses = [...classesPopular].sort((addNewClass) => addNewClass.name.localeCompare(classesPopular.name));
    return (
        <div>
            <h3 className="text-center text-white font-bold uppercase">My classes</h3>
            <div className="overflow-x-auto bg-stone-400 rounded-lg mt-8">
  <table className="table">
    {/* head */}
    <thead>
      <tr className="text-black font-semibold">
        <th>
          <label className="">
           #
          </label>
        </th>
        <th>Name</th>
        <th>Status</th>
        <th>Total Enrolled Students</th>
        <th>Feedback</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {
        classesPopular.map( (classesAdd, index) =>   <tr key={classesAdd._id}>
        <td>
       {index + 1}
        </td>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={classesAdd?.image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{classesAdd?.name} Dance</div>
              <div className="text-sm opacity-50">{classesAdd?.instructor_name?.name}</div>
            </div>
          </div>
        </td>
        <td>
        {classesAdd?.status === 'pending' || classesAdd?.status === 'approved' ? (
                      'denied'
                    ) : (
                    <p>No status</p>
                    )}
          <br/>
        </td>
        <td>
            {classesAdd?.students_available}
        </td>
        <td>
        <button className="btn btn-ghost btn-xs">Feedback</button>
        </td>
        <td>
          <button className="btn btn-ghost btn-xs">Update</button>
        </td>
      </tr>)
      }
    
    
    </tbody>
   
   
    
  </table>
</div>
        </div>
    );
};

export default MyClasses;