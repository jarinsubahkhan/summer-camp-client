import Instructors from "../Instructors/Instructors";
import PopularClasses from "../PopularClasses/PopularClasses";
import TopSection from "../TopSection/TopSection";


const Home = () => {
    return (
        <div>
      <TopSection></TopSection>  
      <PopularClasses></PopularClasses>  
      <Instructors></Instructors>
        </div>
    );
};

export default Home;