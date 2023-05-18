import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../auth/AuthProvider';
import MyToysCard from './MyToysCard';

const MyToys = () => {
    const { user } = useContext(AuthContext)
    const [toys, setToys] = useState(null)
    useEffect(() => {
        fetch(`http://localhost:5000/my-toys?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setToys(data))
    }, [user])

    const handleDelete = id => {
        console.log(id);
    }

    return (
        <div>
            <div className="overflow-x-auto mt-10">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Photo</th>
                            <th>Toy Name</th>
                            <th>Seller</th>
                            <th>Email</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Rating</th>
                            <th>Quantity</th>
                            <th>Details</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            toys && toys.map((data, i) =>
                                <MyToysCard index={i} handleDelete={handleDelete} data={data} key={data._id} />
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToys;