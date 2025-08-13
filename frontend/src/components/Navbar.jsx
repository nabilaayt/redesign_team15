import { useState } from "react";
import { NavLink } from "react-router-dom";
import { TbX } from "react-icons/tb";
import { RiArrowDropDownLine } from "react-icons/ri";

const Navbar = () => {
    const [searchInput, setSearchInput] = useState("");
    // const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleClear = () => {
        setSearchInput("");
    }

    return(
        <nav id="navbar" className="font-poppins sticky top-0 w-full z-50 bg-white/20 backdrop-blur-lg">
            <div className="flex flex-wrap items-center justify-center md:justify-between px-4 sm:px-8 lg:px-16 py-3 gap-y-4 gap-x-6">
                <div className="flex items-center gap-5 py-1">
                    <img 
                        src="/assets/logo-unsri.png" 
                        alt="Logo UNSRI" 
                        className="w-14 h-full"
                    />
                    <div className="flex flex-col">
                        <h1 className="text-gray-950 text-2xl font-semibold">Faculty of Computer Science</h1>
                        <h3 className="text-gray-700 font-medium">Universitas Sriwijaya</h3>
                    </div>
                </div>

                <ul className="hidden lg:flex font-normal gap-10 text-base">
                    <li className="transition-all text-gray-500 cursor-pointer hover:text-amber-400 hover:font-medium hover:underline hover:underline-offset-6">
                        <NavLink to={"/"}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li className="transition-all text-gray-500 cursor-pointer hover:text-amber-400 hover:font-medium hover:underline hover:underline-offset-6">
                        <NavLink to={"/profile"}
                        >
                            Profile
                        </NavLink>
                    </li>
                </ul>

                <div className="flex flex-row gap-5">
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
                                onClick={handleClear}
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
            </div>
        </nav>
    );
}

export default Navbar;