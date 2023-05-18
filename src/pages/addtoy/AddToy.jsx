import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../auth/AuthProvider';

const AddToy = () => {
    const { user } = useContext(AuthContext)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:5000/addtoy', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    };

    return (
        <div className='text-center w-1/2 mx-auto'>
            <h2 className='text-2xl my-10'>Add New Toy</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='grid grid-cols-2 gap-3'>
                    <input className='py-2 px-4 text-xl border' placeholder="Name" {...register("name", { required: true })} />

                    <input className='py-2 px-4 text-xl border' placeholder='photo URL' type="url" {...register("photo", { required: true })} />

                    <input className='py-2 px-4 text-xl border' placeholder='Seller Name' type="text" defaultValue={user?.displayName} {...register("seller", { required: true })} />

                    <input className='py-2 px-4 text-xl border' placeholder='Seller Email' type="email" defaultValue={user?.email} {...register("email", { required: true })} />

                    <select {...register("categorys")} className='border'>
                        <option >Category</option>
                        <option value="human">Human</option>
                        <option value="minions">Minions</option>
                        <option value="other">other</option>
                    </select>
                    <input className='py-2 px-4 text-xl border' placeholder='Price' type="number" {...register("price", { required: true })} />
                    <input className='py-2 px-4 text-xl border' placeholder='Ratting' type="number" {...register("ratting", { required: true })} />
                    <input className='py-2 px-4 text-xl border' placeholder='Quantity' type="number" {...register("quantity", { required: true })} />

                </div>
                <input className='py-2 px-4 text-xl border w-full mt-5' placeholder='Details' type="text" {...register("details", { required: true })} />
                <input className='btn  mt-7' type="submit" value='Add Toy' />
            </form>
        </div>
    );
};

export default AddToy;