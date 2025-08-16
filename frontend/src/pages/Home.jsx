import ListNewsStudent from "../components/ListNewsStudent";
import ListNewsInfo from "../components/ListNewsInfo";
import ListOrganization from "../components/ListOrganization";
import Footer from "../components/Footer";
import {fadeIn} from "../utils/variants";
import { motion } from "motion/react";
import { NavLink } from "react-router-dom";

const Home = () => {
    return(
        <section id="home" className="relative w-full min-h-screen font-poppins -mt-26">

            {/* Section Hero */}
            <motion.img 
                src="/assets/fasilkom-layo.png" 
                alt="Gedung Fasilkom UNSRI Indralaya" 
                className="absolute top-0 right-0 w-full sm:-4/5 md:w-3/5 lg:-2/5 h-auto object-cover"

                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
            />
            <motion.div 
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}

            className="relative z-10 flex flex-col px-6 sm:px-16 md:px-16 py-10 pt-40 max-w-4xl">
                <div className="flex items-center gap-2 mb-3">
                    <span className="w-6 h-1 bg-gray-950"></span>
                    <span className="text-gray-800 text-sm sm:text-base">“Berintegritas dan berjiwa technopreunership”</span>
                </div>
                <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">Fakultas Ilmu Komputer Universitas Sriwijaya</h1>
                <p className="text-base text-gray-500 mt-8 text-wrap">
                    Fakultas Ilmu Komputer UNSRI saat ini telah mampu menjadikan dirinya menjadi salah satu Fakultas yang Unggul di Universitas Sriwijaya serta mendukung pembangunan dan pendidikan IPTEK di Sumatra Selatan.
                </p>
                <div className="flex relative flex-col py-15 gap-4">
                    <h2 className="text-gray-500">Download Document</h2>
                    <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
                        <a 
                            href="#" 
                            download
                            className="bg-amber-400 text-base whitespace-nowrap w-fit font-medium text-white hover:border hover:outline-amber-400 hover:outline-2 hover:bg-white hover:text-amber-400 px-5 py-3 rounded-full"
                        >
                            SOP PPT Fasilkom
                        </a>
                        <a 
                            href="#" 
                            download
                            className="bg-white border whitespace-nowrap w-fit outline-amber-400 outline-2 text-base font-medium text-amber-400 hover:bg-amber-400 hover:text-white hover:outline-none px-5 py-3 rounded-full"
                        >
                            Akreditasi UNSRI
                        </a>
                    </div>
                </div>
            </motion.div>

            {/* Section News Information */}
            <motion.div id="newInformation" 
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}

            className="px-6 sm:px-16 md:px-16 py-10 mb-10 flex flex-col">
                <h1 className="text-gray-950 font-semibold text-2xl mb-8">News Information</h1>
                <ListNewsStudent />
            </motion.div>

            {/* Section Student Affairs & Partnership */}
            <motion.div id="studentPartnership" 
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}

            className="px-6 sm:px-16 md:px-16 py-10 mb-10 flex flex-col">
                <h1 className="text-gray-950 font-semibold text-2xl mb-8">Student Affairs & Partnerships</h1>
                <ListNewsInfo />
            </motion.div>

            {/* Section Profile Video */}
            <motion.div id="profileVideo" 
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}

            className="px-6 sm:px-16 md:px-16 py-10 mb-10 md:flex-row flex flex-col gap-10">
                <div className="flex-[1.5] aspect-video rounded-xl overflow-hidden shadow-lg">
                    <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/mpI7AxgaReA"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full rounded-2xl"
                    ></iframe>
                </div>

                <div className="flex-[1] flex flex-col">
                    <h1 className="text-gray-950 font-semibold text-2xl mt-4 md:mt-0 mb-4 md:mb-8">Profile Video</h1>
                    <div className="flex flex-col gap-5">
                        <p className="text-gray-500 text-base text-wrap">Fakultas Ilmu Komputer Universitas Sriwijaya hadir sebagai pusat inovasi, pembelajaran, dan kolaborasi. Dalam video profil ini, Anda akan melihat bagaimana kami membina lulusan yang siap menghadapi masa depan, dan membangun penelitian yang berdampak. </p>
                        <NavLink 
                            to={"/profile"}
                            className="bg-amber-400 text-base font-medium w-fit text-white hover:border hover:outline-amber-400 hover:outline-2 hover:bg-white hover:text-amber-400 px-5 py-3 rounded-full"
                        >
                            Discover Fasilkom
                        </NavLink>
                    </div>
                </div>
            </motion.div>

            {/* Section Fasilkom Student Organizations */}
            <motion.div id="organizations" 
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}

            className="flex flex-col mb-10 justify-center text-center items-center py-10 px-6 sm:px-16 md:px-16">
                <h1 className="text-gray-950 font-semibold text-2xl mb-8">Fasilkom Student Organizations</h1>
                <div className="w-full mx-auto flex justify-center items-center mb-10 overflow-x-hidden">
                    <ListOrganization/>
                </div>
            </motion.div>

            {/* Footer */}
            <Footer />

        </section>
    );
};

export default Home;