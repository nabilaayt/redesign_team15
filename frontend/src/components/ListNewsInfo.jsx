import { useEffect, useState } from "react";
import NewsInfoCard from "./NewsInfoCard";
import { getBeritaBaru } from "../service/api";

const ListNewsInfo = () => {
    // const dummyNewsInfo = [
    //     {
    //         id: 1,
    //         title: "Universitas Sriwijaya (Unsri) melepas 16 orang mahasiswa asing yang berasal dari Universiti Teknikal Malaysia Melaka (UTelM)",
    //         category: "Kemahasiswaan & Kerjasama",
    //         images: "/assets/berita/UTeiM.jpg"
    //     },
    //     {
    //         id: 2,
    //         title: "Registrasi Acara Pelepasan Alumni Fakultas Ilmu Komputer Universitas Sriwijaya ke-74",
    //         category: "Kemahasiswaan & Kerjasama",
    //         images: "/assets/logo/logo-unsri.png"
    //     },
    //     {
    //         id: 3,
    //         title: "Kunjungan Fakultas Ilmu Komputer Universitas Sriwijaya ke IPB University: Studi Banding SPMI dan Pengembangan Unit Usaha di PTNBH",
    //         category: "Kemahasiswaan & Kerjasama",
    //         images: "/assets/berita/kunjungan-IPB.png"
    //     },
    //     {
    //         id: 4,
    //         title: "[OPEN REGISTRATION] Pelatihan & Sertifikasi Internasional Python",
    //         category: "Kemahasiswaan & Kerjasama",
    //         images: "/assets/berita/training-python.png"
    //     },
    // ]

    const [newsInfo, setNewsInfo] = useState([]);

    useEffect(() => {
        getBeritaBaru().then(setNewsInfo);
    }, []);

    return(
        <section id="newsInfo" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-stretch gap-14">
            {newsInfo.map((news, index) => {
                console.log(news);
                return (
                    <NewsInfoCard 
                        key={index}
                        cover={news.images}
                        title={news.title}
                        category={news.description}
                    />
                );
            })}

            {/* {dummyNewsInfo.map((news) => (
                <NewsInfoCard
                    key={news.id}
                    title={news.title}
                    category={news.category}
                    cover={news.images}
                />
            ))} */}
        </section>
    );
}

export default ListNewsInfo;