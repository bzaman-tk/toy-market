import React, { useEffect, useState } from 'react';
import UpdateToyModal from './UpdateToyModal';

const MyToysCard = ({ data, index, handleDelete, handleUpdate, show, setShow, setReload }) => {

    const { _id, seller, categorys, email, quantity, name, price, details, ratting, photo } = data;

    return (
        <tr>
            <td>{index + 1}</td>
            <td className='whitespace-pre-wrap'><img src={photo} className='w-20' alt="" /></td>
            <td className='whitespace-pre-wrap'> {name.slice(0, 100)} </td>
            <td className='whitespace-pre-wrap'>{seller}</td>
            <td className='whitespace-pre-wrap'>{email}</td>
            <td className='whitespace-pre-wrap'>{categorys}</td>
            <td className='whitespace-pre-wrap'>{price}</td>
            <td className='whitespace-pre-wrap'>{ratting}</td>
            <td className='whitespace-pre-wrap'>{quantity}</td>
            <td className='whitespace-pre-wrap'>
                {details.slice(0, 100)}
            </td>
            <td className='whitespace-pre-wrap'>
                {/* <label htmlFor={`my-modal-${index}`} className="btn mr-2">
                    Update
                </label> */}
                <button onClick={() => handleUpdate(index)} className="btn mr-2 w-full">Update</button>

                <button onClick={() => handleDelete(_id)} className="btn text-red-500 w-full mt-3">X</button>

                <UpdateToyModal
                    data={data}
                    show={show}
                    setReload={setReload}
                    setShow={setShow}
                    index={index} />
            </td>
        </tr>
    );
};

export default MyToysCard;