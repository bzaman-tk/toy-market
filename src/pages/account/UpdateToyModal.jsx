import React from 'react';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';


const UpdateToyModal = ({ index, show, setShow, data, setReload }) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const { _id, quantity, price, details } = data;

    const onSubmit = data => {
        fetch(`https://toyserver-one.vercel.app/update/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire(
                        'Good job!',
                        'Toy Updated',
                        'success'
                    )
                    setShow(null)
                    setReload(prev => !prev)
                }
            })
        // console.log(data)
    };

    const handleUpdate = () => {
        setShow(null)
    }
    return (
        <>
            <input type="checkbox" id={`my-modal-${index}`} className="modal-toggle" />
            <div className={`modal  ${show == index ? 'modal-open' : ''}`}>
                <div className="modal-box w-6/12 max-w-5xl">

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="text-center">
                            <h2 className='text-2xl mb-8'>Update Toy</h2>
                        </div>
                        <div className="flex flex-wrap justify-center  gap-3">
                            <label className='w-2/12'>Price</label>
                            <input className='py-2 w-8/12 px-4 text-xl border' defaultValue={price} placeholder='Price' type="number" {...register("price", { required: true })} />
                            <label className='w-2/12'>Quantity</label>
                            <input className='py-2 w-8/12 px-4 text-xl border' defaultValue={quantity} placeholder='Quantity' type="number" {...register("quantity", { required: true })} />
                            <label className='w-2/12'>Details</label>
                            <input className='py-2 w-8/12 px-4 text-xl border' defaultValue={details} placeholder='Details' type="text" {...register("details", { required: true })} />
                        </div>
                        <div className="flex justify-center items-center gap-3 mt-7">
                            <input className='btn' type="submit" value='Update Toy' />
                            <span onClick={handleUpdate} className="btn">close</span>
                        </div>

                        {(errors.name || errors.email || errors.details || errors.quantity || errors.ratting || errors.price || errors.categorys || errors.seller || errors.photo) && <p className='text-red-500 mt-5'>This field is required</p>}
                    </form>
                </div>
            </div>
        </>
    );
};

export default UpdateToyModal;