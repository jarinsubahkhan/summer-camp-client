/*eslint-disable*/
import useHooks from "../../../hooks/useHooks";
import Instructor from "../Instructor/Instructor";


const Instructors = () => {
    const [classesPopular] = useHooks();
    return (
       <div className="bg-stone-600 pt-5 mt-8">
        <h2 className="text-black text-center font-extrabold text-3xl my-12">Top Instructors</h2>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mx-4">
            {
                classesPopular.map(instruct => <Instructor
                key={instruct._id}
                instruct={instruct}
                ></Instructor>)
            }
        </div>
       </div>
    );
};

export default Instructors;