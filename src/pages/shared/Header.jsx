import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'
import { useContext } from 'react';
import { AuthContext } from '../../auth/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    const navItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/blog'>Blog</Link></li>
        <li><Link to='/all-toys'>All Toys</Link></li>
        {user ?
            <>
                <li><Link to='/my-toys'>My Toys</Link></li>
                <li><Link to='/add-toy'>Add A Toy</Link></li>
            </> : ' '}
    </>;

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <Link to='/' className="normal-case text-xl flex gap-2 items-center font-bold">
                    <img src={logo} className='w-9' alt="" />
                    <span>Despicable Me Toy</span>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                {user ?
                    <>
                        <span className="tooltip tooltip-bottom cursor-pointer" data-tip={user?.displayName}>
                            <img className='w-8 rounded-full mr-2' src={user?.photoURL} alt="" />
                        </span>
                        <button onClick={() => logOut()} className="btn border rounded-lg">Logout</button>
                    </>
                    :
                    <Link to='/login' className="btn">Login</Link>
                }
            </div>
        </div>
    );
};

export default Header;