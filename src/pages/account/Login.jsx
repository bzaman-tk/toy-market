import { Link } from 'react-router-dom';
import login from '../../assets/login.jpg'

const Login = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center w-1/2 lg:text-left">
                    <img src={login} className='w-3/4 rounded-3xl' alt="" />
                </div>
                <div className="card w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-2xl font-bold text-center mt-5">Please Login</h1>
                    <div className="card-body">
                        <form>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' required placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' required placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input type='submit' value='Login' className="btn btn-primary" />
                                <p className='text-center mt-2'>Do Not have an ID? <Link to='/register' className='text-blue-500' >Register</Link></p>
                            </div>
                        </form>
                        <div className="divider">Login using</div>

                        <button className="bth border w-28 mx-auto py-2">Google</button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;