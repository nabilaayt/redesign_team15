import Footer from "../components/Footer";

const Profile = () => {
    return(
        <section id="profile" className="font-poppins">
            <div className="flex flex-col py-10 relative lg:flex-row w-full items-center">
                <img 
                    src="/assets/diklat-bukit.png" 
                    alt="Gedung Diklat Fasilkom UNSRI Bukit" 
                    // className="w-full h-full object-cover"
                    className="w-full h-64 sm:h-80 md:h-[28rem] lg:h-[36rem] object-cover"
                />
                <div className="absolute inset-0 lg:inset-auto lg:right-0 lg:top-1/2 lg:-translate-y-1/2 w-full sm:w-4/5 lg:w-3/5 bg-amber-300 bg-opacity-60 flex flex-col justify-center items-center p-6 sm:p-10 md:p-14 lg:p-16">
                    <h1 className="text-white font-bold text-2xl sm:text-3xl md:text-4xl lg:text-6xl leading-tight text-center lg:text-left">GET TO KNOW OUR STORY AND PURPOSE</h1>
                    <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl mt-3 sm:mt-4 text-center lg:text-left">Kenali lebih dekat sejarah, visi, dan misi kami yang mengarahkan langkah Fakultas Ilmu Komputer menuju keunggulan dan kontribusi nyata di dunia teknologi.</p>
                </div>
            </div>

            <div className="flex flex-col px-16 py-10">
                <h1 className="text-gray-950 font-semibold text-2xl mb-8">Program Studi Fakultas Ilmu Komputer</h1>
                <p className="text-gray-500 text-base">Berdirinya Fakultas Ilmu Komputer didahului dengan Program Diploma Komputer (PDK) Unsri baru berdiri pertengahan tahun 2003, tepatnya tanggal 5 September 2003 dan 
                    merupakan program pendidikan bidang ICT yang pertama di Universitas Sriwijaya, 
                    sehingga melalui perencanaan strategis yang disusun secara matang dan komprehensif 
                    diharapkan dalam lima tahun ke depan dapat terwujud sebuah sistem pendidikan PDK yang handal dan mampu mengantisipasi perubahan di masa mendatang. 
                    Keinginan untuk mendirikan program pendidikan di bidang teknologi informasi dan komunikasi di Universitas Sriwijaya telah ada sejak tahun 1985, dimana pada saat itu Unsri telah mulai menyelenggarakan program pendidikan 
                    dan pelatihan profesional bidang komputer di Pusat Komputer Universitas Sriwijaya. 
                    Penyiapan SDM untuk tenaga dosen mulai dilakukan dengan mengirimkan beberapa dosen untuk mengikuti pendidikan S2 di bidang teknologi informasi dan komunikasi baik di dalam maupun di luar negeri.</p>
            </div>

            <div className="flex flex-col px-16 py-10">
                <h1 className="text-gray-950 font-semibold text-2xl mb-8">Visi & Misi</h1>
                <div className="flex flex-col gap-5 mb-8">
                    <h1 className="text-gray-950 font-semibold text-xl">Visi</h1>
                    <p className="text-gray-500 text-base">Pada tahun 2025 menjadi institusi yang unggul di bidang ICT, berintegritas dan berjiwa technopreunership</p>
                </div>
                <div className="flex flex-col gap-5">
                    <h1 className="text-gray-950 font-semibold text-xl">Misi</h1>
                    <ol className="text-gray-500 text-base list-decimal pl-3 space-y-2">
                        <li>Menyelenggarakan dan mengembangkan pendidikan tinggi dalam upaya menghasilkan manusia terdidik yang dapat menerapkan dan mengembangkan ilmu pengetahuan bidang informasi, komunikasi dan teknologi.</li>
                        <li>Menyelenggarakan dan mengembangkan penelitian dalam rangka meningkatkan kualitas pembelajaran, ilmu pengetahuan bidang informasi, komunikasi dan teknologi yang memiliki nilai aplikasi dalam pembangunan.</li>
                        <li>Menyelenggarakan dan mengembangkan pengabdian kepada masyarakat dengan menerapkan ilmu pengetahuan bidang informasi, komunikasi dan teknologi untuk mewujudkan kesejahteraan dan kemajuan masyarakat.</li>
                        <li>Menyelenggarakan pembinaan dan pengembangan bakat, minat, penalaran, dan kesejahteraan mahasiswa.</li>
                        <li>Melaksanakan kerjasama (MOA) dengan lembaga lain, baik nasional maupun internasional.</li>
                        <li>Melaksanakan manajemen administrasi yang modern, profesional, efektif, efisien, dan akuntabel.</li>
                    </ol>
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </section>
    );
}

export default Profile;