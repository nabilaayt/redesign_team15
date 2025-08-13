const Home = () => {
    return(
        <section id="home" className="relative w-full min-h-screen font-poppins -mt-26">
            <img 
                src="/assets/fasilkom-layo.png" 
                alt="Gedung Fasilkom UNSRI Indralaya" 
                className="absolute top-0 right-0 w-3/5 h-auto object-cover"
            />
            <div className="relative z-10 flex flex-col px-16 py-20 pt-40 max-w-4xl">
                <div className="flex items-center gap-2 mb-3">
                    <span className="w-6 h-1 bg-gray-950"></span>
                    <span className=" text-gray-800">“Berintegritas dan berjiwa technopreunership”</span>
                </div>
                <h1 className="font-bold text-6xl leading-tight">Fakultas Ilmu Komputer Universitas Sriwijaya</h1>
                <p className="text-base text-gray-500 mt-8 text-wrap">
                    Fakultas Ilmu Komputer UNSRI saat ini telah mampu menjadikan dirinya menjadi salah satu Fakultas yang Unggul di Universitas Sriwijaya serta mendukung pembangunan dan pendidikan IPTEK di Sumatra Selatan.
                </p>
                <div className="flex relative flex-col py-15 gap-4">
                    <h2 className="text-gray-500">Download Document</h2>
                    <div className=" flex flex-row gap-2">
                        <a 
                            href="#" 
                            download
                            className="bg-amber-400 text-base font-medium text-white hover:border hover:outline-amber-400 hover:outline-2 hover:bg-white hover:text-amber-400 px-5 py-3 rounded-full"
                        >
                            SOP PPT Fasilkom
                        </a>
                        <a 
                            href="#" 
                            download
                            className="bg-white border outline-amber-400 outline-2 text-base font-medium text-amber-400 hover:bg-amber-400 hover:text-white hover:outline-none px-5 py-3 rounded-full"
                        >
                            Akreditasi UNSRI
                        </a>
                    </div>
                </div>
            </div>

            <div id="new-information" className="px-16 py-10 flex flex-col">
                <h1 className="text-gray-950 font-semibold text-2xl">News Information</h1>
            </div>

            <div id="student-partnership" className="px-16 py-10 flex flex-col">
                <h1 className="text-gray-950 font-semibold text-2xl">Student Affairs & Partnerships</h1>
            </div>
        </section>
    );
}

export default Home;