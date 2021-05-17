import DesktopNavbar from './desktop/desktopnavbar';
import MobileNavbar from './mobile/mobilenavbar';

const Navbar = () => {
    return (
        <nav className='relative'>
            <DesktopNavbar />
            <MobileNavbar />
        </nav>
    )
}

export default Navbar;