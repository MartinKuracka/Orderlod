import DesktopNavbar from './desktop/desktopnavbar';
import MobileNavbar from './mobile/mobilenavbar';

const Navbar = () => {
    return (
        <div className='relative'>
            <DesktopNavbar />
            <MobileNavbar />
        </div>
    )
}

export default Navbar;