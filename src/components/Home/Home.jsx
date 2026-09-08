import Banner from "../Banner/Banner";
import Category from "../CategoryList/Category";
import FeatureJob from "../FeatureJob/FeatureJob";


const Home = () => {
    return (
        <div className=" m-5">
            <Banner></Banner>
           <Category></Category>
           <FeatureJob></FeatureJob>
        </div>
    );
};

export default Home;