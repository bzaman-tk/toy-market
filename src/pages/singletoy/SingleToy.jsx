import React from 'react';
import { useLoaderData, useLocation } from 'react-router-dom';

const SingleToy = () => {
    const loadedData = useLoaderData()
    const location = useLocation()
    const { _id, seller, ratting, price, photo, name, email, details, categorys } = loadedData[0]
    // console.log(location);
    return (
        <div className="hero bg-base-200 mt-10">
            <div className="hero-content flex-col lg:flex-row gap-20">
                <img src={photo} className="max-w-sm max-h-full rounded-lg shadow-2xl" />
                <div className='w-1/2'>
                    <h1 className="text-5xl font-bold">{name}</h1>
                    <p className="py-2 mt-10"><strong>Seller Email:</strong> {email}</p>
                    <p className="py-2"><strong>Seller Name:</strong> {seller}</p>
                    <p className="py-2"><strong>Price: </strong> {price}</p>
                    <p className="py-2"><strong>Ratting:</strong> {ratting}</p>
                    <p className="py-2"><strong>Toy Category:</strong> {categorys}</p>
                    <p className="py-2"><strong>Description:</strong> {details}</p>
                </div>
            </div>
        </div>
    );
};

export default SingleToy;