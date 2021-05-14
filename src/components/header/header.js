import Left from '../../img/Background_left.svg';
import Right from '../../img/Background_right.png';


const Header = () => {
    return (
        <div className='lg:w-4/5 lg:self-end lg:relative h-56 text-left '>
            <img className='hidden lg:block absolute left-0 top-0 h-56' src={Left} alt='left-img' />
            <img className='hidden lg:block absolute right-0 top-0 h-56' src={Right} alt='right-img' />
            <h1 className='ml-20 mt-16 font-bold text-4xl max-w-md'> Documentation formatting </h1>
        </div>
    )
}

export default Header;