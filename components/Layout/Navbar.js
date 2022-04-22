import { useState } from "react";
import {MenuIcon, XIcon,} from '@heroicons/react/outline';


import Link from "next/link";
import ActiveLink from './ActiveLink';

export default function Navbar() {
    const [menu, setMenu] = useState(false);

    const links = <ul className="flex flex-col md:flex-row list-none text-lg xl:text-xl space-y-2 md:space-y-0">
        <li onClick={() => setMenu(false)} className="nav-links"><ActiveLink link='/resume'>Resume</ActiveLink></li>
        <li onClick={() => setMenu(false)} className="nav-links"><ActiveLink link='/certificates'>Certificates</ActiveLink></li>
        <li onClick={() => setMenu(false)} className="nav-links"><ActiveLink link='/projects'>Projects</ActiveLink></li>
        <li onClick={() => setMenu(false)} className="nav-links"><ActiveLink link='/contact'>Contact</ActiveLink></li>
    </ul>

    return <header id='header'>
        <nav id='navbar'>
            <div className="flex items-center justify-between py-4 md:py-8 md:mb-2">
                <div onClick={() => setMenu(false)} title='Home Page' className="logo font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                    <Link href='/'>Radan Jovic</Link>
                </div>

                <div>
                    <div className="md:hidden">
                        {!menu ? <MenuIcon onClick={() => setMenu(prev => !prev)} className="menu-btn" /> : <XIcon onClick={() => setMenu(prev => !prev)} className="menu-btn" />}
                    </div>

                    <div className="hidden md:flex">
                        {links}
                    </div>
                </div>
            </div>
            {menu && <div className="md:hidden mb-4 absolute w-[100%] right-0 text-right p-4 pb-8 body-bg z-20">
                {links}
            </div>}
        </nav>
        
    </header>
}