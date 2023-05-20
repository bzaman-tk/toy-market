import { useEffect } from "react";
import BannerSlider from "./BannerSlider";
import HomeGalary from "./HomeGalary";
import OurStory from "./OurStory";
import ShopByCategory from "./ShopByCategory";
import Testimonials from "./Testimonials";

const Home = () => {
    useEffect(() => {
        document.title = 'Despicable Me Toy'
    }, [])
    return (
        <>
            <BannerSlider />
            <HomeGalary />
            <Testimonials />
            <ShopByCategory />
            <OurStory />
        </>
    );
};

export default Home;