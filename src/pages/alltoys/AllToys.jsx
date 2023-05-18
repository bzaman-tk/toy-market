import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllToysCard from './AllToysCard';

const AllToys = () => {
    const lodedData = useLoaderData()
    console.log(lodedData);
    return (
        <div className='my-10'>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Seller</th>
                            <th>Toy Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            lodedData.map((data, i) =>
                                <AllToysCard index={i} data={data} key={data._id} />
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllToys;