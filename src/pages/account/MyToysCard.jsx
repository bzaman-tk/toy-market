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
                <label htmlFor={`my-modal-${index}`} className="btn mr-2">
                    Update
                </label>
                <button onClick={() => handleDelete(_id)} className="btn text-red-500">X</button>

                <input type="checkbox" id={`my-modal-${index}`} className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box w-11/12 max-w-5xl">
                        <h3 className="font-bold text-lg">Congratulations random Internet user! {`my-modal-${index}`}</h3>
                        <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                        <div className="modal-action">
                            <label htmlFor={`my-modal-${index}`} className="btn">Yay!</label>
                        </div>
                    </div>
                </div>
            </td>
        </tr>
    );
};

export default MyToysCard;