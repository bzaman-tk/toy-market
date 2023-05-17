import slide1 from '../../assets/slider1.jpg';
import slide2 from '../../assets/slider2.webp';

const BannerSlider = () => {
    return (
        <div className="carousel w-full h-[600px] my-6">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={slide1} className="w-full rounded-2xl" />
                <div className="absolute top-0 left-0 flex flex-col justify-center items-center h-full w-full rounded-2xl" style={{ backgroundColor: 'rgba(0,0,0,.8)' }}>
                    <h2 className="text-5xl font-bold text-orange-600 mb-10 w-1/2 text-center">
                        Best Dispecable Toys Ever
                    </h2>
                    <p className="mb-10 w-1/2 text-center">
                        Welcome to our enchanting toy shop, where imagination comes alive! Step into a world filled with wonder and joy, where every visit promises endless delight.
                    </p>
                    <button className="btn border  text-orange-600 bg-white">See More</button>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={slide2} className="w-full rounded-2xl" />
                <div className="absolute top-0 left-0 flex flex-col justify-center items-center h-full w-full rounded-2xl" style={{ backgroundColor: 'rgba(0,0,0,.8)' }}>
                    <h2 className="text-5xl font-bold text-orange-600 mb-10 w-1/2 text-center">
                        Welcome to our enchanting toy shop
                    </h2>
                    <p className="mb-10 w-1/2 text-center">
                        Welcome to our enchanting toy shop, where imagination comes alive! Step into a world filled with wonder and joy, where every visit promises endless delight.
                    </p>
                    <button className="btn border  text-orange-600 bg-white">See More</button>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default BannerSlider;