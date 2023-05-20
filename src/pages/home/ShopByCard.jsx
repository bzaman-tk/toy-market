import React, { useContext } from 'react';
import { AuthContext } from '../../auth/AuthProvider';
import Swal from 'sweetalert2'
import { Link, useNavigate } from 'react-router-dom';

const ShopByCard = ({ data }) => {
    const { user } = useContext(AuthContext)
    const { _id, photo, name, ratting, price } = data;
    const navigate = useNavigate()
    // console.log(data);

    const handleView = () => {
        let timerInterval
        Swal.fire({
            title: 'You Have To Login First',
            html: 'Redirect to Login page in <b></b> milliseconds.',
            timer: 2000,
            timerProgressBar: true,
            didOpen: () => {
                Swal.showLoading()
                const b = Swal.getHtmlContainer().querySelector('b')
                timerInterval = setInterval(() => {
                    b.textContent = Swal.getTimerLeft()
                }, 100)
            },
            willClose: () => {
                clearInterval(timerInterval)
            }
        }).then((result) => {
            /* Read more about handling dismissals below */
            if (result.dismiss === Swal.DismissReason.timer) {
                console.log('I was closed by the timer')
                navigate('/login')
            }
        })
    }

    return (
        <div className="card w-96 bg-gray-900 shadow-xl">
            <figure>
                <img className='h-72 w-full' src={photo} alt="" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Price: {price}</p>
                <p>Ratting: {ratting}</p>
                <div className="card-actions justify-end">
                    {
                        user ?
                            <Link to={`/toy/${_id}`} className="btn btn-primary">View Details</Link>
                            :
                            <button onClick={handleView} className="btn btn-primary">View Details</button>
                    }
                </div>
            </div>
        </div>
    );
};

export default ShopByCard;