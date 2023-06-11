import { useQuery } from "@tanstack/react-query";
// import { useEffect, useState } from "react";

const useHooks = () => {
//     const [classesPopular, setClassesPopular] = useState([]);
// const [loading, setLoading] = useState(true);

//     useEffect(()=>{
//         fetch('http://localhost:5000/classes')
//         .then(res => res.json())
//         .then(data => {
//             setClassesPopular(data)
//         setLoading(false);
//         })
//     },[])
const {data: classesPopular = [], isLoading: loading} = useQuery({
    queryKey: ['classesPopular'],
    queryFn: async() => {
        const res = await fetch('http://localhost:5000/classes');
        return res.json();
    }
})
// const sortClassesByOrder = (classes) => {
//     return classes.slice().sort((a, b) => classes.indexOf(a) - classes.indexOf(b));
//   };

//   // Add the newly added class to the classesPopular array
//   const addNewClass = (newClass) => {
//     const updatedClasses = [...classesPopular, newClass];
//     return sortClassesByOrder(updatedClasses);
//   };

  return [classesPopular, loading];
    // return [classesPopular, loading]
}

export default useHooks;