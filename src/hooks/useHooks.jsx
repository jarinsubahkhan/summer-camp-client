import { useEffect, useState } from "react";

const useHooks = () => {
    const [classesPopular, setClassesPopular] = useState([]);
const [loading, setLoading] = useState(true);

    useEffect(()=>{
        fetch('http://localhost:5000/classes')
        .then(res => res.json())
        .then(data => {
            setClassesPopular(data)
        setLoading(false);
        })
    },[])
    return [classesPopular, loading]
}

export default useHooks;