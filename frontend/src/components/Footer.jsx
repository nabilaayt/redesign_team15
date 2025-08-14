import { NavLink } from "react-router-dom";

const Footer = () => {
    return(
        <footer className="bg-amber-400 pt-18">
            <div className="flex flex-col sm:flex-row sm:flex-wrap lg:flex-nowrap px-6 sm:px-16 lg:px-16 gap-10 lg:gap-20">
                <div className="flex flex-col pr-8 gap-5">
                    <div className="flex flex-row gap-5">
                        <img 
                            src="/assets/logo/logo-unsri.png" 
                            alt="Logo UNSRI" 
                            className="w-16 h-full"
                        />
                        <div className="flex flex-col">
                            <h3 className="text-2xl font-medium text-white">Faculty of Computer Science</h3>
                            <p className="text-lg text-white">Universitas Sriwijaya</p>
                        </div>
                    </div>
                    <p className="text-white text-lg break-words max-w-xs">Jl. Palembang – Prabumulih KM.32 Kabupaten Ogan Ilir, Sumatera Selatan, Indonesia</p>
                </div>
                <div className="flex flex-col pr-16 md:px-1 xl:px-10 lg:px-22 gap-5">
                    <h3 className="text-2xl font-medium text-white">Contact Us</h3>
                    <div className="flex flex-col gap-1">
                        <p className="text-white text-lg">
                            Instagram: 
                            <span className="px-2">
                                <a 
                                    href="https://www.instagram.com/humasfasilkomunsri/"
                                    className="text-lg hover:font-medium"
                                    >    
                                    @humasfasilkomunsri
                                </a>
                            </span>
                        </p>
                        <p className="text-white text-lg">
                            Email: 
                            <span className="px-2">
                                <a 
                                    href="mailto:humas@ilkom.unsri.ac.id"
                                    className="text-lg hover:font-medium"
                                    >    
                                    humas@ilkom.unsri.ac.id
                                </a>
                            </span>
                        </p>
                    </div>
                </div>
                <div className="flex flex-col pr-16 xl:pl-10 lg:pl-34 gap-5">
                    <h3 className="text-2xl font-medium text-white">Navigation</h3>
                    <ul className="flex flex-col gap-4">
                        <li className="text-white text-lg hover:font-medium">
                            <NavLink to={"/"}>
                                Home
                            </NavLink>
                        </li>
                        <li className="text-white text-lg hover:font-medium">
                            <NavLink to={"/profile"}>
                                Profile
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="flex flex-col py-14 px-7 md:px-16 lg:px-16 gap-8 text-center justify-center items-center">
                <span className="w-full h-0.5 bg-white"></span>
                <p className="text-white font-medium text-lg">© REDESIGN CHALLENGE GDG | TEAM 15</p>
            </div>
        </footer>
    );
};

export default Footer;