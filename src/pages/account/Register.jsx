import { Link, useNavigate } from 'react-router-dom';
import login from '../../assets/login.jpg'
import { AuthContext } from '../../auth/AuthProvider';
import { useContext, useState } from 'react';
import { updateProfile } from 'firebase/auth';

const Register = () => {
    const [error, setError] = useState('')
    const { singUp, logOut } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleRegister = e => {
        e.preventDefault()
        setError('')
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        if (!name.trim()) {
            setError('name Cant be empty')
            return;
        }

        singUp(email, password)
            .then(result => {
                console.log(result.user)
                updateProfile(result.user, {
                    displayName: name, photoURL: photo
                })
                    .then(() => {
                        console.log('profile updated');
                        logOut()
                            .then(() => {
                                console.log('user LogOut');
                                navigate('/login')
                            })
                            .catch(e => setError(e.message))
                    })
                    .catch(e => setError(e.message))
            })
            .catch(e => setError(e.message))

    }
    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center w-1/2 lg:text-left">
                    <img src={login} className='w-3/4 rounded-3xl' alt="" />
                </div>
                <div className="card w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-2xl font-bold text-center mt-5">Please Register</h1>
                    <div className="card-body">
                        <form onSubmit={handleRegister}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' required={true} placeholder="Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' required={true} placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' required={true} placeholder="password" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="url" name='photo' required={true} placeholder="Photo URL" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <input type='submit' value='Register' className="btn btn-primary" />
                                <p className="mt-2 text-center text-red-500">{error}</p>
                                <p className='text-center mt-2'>Already have an ID? <Link to='/login' className='text-blue-500' >Login</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;