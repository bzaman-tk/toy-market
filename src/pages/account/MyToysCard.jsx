import React, { useEffect, useState } from 'react';
import UpdateToyModal from './UpdateToyModal';

const MyToysCard = ({ data, index, handleDelete, handleUpdate, show, setShow, setReload }) => {

    const { _id, seller, categorys, email, quantity, name, price, details, ratting, photo } = data;

    return (
        <tr>
            <th>{index + 1}</th>
            <td><img src={photo} className='w-20' alt="" /></td>
            <td>{name}</td>
            <td>{seller}</td>
            <td>{email}</td>
            <td>{categorys}</td>
            <td>{price}</td>
            <td>{ratting}</td>
            <td>{quantity}</td>
            <td>{details}</td>
            <td>
                {/* <label htmlFor={`my-modal-${index}`} className="btn mr-2">
                    Update
                </label> */}
                <button onClick={() => handleUpdate(index)} className="btn mr-2">Update</button>

                <button onClick={() => handleDelete(_id)} className="btn text-red-500">X</button>

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