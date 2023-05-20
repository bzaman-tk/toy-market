import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../auth/AuthProvider';
import MyToysCard from './MyToysCard';
import Swal from 'sweetalert2';

const MyToys = () => {
    const { user } = useContext(AuthContext)
    const [toys, setToys] = useState(null)
    const [reload, setReload] = useState(false)
    const [show, setShow] = useState(null)

    useEffect(() => {
        fetch(`http://localhost:5000/my-toys?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setToys(data))
    }, [user, reload])

    const handleDelete = id => {
        // console.log(id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            setReload(!reload)
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })

            }
        })


    }

    const handleUpdate = i => {
        setShow(i)
    }
    // console.log(show);

    return (
        <div>
            <div className="overflow-x-auto mt-10">
                <table className="table table-zebra w-full max-w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th className='whitespace-pre-wrap'>#</th>
                            <th className='whitespace-pre-wrap'>Photo</th>
                            <th className='whitespace-pre-wrap'>Toy Name</th>
                            <th className='whitespace-pre-wrap'>Seller</th>
                            <th className='whitespace-pre-wrap'>Email</th>
                            <th className='whitespace-pre-wrap'>Category</th>
                            <th className='whitespace-pre-wrap'>Price</th>
                            <th className='whitespace-pre-wrap'>Rating</th>
                            <th className='whitespace-pre-wrap'>Quantity</th>
                            <th className='whitespace-pre-wrap'>Details</th>
                            <th className='whitespace-pre-wrap'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            toys && toys.map((data, i) =>
                                <MyToysCard
                                    index={i}
                                    handleDelete={handleDelete}
                                    handleUpdate={handleUpdate}
                                    show={show}
                                    setShow={setShow}
                                    data={data}
                                    setReload={setReload}
                                    key={data._id} />
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToys;