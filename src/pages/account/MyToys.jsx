import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../auth/AuthProvider';
import MyToysCard from './MyToysCard';
import Swal from 'sweetalert2';

const MyToys = () => {
    const { user } = useContext(AuthContext)
    const [toys, setToys] = useState(null)
    const [reload, setReload] = useState(false)
    const [show, setShow] = useState(null)
    const [sort, setSort] = useState(null)
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        document.title = 'Despicable Me Toy | My Toys'
        setLoading(true)
        fetch(`https://toyserver-one.vercel.app/my-toys?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                if (sort === 'max') {
                    data.sort((a, b) => b.price - a.price);
                }
                if (sort === 'min') {
                    data.sort((a, b) => a.price - b.price);
                }
                setToys(data)
                setLoading(false)
            })

    }, [user, reload, sort])

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
                fetch(`https://toyserver-one.vercel.app/${id}`, {
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

    const handleMin = () => {
        setSort('min')
    }
    const handleMax = () => {
        setSort('max')
    }

    if (loading) {
        return <div className="flex h-48 justify-center items-center"><button className="btn loading">loading</button></div>
    }

    return (
        <div>
            <div className="overflow-x-auto mt-10">
                <div className="mx-auto w-96 px-12 py-5 mb-5 flex gap-3">
                    Sort by Price:
                    <div className="flex gap-3">
                        <button onClick={handleMin} className="btn btn-xs">min-max</button>
                        <button onClick={handleMax} className="btn btn-xs">max-min</button>
                    </div>
                </div>
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