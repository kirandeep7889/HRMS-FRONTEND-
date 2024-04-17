import React from 'react'
import LogBtn from './core/Navbar/LogBtn';
import { NavbarLinks } from '../data/NavbarLinks';
import { Link, matchPath, useLocation } from 'react-router-dom';

const NavBar = ({backgroundColor}) => {
  const location=useLocation();

  const matchRoute = (route) => {
    return matchPath({path:route}, location.pathname);
}


  return (
    <div className={` fixed w-full z-[9999] border-b-[1px] border-b-richblack-25 bg-white top-0`}>
    <div className='flex h-30 items-center justify-between '>
        <div className='m-2'>
           <img  src='https://avisoft.io/logo.svg'/>
        </div>
        <ul className='flex items-center gap-x-6 '>
             {
              NavbarLinks.map((link,index)=> {
                return (
                  <li key={index}>
                    <Link to={link?.path}>
                        <p className={`${matchRoute(link?.path) ? "font-bold underline" :  ""}`}>
                                {link.title}
                        </p>
                     </Link>
                  </li>
                )
              })
             }
        </ul>
        <div className='mr-5'>
          <LogBtn  link={"/login"} text={"Log In"}/>
        </div>

    </div>
    </div>

  )
}

export default NavBar
