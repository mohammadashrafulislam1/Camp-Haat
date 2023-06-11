import Banner from "../Banner/Banner";
import PopularInstructors from "../PopularInstructors/PopularInstructors";
import PopularSection from "../PopularSection/PopularSection";
import PopularClasses from "./PopularClasses/PopularClasses";

const Home = () => {
    return (
        <div>
          <Banner></Banner> 
          <PopularSection></PopularSection>
          <PopularInstructors></PopularInstructors>
          <PopularClasses></PopularClasses>
        </div>
    );
};

export default Home;