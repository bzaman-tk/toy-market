import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AllToysCard from './AllToysCard';

const AllToys = () => {
    const lodedData = useLoaderData()
    const [toys, setToys] = useState(lodedData?.toys)
    const [count, setCount] = useState(lodedData?.count)
    // console.log(lodedData.count);
    const handleSearch = e => {
        e.preventDefault()
        const form = e.target;
        const searchText = form.search.value;
        // console.log(searchText);
        fetch(`http://localhost:5000/search/${searchText}`)
            .then(res => res.json())
            .then(data => {
                setToys(data);
                setCount(data.length);
            })
    }
    return (
        <div className='my-10'>
            <div className="w-full  my-5 p-5 text-center flex justify-center items-center">
                <form onSubmit={handleSearch}>
                    <input type="text" className='text-xl p-2' placeholder='Search by Title' name="search" id="search" />
                    <input type='submit' value={'Search'} className="btn ml-5" />
                </form>
            </div>
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
                            <th>Quantity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            toys.map((data, i) =>
                                <AllToysCard index={i} data={data} key={data._id} />
                            )
                        }
                    </tbody>
                </table>
                <div className="mt-12 flex justify-center items-center gap-5">
                    <button className="btn">Prev</button>
                    <p className="text-white text-xl text-center">Showing {toys.length} of {count} Toys</p>
                    <button className="btn">Next</button>
                </div>
            </div>
        </div>
    );
};

export default AllToys;