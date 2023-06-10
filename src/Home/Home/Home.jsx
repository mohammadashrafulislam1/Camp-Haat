import Banner from "../Banner/Banner";
import PopularInstructors from "../PopularInstructors/PopularInstructors";
import PopularSection from "../PopularSection/PopularSection";

const Home = () => {
    return (
        <div>
          <Banner></Banner> 
          <PopularSection></PopularSection>
          <PopularInstructors></PopularInstructors>
        </div>
    );
};

export default Home;