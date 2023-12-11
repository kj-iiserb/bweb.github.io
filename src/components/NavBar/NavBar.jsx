import React, { useEffect, useState }  from "react";
import { Link } from "react-router-dom";

//react icons
import { FaBarsStaggered, FaBook, FaXmark } from "react-icons/fa6";
import { useLocation } from "react-router-dom";
import visdomLogoNav from '../../assets/visdomnav5.png';

const Navbar = () =>{
    
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    //toggle menu 
    const toggleMenu = () =>{
        setIsMenuOpen(!isMenuOpen);
    }

    useEffect(() => {
        const handleScroll = () =>{
            if(window.scrollY > 100){
                setIsSticky(true);
            }else{
                setIsSticky(false);
            }
        }

        window.addEventListener("scroll", handleScroll);
        
        return () => {
            window.addEventListener("scroll", handleScroll);
        }
    }, [])

    const location = useLocation();
    const [currentPath, setCurrentPath] = useState();
    useEffect(() => {
        setCurrentPath(location.pathname);
        console.log(location.pathname);
    }, [location]);
    
    //Nav items
    const navItems = [
        {link: "Home", path: "/home"},
        {link: "Members", path: "/group-members"},
        {link: "Publications", path: "/publications"},
    ]

    return (
        <header className="w-full bg-transparent relative top-0 left-0 right-0 transition-all ease-in duration-300 font-bold">
            <nav className={`py-7 border-b-2 lg:px-24 px-4 ${isSticky ? "sticky top-0 left-0 right-0" : ""}`}>
                <div className="flex items-center text-base gap-8">
                    {/* logo */}
                    <Link to = "/" className="text-2sxl font-bold flex items-baseline self-start grow whitespace-nowrap	" ><img src={visdomLogoNav} alt="Logo" /></Link>

                    {/* nav items for large devices */}
                    <ul className="md:flex space-x-12 hidden text-bold">
                        {
                            navItems.map(({link, path}) => <Link key={path} to={path} className={"block text-xl text-black uppercase cursor-pointer hover:text-blue-800" + (currentPath === path ? " text-blue-700" : "")}>{link}</Link>)
                        }
                    </ul>
                
                    {/* menu-button for mobile devices */}
                    <div className="md:hidden">
                        <button onClick={toggleMenu} className="text-black focus:outline-none">
                            {
                                isMenuOpen ? <FaXmark className="h-5 w-5 text:black"/> : <FaBarsStaggered />
                            }
                        </button>
                    </div>

                    {/* nav-items for small devices */}
                    <div className={`space-y-4 px-4 mt-20 py-7 bg-blue-500 ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
                        {
                            navItems.map(({link, path}) => <Link key={path} to={path} className="block text-base text-white
                            uppercase cursor-pointer hover:text-blue-700">{link}</Link>)
                        }
                    </div>

                </div>
            </nav>
        </header>
    )
}

export default Navbar;