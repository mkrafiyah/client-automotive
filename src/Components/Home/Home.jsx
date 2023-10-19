
import Banner from "../Banner/Banner";
import BestSeller from "../BestSeller/BestSeller";
import Review from "../Review/Review";
import CarCard from "../../CarCard/CarCard";


const Home = () => {
 
    return (
        <div >
            <Banner></Banner>
           
           <CarCard></CarCard>
            <BestSeller></BestSeller>
            <Review></Review>
        </div>
    );
};

export default Home;