import { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { RiArrowDropDownLine } from "react-icons/ri";

const Navbar = () => {
    const [searchInput, setSearchInput] = useState("");
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return(
        <nav id="navbar" className="font-poppins sticky top-0 w-full z-50 bg-white/20 backdrop-blur-lg">
            <div className="flex flex-wrap items-center justify-center md:justify-between px-3 sm:px-8 lg:px-16 py-4 lg:py-5 gap-y-4 gap-x-6">
                <div className="flex items-center gap-4 flex-shrink-0">
                    <img 
                        src="/assets/logo/logo-unsri.png" 
                        alt="Logo UNSRI" 
                        className="w-10 h-10 sm:w-15 sm:h-15"
                    />
                    <div className="flex flex-col min-w-0">
                        <h1 className="text-gray-950 text-sm sm:text-lg lg:text-2xl font-semibold leading-tight break-words">Faculty of Computer Science</h1>
                        <h3 className="text-gray-700 text-sm sm:text-base font-medium">Universitas Sriwijaya</h3>
                    </div>
                </div>

                <ul className="hidden lg:flex font-normal gap-10 text-base">
                    <li className="transition-all text-gray-500 cursor-pointer hover:text-amber-400 hover:font-medium hover:underline hover:underline-offset-6">
                        <NavLink 
                        to="/"
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li className="transition-all text-gray-500 cursor-pointer hover:text-amber-400 hover:font-medium hover:underline hover:underline-offset-6">
                        <NavLink 
                        to="/profile"
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                        >
                            Profile
                        </NavLink>
                    </li>
                </ul>

                <div className="hidden lg:flex flex-row gap-5">
                    <div className="relative flex bg-gray-50 p-3 px-5 max-w-md rounded-full items-center">
                        <img src="/assets/Icon Search.png" className="w-5 h-5" alt="icon search" />
                        <input 
                            type="input" 
                            placeholder="Search..."
                            // value={searchInput}
                            // onChange={(e) => setSearchInput(e.target.value)}
                            // onKeyDown={e => {
                            //     if(e.key == "Enter"){
                            //         handleSearch();
                            //     }
                            // }}
                            className={`flex-1 h-full px-5 outline-none transition duration-300 ${searchInput ? "text-gray-800" : "text-gray-600"}`}
                        />
                        {searchInput && (
                            <button
                                className="absolute inset-y-0 right-4 text-font-color2 hover:text-gray-700 cursor-pointer"
                            >
                                <TbX size={24} />
                            </button>
                        )}
                    </div>
                    <div className="flex relative bg-gray-50 py-2 px-10 pr-10 pl-4 rounded-full justify-center items-center">
                        <img 
                            src="/assets/flag-indonesia.png" 
                            alt="Indonesia" 
                            className="w-full h-8"
                        />
                        <button
                            className="absolute inset-y-0 left-12 text-font-color2 hover:text-gray-700 cursor-pointer"
                        >
                            <RiArrowDropDownLine  size={32}/>
                        </button>
                    </div>
                </div>

                {/* Hamburger Menu Button */}
                <div className="lg:hidden">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="text-gray-950 hover:text-black focus:outline-none"
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? (
                        <HiX className="size-8" />
                        ) : (
                        <HiMenu className="size-8" />
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="lg:hidden bg-white absolute top-full left-0 w-full shadow-xl">
                        <ul className="flex flex-col items-center text-gray-500 font-medium text-lg py-4">
                            <div className="flex flex-col gap-4 px-6 mt-4 lg:hidden">
                                <div className="relative flex bg-gray-50 p-3 px-5 rounded-full items-center">
                                    <img src="/assets/Icon Search.png" className="w-5 h-5" alt="icon search" />
                                    <input 
                                    type="input" 
                                    placeholder="Search..."
                                    className={`flex-1 h-full px-5 outline-none transition duration-300 ${searchInput ? "text-gray-800" : "text-gray-600"}`}
                                    />
                                    {searchInput && (
                                    <button className="absolute inset-y-0 right-4 cursor-pointer">
                                        <TbX size={24} />
                                    </button>
                                    )}
                                </div>
                            </div>
                            <li className="w-full text-center py-3 hover:text-amber-400 transition-all cursor-pointer">
                                <NavLink to={"/"}>
                                    Home
                                </NavLink>
                            </li>
                            <li className="w-full text-center py-3 hover:text-amber-400 transition-all cursor-pointer">
                                <NavLink to={"/profile"}>
                                    Profile
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                )}

            </div>
        </nav>
    );
}

export default Navbar;