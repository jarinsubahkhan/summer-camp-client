import useHooks from "../../hooks/useHooks";
import ClassPage from "../ClassPage/ClassPage";


const ClassesPage = () => {
    const [classesPopular] = useHooks();
    
    return (
        <div className="bg-stone-500">
            <h2 className="font-bold uppercase py-5 text-center text-2xl">Classes</h2>
        {
            classesPopular.map(classesDone => <ClassPage key={classesDone._id} classesDone={classesDone}></ClassPage>)
        }   
        </div>
    );
};

export default ClassesPage;