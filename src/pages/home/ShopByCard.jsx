import React from 'react';

const ShopByCard = ({ data }) => {
    const { _id, photo, name, ratting, price } = data;
    console.log(data);
    return (
        <div className="card w-96 bg-gray-900 shadow-xl">
            <figure>
                <img className='h-72 w-full' src={photo} alt="" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Price: {price}</p>
                <p>Ratting: {ratting}</p>

                <div className="card-actions justify-end">
                    <button className="btn btn-primary">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default ShopByCard;