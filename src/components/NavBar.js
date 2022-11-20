import {FaSun, FaMoon} from "react-icons/fa"
import useDarkMode from './DarkMode';
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
      <nav className=' sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06] bg-white supports-backdrop-blur:bg-white/95 dark:bg-slate-900/75 py-5 px-10 mb-12 flex justify-between border-b-2 dark:bg-[#1e2124] bg-white'>
        <h1 className='text-xl font-bold'>Imperial Computing Year 2</h1>
        <ul className='flex items-center'>
          <li className='px-10 hover:text-cyan-500 duration-300'>
            <Link to="/">Home</Link>
          </li>
          <li className='px-10 hover:text-cyan-500 duration-300'>
            Some Useful Links
          </li>
          <li>
            <ThemeIcon/>
          </li>
        </ul>
      </nav>
      
    );
  }
  export default NavBar;


  const ThemeIcon = () => {
    const [darkTheme, setDarkTheme] = useDarkMode();
    const handleMode = () => setDarkTheme(!darkTheme);
    return (
      <span onClick={handleMode}>
        {darkTheme ? (
          <FaSun size='24' className='top-navigation-icon' />
        ) : (
          <FaMoon size='24' className='top-navigation-icon' />
        )}
      </span>
    );
  };

  
  {/* <div class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
  <div class="py-1" role="none">
    <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Account settings</a>
    <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Support</a>
    <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">License</a>
    <form method="POST" action="#" role="none">
      <button type="submit" class="text-gray-700 block w-full px-4 py-2 text-left text-sm" role="menuitem" tabindex="-1" id="menu-item-3">Sign out</button>
    </form>
  </div>
  </div> */}