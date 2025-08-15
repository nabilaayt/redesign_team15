import Footer from "../components/Footer";

const Profile = () => {
    return(
        <section id="profile" className="font-poppins">

            {/* Section Hero */}
            <div className="flex flex-col py-10 relative lg:flex-row w-full items-center">
                <img 
                    src="/assets/diklat-bukit.png" 
                    alt="Gedung Diklat Fasilkom UNSRI Bukit" 
                    className="w-full h-64 sm:h-80 md:h-[28rem] lg:h-[36rem] object-cover"
                />
                <div className="absolute inset-0 lg:inset-auto lg:right-0 lg:top-1/2 lg:-translate-y-1/2 w-full sm:w-4/5 lg:w-3/5 bg-amber-300 bg-opacity-60 flex flex-col justify-center items-center p-6 sm:p-10 md:p-14 lg:p-16">
                    <h1 className="text-white font-bold text-2xl sm:text-3xl md:text-4xl lg:text-6xl leading-tight text-center lg:text-left">GET TO KNOW OUR STORY AND PURPOSE</h1>
                    <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl mt-3 sm:mt-4 text-center lg:text-left">Kenali lebih dekat sejarah, visi, dan misi kami yang mengarahkan langkah Fakultas Ilmu Komputer menuju keunggulan dan kontribusi nyata di dunia teknologi.</p>
                </div>
            </div>

            {/* Section About Us */}
            <div className="flex flex-col lg:flex-row px-6 sm:px-10 md:px-16 py-10 gap-8 lg:gap-16">
                <div className="flex-shrink-0 lg:w-1/3">
                    <h3 className="text-amber-400 font-medium text-lg sm:text-xl mb-2">About Us</h3>
                    <h1 className="text-gray-950 font-semibold text-2xl sm:text-3xl lg:text-4xl leading-tight">Program Studi Fakultas Ilmu Komputer</h1>
                </div>
                <div className="flex-1 lg:w-2/3">
                    <p className="text-gray-500 text-base leading-relaxed">
                        Berdirinya Fakultas Ilmu Komputer didahului dengan Program Diploma Komputer (PDK) Unsri baru berdiri pertengahan tahun 2003, tepatnya tanggal 5 September 2003 dan 
                        merupakan program pendidikan bidang ICT yang pertama di Universitas Sriwijaya, 
                        sehingga melalui perencanaan strategis yang disusun secara matang dan komprehensif 
                        diharapkan dalam lima tahun ke depan dapat terwujud sebuah sistem pendidikan PDK yang handal dan mampu mengantisipasi perubahan di masa mendatang.
                    </p>
                    <br />
                    <p className="text-gray-500 text-base leading-relaxed">
                        Keinginan untuk mendirikan program pendidikan di bidang teknologi informasi dan komunikasi di Universitas Sriwijaya telah ada sejak tahun 1985, dimana pada saat itu Unsri telah mulai menyelenggarakan program pendidikan 
                        dan pelatihan profesional bidang komputer di Pusat Komputer Universitas Sriwijaya. 
                        Penyiapan SDM untuk tenaga dosen mulai dilakukan dengan mengirimkan beberapa dosen untuk mengikuti pendidikan S2 di bidang teknologi informasi dan komunikasi baik di dalam maupun di luar negeri.
                    </p>
                </div>
            </div>

            {/* Section Visi */}
            <div className="flex flex-col px-6 sm:px-16 md:px-16 py-10 mb-6 gap-3 justify-center items-center">
                <h1 className="relative text-gray-950 font-semibold text-center text-2xl mb-8 
                            after:content-[''] after:block after:h-1 after:w-32 after:bg-amber-400 after:mt-2 after:mx-auto">
                    Visi
                </h1>
                <p className="text-gray-500 text-base text-center">
                    Pada tahun 2025 menjadi institusi yang unggul di bidang ICT, berintegritas dan berjiwa technopreunership
                </p>
            </div>

            {/* Section Misi */}
            <div className="flex flex-col px-6 sm:px-16 md:px-16 py-10 gap-3 mb-10 justify-center items-center min-h-screen">
                <h1 className="relative text-gray-950 font-semibold text-center text-2xl mb-8 
                            after:content-[''] after:block after:h-1 after:w-32 after:bg-amber-400 after:mt-2 after:mx-auto">
                    Misi
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-6xl w-full">
                    <div className="flex flex-col gap-3 justify-start items-center hover:bg-white hover:shadow-lg px-6 py-6 hover:rounded-2xl transition-all duration-300">
                        <h1 className="text-3xl font-semibold text-gray-950">01</h1>
                        <h3 className="text-base font-medium text-gray-900 text-center">Mendidik untuk masa depan teknologi</h3>
                        <p className="text-gray-500 text-sm text-center leading-relaxed">Menyelenggarakan dan mengembangkan pendidikan tinggi dalam upaya menghasilkan manusia terdidik yang dapat menerapkan dan mengembangkan ilmu pengetahuan bidang informasi, komunikasi dan teknologi.</p>
                    </div>
                    <div className="flex flex-col gap-3 justify-start items-center hover:bg-white hover:shadow-lg px-6 py-6 hover:rounded-2xl transition-all duration-300">
                        <h1 className="text-3xl font-semibold text-gray-950">02</h1>
                        <h3 className="text-base font-medium text-gray-900 text-center">Riset untuk inovasi berkelanjutan</h3>
                        <p className="text-gray-500 text-sm text-center leading-relaxed">Menyelenggarakan dan mengembangkan penelitian dalam  rangka meningkatkan kualitas pembelajaran, ilmu pengetahuan bidang informasi, komunikasi dan teknologi yang memiliki nilai aplikasi dalam pembangunan.</p>
                    </div>
                    <div className="flex flex-col gap-3 justify-start items-center hover:bg-white hover:shadow-lg px-6 py-6 hover:rounded-2xl transition-all duration-300">
                        <h1 className="text-3xl font-semibold text-gray-950">03</h1>
                        <h3 className="text-base font-medium text-gray-900 text-center">Teknologi untuk kesejahteraan bersama</h3>
                        <p className="text-gray-500 text-sm text-center leading-relaxed">Menyelenggarakan dan mengembangkan pengabdian kepada masyarakat dengan menerapkan ilmu pengetahuan  bidang informasi, komunikasi dan teknologi untuk mewujudkan kesejahteraan dan kemajuan masyarakat.</p>
                    </div>
                    <div className="flex flex-col gap-3 justify-start items-center hover:bg-white hover:shadow-lg px-6 py-6 hover:rounded-2xl transition-all duration-300">
                        <h1 className="text-3xl font-semibold text-gray-950">04</h1>
                        <h3 className="text-base font-medium text-gray-900 text-center">Mengasah potensi, membangun prestasi</h3>
                        <p className="text-gray-500 text-sm text-center leading-relaxed">Menyelenggarakan pembinaan dan pengembangan bakat, minat, penalaran, dan kesejahteraan mahasiswa. </p>
                    </div>
                    <div className="flex flex-col gap-3 justify-start items-center hover:bg-white hover:shadow-lg px-6 py-6 hover:rounded-2xl transition-all duration-300">
                        <h1 className="text-3xl font-semibold text-gray-950">05</h1>
                        <h3 className="text-base font-medium text-gray-900 text-center">Berkolaborasi tanpa batas</h3>
                        <p className="text-gray-500 text-sm text-center leading-relaxed">Melaksanakan kerjasama (MOA) dengan lembaga lain, baik nasional maupun internasional. </p>
                    </div>
                    <div className="flex flex-col gap-3 justify-start items-center hover:bg-white hover:shadow-lg px-6 py-6 hover:rounded-2xl transition-all duration-300">
                        <h1 className="text-3xl font-semibold text-gray-950">06</h1>
                        <h3 className="text-base font-medium text-gray-900 text-center">Profesional, efektif, akuntabel</h3>
                        <p className="text-gray-500 text-sm text-center leading-relaxed">Melaksanakan Manajemen administrasi yang modern profesional, efektif, efesien dan akuntabel. </p>
                    </div>
                </div>
            </div>

            {/* Section Programs, Students, & Alumni */}
            <div className="flex flex-col lg:flex-row py-1 px-6 sm:px-16 md:px-16 mb-20 gap-10">
                <div className="flex flex-col gap-6 flex-1">
                    <h1 className="text-gray-950 font-semibold text-2xl">Programs, Students, and Alumni</h1>
                    <p className="text-gray-500 text-base leading-relaxed">Fakultas Ilmu Komputer Universitas Sriwijaya menawarkan beragam program akademik yang dirancang untuk mencetak inovator dan pemimpin masa depan di bidang Teknologi Informasi dan Komunikasi.</p>
                    <div className="flex flex-col gap-5 lg:w-1/2">
                        <div className="flex flex-col gap-1">
                            <h3 className="text-gray-600 font-medium text-base">Program Sarjana</h3>
                            <ul className="text-gray-600 text-sm space-y-2">
                                <li className="flex items-start text-base">
                                <span className="text-gray-500 mr-2">•</span>
                                Teknik Informatika
                                </li>
                                <li className="flex items-start text-base">
                                <span className="text-gray-500 mr-2">•</span>
                                Teknik Komputer
                                </li>
                                <li className="flex items-start text-base">
                                <span className="text-gray-500 mr-2">•</span>
                                Sistem Informasi
                                </li>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-1">
                            <h3 className="text-gray-600 font-medium text-base">Diploma Komputer</h3>
                            <ul className="text-gray-600 text-sm space-y-2">
                                <li className="flex items-start text-base">
                                <span className="text-gray-500 mr-2">•</span>
                                Teknik Komputer
                                </li>
                                <li className="flex items-start text-base">
                                <span className="text-gray-500 mr-2">•</span>
                                Manajemen Informatika
                                </li>
                                <li className="flex items-start text-base">
                                <span className="text-gray-500 mr-2">•</span>
                                Komputer Akuntansi
                                </li>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-1">
                            <h3 className="text-gray-600 font-medium text-base">Program Pascasarjana</h3>
                            <ul className="text-gray-600 text-sm space-y-2">
                                <li className="flex items-start text-base">
                                <span className="text-gray-500 mr-2">•</span>
                                Doktor Ilmu Komputer
                                </li>
                                <li className="flex items-start text-base">
                                <span className="text-gray-500 mr-2">•</span>
                                Magister Ilmu Komputer
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-10 justify-center items-center w-full lg:w-1/2">
                    <div className="flex flex-col sm:flex-row gap-4 items-center w-full">
                        <div className="w-full sm:w-1/2">
                            <img
                            src="/assets/yudisum1.jpg"
                            alt="Yudisum"
                            className="rounded-2xl w-full h-90 object-cover"
                            />
                        </div>
                        <div className="w-full sm:w-1/2 sm:-mt-18">
                            <img
                            src="/assets/yudisium2.jpg"
                            alt="Yudisium"
                            className="rounded-2xl w-full h-90 object-cover"
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
                        <div className="flex flex-col gap-5">
                            <h1 className="text-4xl font-medium text-amber-400 text-center">8</h1>
                            <p className="text-xl font-medium text-gray-900">Program Studi</p>
                        </div>
                        <div className="flex flex-col gap-5">
                            <h1 className="text-4xl font-medium text-amber-400 text-center">2468</h1>
                            <p className="text-xl font-medium text-gray-900 text-center">Mahasiswa Aktif</p>
                        </div>
                        <div className="flex flex-col gap-5">
                            <h1 className="text-4xl font-medium text-amber-400 text-center">6416</h1>
                            <p className="text-xl font-medium text-gray-900 text-center">Alumni Fasilkom</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <Footer />

        </section>
    );
}

export default Profile;