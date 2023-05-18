import React from 'react';
import { Link } from 'react-router-dom';

const AllToysCard = ({ data, index }) => {
    const { _id, seller, categorys, quantity, name, price } = data;
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{seller}</td>
            <td>{name}</td>
            <td>{categorys}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <td>
                <Link to={`/toy/${_id}`} className="btn">View Details button</Link>
            </td>
        </tr>
    );
};

export default AllToysCard;