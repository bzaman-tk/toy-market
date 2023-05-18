import { Link } from 'react-router-dom';
import img from '../../assets/error.jpg';

const Error404 = () => {
    return (
        <div className='h-screen flex flex-col items-center justify-center'>
            <img src={img} className='w-1/3 mx-auto mb-10' alt="" />
            <h2 className="text-5xl text-red-500 mb-9">Page NOT Found</h2>
            <Link className='text-2xl' to='/'>Go Back to <span className="text-blue-500">Home</span></Link>
        </div>
    );
};

export default Error404;