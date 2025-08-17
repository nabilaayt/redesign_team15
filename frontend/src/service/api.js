// Berita Baru
export const getBeritaBaru = async () => {
    const res = await fetch("http://127.0.0.1:8080/api/berita?limit=4&is_priority=true");
    const data = await res.json();

    return data.berita.map((item) => ({
        title: item.judul,
        description: item.tema,
        tanggal: new Date(item.posted_at).toLocaleDateString("id-ID", {
            year: "numeric",
            month: "short",
            day: "numeric",
        }),
        imageUrl: item.cover,
    }));
}


// Berita Mahasiswa
export const getBeritaMhs = async () => {
    const res = await fetch("http://127.0.0.1:8080/api/beritaMahasiswa?limit=4&is_priority=true");
    const data = await res.json();

    return data.berita.map((item) => ({
        title: item.judul,
        description: item.tema,
        tanggal: new Date(item.posted_at).toLocaleDateString("id-ID", {
            year: "numeric",
            month: "short",
            day: "numeric",
        }),
        imageUrl: item.cover,
    }));
}

// File
// export const file = async () => {
//     const res = await fetch("http://127.0.0.1:8080/api/file?limit=2&is_priority=true");
//     const data = await res.json();

//     return data.files.map((item) => ({
//         title: item.nama_file,
//         description: item.keterangan,
//         tanggal: new Date(item.uploaded_at).toLocaleDateString("id-ID", {
//             year: "numeric",
//             month: "short",
//             day: "numeric",
//         }),
//         fileUrl: item.url,
//     }));
// }