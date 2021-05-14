import DesktopNavbar from './desktop/desktopnavbar';
import MobileNavbar from './mobile/mobilenavbar';

const Navbar = () => {
    return (
        <div className='relative lg:w-1/5'>
            <DesktopNavbar />
            <MobileNavbar />
        </div>
    )
}

export default Navbar;