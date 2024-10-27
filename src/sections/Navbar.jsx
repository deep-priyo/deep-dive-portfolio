import {useState} from "react";
import {navLinks} from "../constants/index.js";

const NavItems =()=>{
     return(
         <ul className="nav-ul">
             {navLinks.map((item,)=>(<li key={item.id} className="nav-li_a" onClick={()=>{}}>
                 <a href={item.href}>
                     {item.name}

                 </a>
             </li>))}


         </ul>
     )
 }

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu =()=>setIsOpen((prev)=>!prev);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 text-white">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center py-5 mx-auto c-space">
                    <a href="/" className="flex items-center text-neutral-400 font-bold text-xl hover:text-white transition-colors">
                        <svg className="h-8 w-8 mr-2"
                             xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 32 32" viewBox="0 0 32 32"
                             id="plurk-p">
                            <path fill="#fff9dd" d="m26 32h-20c-3.314 0-6-2.686-6-6v-20c0-3.314 2.686-6 6-6h20c3.314 0 6 2.686 6 6v20c0 3.314-2.686 6-6 6z"></path>
                            <path fill="#ffe777" d="m13.75 13h4.5v3h-4.5z"></path>
                            <path fill="#ffd200" d="m22.667 8h-13.334c-.736 0-1.333.597-1.333 1.333v13.333c0 .737.597 1.334 1.333 1.334h13.333c.737 0 1.334-.597 1.334-1.333v-13.334c0-.736-.597-1.333-1.333-1.333zm-1.417 11h-7.5v3h-3v-12h10.5z"></path>
                        </svg>
                        Priyadeep
                    </a>
                    <button onClick={toggleMenu} className="text-neutral-400 hover:text-white focus:outline-none  sm:hidden flex" aria-label="Toggle Menu">
                        <img src={isOpen? "assets/close.svg":"assets/menu.svg"} alt="hamburger" className="w-6 h-6"/>
                    </button>
                    <nav className="sm:flex hidden">
                        <NavItems/>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Navbar;
