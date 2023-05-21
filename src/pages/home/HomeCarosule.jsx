import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const HomeCarosule = () => {

    const customRenderThumb = (children) =>
        children.map((item) => {
            return <img src={item.props.url} />;
        });

    return (
        <div className="mt-20 bg-gray-800 max-w-full overflow-hidden">
            <h2 className="text-center font-bold text-3xl pt-12">
                <span className="text-2xl block mb-3 font-normal text-orange-500">Testimonials</span> About Our Toys
            </h2>
            <img className='w-16 mx-auto mt-5' src="https://cdn-icons-png.flaticon.com/512/107/107076.png" alt="" />
            <Carousel
                //renderThumbs={customRenderThumb}
                autoPlay={true}
                interval={3000}
                showIndicators={false}
                showStatus={false}
                showThumbs={false}
                infiniteLoop={true}>
                <div className=' ' url='https://i.ibb.co/k8Jnx61/five.png'>
                    <div className="py-12 px-10 w-10/12   h-full mx-auto">
                        <p className='max-w-lg mx-auto border-b-2 pb-5 border-gray-700'>Lorem 2 ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non</p>
                        <img className='rounded-full !w-16 mt-5' src="https://i.ibb.co/k8Jnx61/five.png" />
                        <h2 className="font-semibold text-2xl mt-2">Emily Devidson, CEO</h2>
                        <p>Facebook</p>
                        <p>New York, USA</p>
                    </div>
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                <div className=' ' url='https://i.ibb.co/84h8svL/eight.png'>
                    <div className="py-12 px-10 w-10/12   h-full mx-auto">
                        <p className='max-w-lg mx-auto border-b-2 pb-5 border-gray-700'>Lorem 2 ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non</p>
                        <img className='rounded-full !w-16 mt-5' src="https://i.ibb.co/84h8svL/eight.png" />
                        <h2 className="font-semibold text-2xl mt-2">Jon Willsmit, CEO</h2>
                        <p>Google</p>
                        <p>New York, USA</p>
                    </div>
                    {/* <p className="legend">Legend 1</p> */}
                </div>
            </Carousel>
            {/* <img src="https://i.ibb.co/Yj8pMF8/four.png" /> */}
        </div>
    );
};

export default HomeCarosule;