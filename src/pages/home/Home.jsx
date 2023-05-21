import { useEffect } from "react";
import BannerSlider from "./BannerSlider";
import OurStory from "./OurStory";
import ShopByCategory from "./ShopByCategory";
import Testimonials from "./Testimonials";
import HomeGalary from "./HomeGalary";
import HomeCarosule from "./HomeCarosule";

const Home = () => {
    useEffect(() => {
        document.title = 'Despicable Me Toy'
    }, [])
    return (
        <>
            <BannerSlider />
            <HomeGalary />
            {/* <Testimonials /> */}
            <HomeCarosule />
            <ShopByCategory />
            <OurStory />
        </>
    );
};

export default Home;