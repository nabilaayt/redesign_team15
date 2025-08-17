import { useEffect, useState } from "react";
import StudentCard from "./StudentCard";
import { getBeritaMhs } from "../service/api";

const ListNewsStudent = () => {
    // const dummyNewsStudents = [
    //     {
    //         id: 1,
    //         title: "PENGUMUMAN! PENGISIAN KRS SEMESTER GANJIL 2025/2026",
    //         category: "News Information",
    //         images: "/assets/berita/pengisian-krs.jpeg"
    //     },
    //     {
    //         id: 2,
    //         title: "Universitas Sriwijaya Sambut 8 Mahasiswa Mobility Program dari Universiti Teknikal Malaysia Melaka",
    //         category: "Kemahasiswaan & Kerjasama",
    //         images: "/assets/berita/mobility-program.jpeg"
    //     },
    //     {
    //         id: 3,
    //         title: "Dies Natalis ke-19 Fasilkom Unsri di Highland Resort, Bogor, Jawa Barat tanggal 28 Juli 2025 hingga 1 Agustus 2025",
    //         category: "News Information",
    //         images: "/assets/berita/dies-natalis.jpg"
    //     },
    //     {
    //         id: 4,
    //         title: "Pengumuman Pelaksanaan Wisuda Ke-179 Universitas Sriwijaya",
    //         category: "News Information",
    //         images: "/assets/berita/wisuda-179.png"
    //     },
    // ]

    const [newsMhs, setNewsMhs] = useState([]);
    
    useEffect(() => {
        getBeritaMhs().then(setNewsMhs);
    }, []);

    return(
        <section id="newsStudents" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-stretch gap-14">
            {newsMhs.map((news, index) => {
                console.log(news);
                return (
                    <StudentCard 
                        key={index}
                        cover={news.images}
                        title={news.title}
                        category={news.description}
                    />
                );
            })}

            {/* {dummyNewsStudents.map((news) => (
                <StudentCard
                    key={news.id}
                    title={news.title}
                    category={news.category}
                    cover={news.images}
                />
            ))} */}
        </section>
    );
}

export default ListNewsStudent;