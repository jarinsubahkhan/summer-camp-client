

const Instructor = ({instruct}) => {
    const {instructor_name} = instruct;
    return (
        <div>
       <div className="card lg:card-side bg-red-400 shadow-xl mb-4">
  <figure><img className="w-[300px] h-[222px]" src={instructor_name.image} alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title text-stone-500 uppercase">{instructor_name.name}</h2>
    <p className="font-bold text-xl"><small>Email: {instructor_name.email}</small></p>
    <div className="card-actions justify-end">
     <p className="font-semibold">Classes-taken : {instructor_name.classes_taken}</p>
     <p className="font-semibold">Classes-name : {instructor_name.classes_names[0]}, {instructor_name.classes_names[1]}</p>
    </div>
  </div>
</div>     
        </div>
    );
};

export default Instructor;