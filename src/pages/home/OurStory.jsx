import React from 'react';

const OurStory = () => {
    return (
        <div className='mt-20'>
            <h2 className="text-3xl text-center font-bold">
                <span className="block text-orange-500 text-2xl font-normal">OUR STORY</span>
                From Our Blog
            </h2>
            <div className="sm:flex justify-center gap-12 mt-12">
                <div className="card mb-5 sm:mb-0 rounded-none  sm:w-1/4 bg-base-100 shadow-xl border border-gray-900">
                    <figure>
                        <img className='h-64 w-full' src="https://cdn.shopify.com/s/files/1/0508/1828/5750/products/RF-YQFP-KVQ3-1_540x.jpg?v=1655892871" alt="" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title mb-2">NOSTRO EXPE TENDA </h2>
                        <p>dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <div className="card-actions justify-end">
                            <button className="btn block mx-auto mt-5">Read More</button>
                        </div>
                    </div>
                </div>
                <div className="card mb-5 sm:mb-0 rounded-none sm:w-1/4 bg-base-100 shadow-xl border border-gray-900">
                    <div className="card-body">
                        <h2 className="card-title mb-2">NOSTRO EXPE TENDA </h2>
                        <p>dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <div className="card-actions justify-end">
                            <button className="btn block mx-auto mt-5">Read More</button>
                        </div>
                    </div>
                    <figure>
                        <img className='h-64 w-full' src="https://cdn.shopify.com/s/files/1/0508/1828/5750/products/RF-YQFP-KVQ3-1_540x.jpg?v=1655892871" alt="" />
                    </figure>
                </div>
                <div className="card mb-5 sm:mb-0 rounded-none sm:w-1/4 bg-base-100 shadow-xl border border-gray-900">
                    <figure>
                        <img className='h-64 w-full' src="https://cdn.shopify.com/s/files/1/0508/1828/5750/products/RF-YQFP-KVQ3-1_540x.jpg?v=1655892871" alt="" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title mb-2">NOSTRO EXPE TENDA </h2>
                        <p>dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
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