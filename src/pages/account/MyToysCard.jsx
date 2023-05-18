import React from 'react';
import { Link } from 'react-router-dom';

const MyToysCard = ({ data, index, handleDelete }) => {
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
                <button className="btn mr-2">Update</button>
                <button onClick={() => handleDelete(_id)} className="btn text-red-500">X</button>
            </td>
        </tr>
    );
};

export default MyToysCard;