import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const OurStory = () => {

    useEffect(() => {
        AOS.init({ duration: 2000, delay: 1000 });
        setTimeout(function () { AOS.refresh(); }, 1000);
    }, [])

    return (
        <div className='mt-20'>
            <h2 data-aos="zoom-in"
                className="text-3xl text-center font-bold">
                <span className="block text-orange-500 text-2xl font-normal">OUR STORY</span>
                From Our Blog
            </h2>
            <div data-aos="zoom-in-up"
                className="sm:flex justify-center gap-12 mt-12">
                <div className="card mb-5 sm:mb-0 rounded-none  sm:w-1/4 bg-base-100 shadow-xl border border-gray-900">
                    <figure>
                        <img className='h-64 w-full' src="https://images.squarespace-cdn.com/content/v1/5b0c868870e802807f35f826/1656634353473-0E10KJU489X1IO1LQCCN/Screen+Shot+2022-06-30+at+6.09.30+PM.png?format=1500w" alt="" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title mb-2">Star Wars Day</h2>
                        <p>Its May the 4th, and Star Wars fans around the world are celebrating Star Wars Day! To commemorate this occasion</p>
                        <div className="card-actions justify-end">
                            <button className="btn block mx-auto mt-5">Read More</button>
                        </div>
                    </div>
                </div>
                <div className="card mb-5 sm:mb-0 rounded-none sm:w-1/4 bg-base-100 shadow-xl border border-gray-900">
                    <div className="card-body">
                        <h2 className="card-title mb-2">The Crow, Marvel</h2>
                        <p>Its May the 4th, and Star Wars fans around the world are celebrating Star Wars Day! To commemorate this occasion</p>
                        <div className="card-actions justify-end">
                            <button className="btn block mx-auto mt-5">Read More</button>
                        </div>
                    </div>
                    <figure>
                        <img className='h-64 w-full' src="https://bostonglobe-prod.cdn.arcpublishing.com/resizer/14Y6sOtXbFqFoGj0XRMcprM0lzQ=/1024x0/cloudfront-us-east-1.images.arcpublishing.com/bostonglobe/XCXJQOUI2JPAU4XUDUJQ6PQZRQ.jpg" alt="" />
                    </figure>
                </div>
                <div className="card mb-5 sm:mb-0 rounded-none sm:w-1/4 bg-base-100 shadow-xl border border-gray-900">
                    <figure>
                        <img className='h-64 w-full' src="https://akns-images.eonline.com/eol_images/Entire_Site/201363/rs_1024x759-130703124141-1024.Gru.mh.070313.jpg" alt="" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title mb-2">Celebtes 85th Anversary</h2>
                        <p>Its May the 4th, and Star Wars fans around the world are celebrating Star Wars Day! To commemorate this occasion</p>
                        <div className="card-actions justify-end">
                            <button className="btn block mx-auto mt-5">Read More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurStory;