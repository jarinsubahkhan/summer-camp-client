// import { useEffect, useState } from "react";
import PopularClass from "../PopularClass/PopularClass";
import useHooks from "../../../hooks/useHooks";


const PopularClasses = () => {
    const [classesPopular] = useHooks();
    // const [classesPopular, setClassesPopular] = useState([]);

    // useEffect(()=>{
    //     fetch('classes.json')
    //     .then(res => res.json())
    //     .then(data => setClassesPopular(data))
    // },[])

    return (
        <section className="">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 bg-black p-8">
               {
                classesPopular.map(classPopular =>
                     <PopularClass
                     key={classPopular._id} 
                     classPopular={classPopular}
                     ></PopularClass>)
               }
            </div>
          
        </section>
    );
};

export default PopularClasses;