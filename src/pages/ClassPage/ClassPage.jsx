/*eslint-disable */

const ClassPage = ({classesDone}) => {
    return (
    
           
           <div className="p-5">
            
            <div className="card card-side bg-black shadow-xl">
          <figure><img className="w-[360px] h-[200px]" src={classesDone.image} alt="Movie"/></figure>
          <div className="card-body">
            <h2 className="card-title uppercase text-stone-400">{classesDone.name} Dance</h2>
            <p className="font-semibold text-slate-100">Teacher : {classesDone.instructor_name.name}</p>
            <div className="flex font-bold text-stone-400">
                <p><small>Available seats : {classesDone.students_available}</small></p>
                <p><small>Price : ${classesDone.price}</small></p>
            </div>
            <div className="card-actions justify-end">
              <button className="btn bg-red-500 text-white border-black">Select</button>
            </div>
          </div>
        </div>        
                </div>
    
    );
};

export default ClassPage;