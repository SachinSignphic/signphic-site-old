import reactLogo from '../assets/react.svg';
import { useState } from 'react';
import { Link } from 'react-router-dom';
// import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav className='flex justify-between items-center h-24 mx-auto w-full px-4 text-gray-200'>
      <h1 className='w-full text-3xl font-bold text-orange-400'>Signphic.</h1>
      <div className='hidden  sm:flex text-sm'>
        <Link to='/' className='p-4 font-light tracking-normal hover:text-gray-300 transition-colors'>Navbar</Link>
        <Link to='/card' className='p-4 font-light tracking-normal hover:text-gray-300 transition-colors'>Card</Link>
        <Link to='/testimonial' className='p-4 font-light tracking-normal hover:text-gray-300 transition-colors'>Testimonial</Link>
        <Link to='/about' className='p-4 font-light tracking-normal hover:text-gray-300 transition-colors'>About</Link>
        <Link to='/contact' className='p-4 font-light tracking-normal hover:text-gray-300 transition-colors'>Contact</Link>
      </div>
      <div onClick={handleNav} className='block md:hidden'>
          {nav ? <img src='/vite.svg' width={20} /> : <img src={reactLogo} width={20} />}
      </div>
      <div className={nav ? 'fixed left-0 z-10 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'z-10 ease-in-out h-full duration-500 fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold  text-orange-400 m-4'>Signphic.</h1>
        <div className='flex flex-col text-sm'>
          <Link className='p-4 border-b hover:text-gray-300 transition-colors border-gray-600'>Home</Link>
          <Link className='p-4 border-b hover:text-gray-300 transition-colors border-gray-600'>Company</Link>
          <Link className='p-4 border-b hover:text-gray-300 transition-colors border-gray-600'>Resources</Link>
          <Link className='p-4 border-b hover:text-gray-300 transition-colors border-gray-600'>About</Link>
          <Link className='p-4 hover:text-gray-300 transition-colors'>Contact</Link>
          </div>
      </div>
    </nav>
  );
};

export default Navbar;