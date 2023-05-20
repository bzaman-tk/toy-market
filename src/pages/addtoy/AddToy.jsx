import React, { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../auth/AuthProvider';
import Swal from 'sweetalert2';

const AddToy = () => {
    const { user } = useContext(AuthContext)
    const { register, reset, handleSubmit, watch, formState: { errors } } = useForm();

    useEffect(() => {
        document.title = 'Despicable Me Toy | Add Toy'
    }, [])

    const onSubmit = data => {
        data.price = parseFloat(data.price)
        data.quantity = parseInt(data.quantity)
        //console.log(data);
        //return;
        fetch('https://toyserver-one.vercel.app/addtoy', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    reset()
                    Swal.fire(
                        'Toy Added',
                        'Close and Add New Toy',
                        'success'
                    )
                }
            })
    };
    // console.log(errors.name);
    return (
        <div className='text-center w-1/2 mx-auto'>
            <h2 className='text-2xl my-10'>Add New Toy</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='grid grid-cols-2 gap-3'>
                    <input className='py-2 px-4 text-xl border' placeholder="Toy Name" {...register("name", { required: true })} />

                    <input className='py-2 px-4 text-xl border' placeholder='photo URL' type="url" {...register("photo", { required: true })} />

                    <input className='py-2 px-4 text-xl border' placeholder='Seller Name' type="text" defaultValue={user?.displayName} {...register("seller", { required: true })} />

                    <input className='py-2 px-4 text-xl border' placeholder='Seller Email' type="email" defaultValue={user?.email} {...register("email", { required: true })} />

                    <select {...register("categorys")} className='border'>
                        <option >Category</option>
                        <option value="humanlike">Human</option>
                        <option value="Minions">Minions</option>
                        <option value="Guns">Guns</option>
                        <option value="vehicle">Vehicle</option>
                    </select>
                    <input className='py-2 px-4 text-xl border' placeholder='Price' type="number" {...register("price", { required: true })} />
                    <input className='py-2 px-4 text-xl border' placeholder='Ratting' type="number" {...register("ratting", { required: true })} />
                    <input className='py-2 px-4 text-xl border' placeholder='Quantity' type="number" {...register("quantity", { required: true })} />

                </div>
                <input className='py-2 px-4 text-xl border w-full mt-5' placeholder='Details' type="text" {...register("details", { required: true })} />
                <input className='btn  mt-7' type="submit" value='Add Toy' />

                {(errors.name || errors.email || errors.details || errors.quantity || errors.ratting || errors.price || errors.categorys || errors.seller || errors.photo) && <p className='text-red-500 mt-5'>This field is required</p>}
            </form>
        </div>
    );
};

export default AddToy;