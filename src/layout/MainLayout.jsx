
import Header from '../pages/shared/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/shared/Footer';

const MainLayout = () => {
    return (
        <div className='container mx-auto px-5 sm:px-0'>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayout;