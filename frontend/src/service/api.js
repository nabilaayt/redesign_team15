// Berita Baru
export const getBeritaBaru = async () => {
    const res = await fetch("http://127.0.0.1:8080/api/berita?limit=4");
    const data = await res.json();

    return data.berita.map((item) => ({
        title: item.judul,
        description: item.tema,
        tanggal: new Date(item.posted_at).toLocaleDateString("id-ID", {
            year: "numeric",
            month: "short",
            day: "numeric",
        }),
        imageUrl: item.cover.startsWith("http")
            ? item.cover
            : `http://127.0.0.1:8080/assets/${item.cover}`,
    }));
}


// Berita Mahasiswa
export const getBeritaMhs = async () => {
    const res = await fetch("http://127.0.0.1:8080/api/beritaMahasiswa?limit=4");
    const data = await res.json();

    return data.berita.map((item) => ({
        title: item.judul,
        description: item.tema,
        tanggal: new Date(item.posted_at).toLocaleDateString("id-ID", {
            year: "numeric",
            month: "short",
            day: "numeric",
        }),
        imageUrl: item.cover.startsWith("http")
            ? item.cover
            : `http://127.0.0.1:8080/assets/${item.cover}`,
    }));
}

// File
// export const getFile = async () => {
//     try {
//         const res = await fetch("http://127.0.0.1:8080/api/file?limit=2&is_priority=true");
//         const data = await res.json();
//         console.log("API FILE RESPONSE:", data); 

//         return data.file || [];
//     } catch (error) {
//         console.error("Error fetching file:", error);
//         return [];
//     }

//     // const res = await fetch("http://127.0.0.1:8080/api/file?limit=2&is_priority=true");
//     // const data = await res.json();

//     // console.log("API FILE RESPONSE:", data); //

//     // return data.files.map((item) => ({
//     //     title: item.nama_file,
//     //     description: item.keterangan,
//     //     tanggal: new Date(item.uploaded_at).toLocaleDateString("id-ID", {
//     //         year: "numeric",
//     //         month: "short",
//     //         day: "numeric",
//     //     }),
//     //     fileUrl: `http://127.0.0.1:8080/assets/files/${item.url}`,
//     // }));
// }

export const getFile = async () => {
    try {
        const res = await fetch("http://127.0.0.1:8080/api/file?limit=2&is_priority=true");
        const data = await res.json();
        console.log("API FILE RESPONSE:", data);
        
        return data.file.map((item) => ({
            ID: item.ID,
            nama_file: item.nama_file,
            keterangan: item.keterangan,
            fileUrl: `http://127.0.0.1:8080/assets/files/${item.url}`,
            uploaded_at: item.uploaded_at
        }));
    } catch (error) {
        console.error("Error fetching file:", error);
        return [];
    }
};