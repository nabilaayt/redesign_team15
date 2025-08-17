import { useEffect, useState } from "react";
import { getFile } from "../service/api";

const DownloadFile = () => {
    const [files, setFiles] = useState([]);

    useEffect(() => {
        const fetchFiles = async () => {
            const result = await getFile();
            setFiles(result);
        }
        fetchFiles();
    }, []);

    

    return(
    <div className="flex relative flex-col py-15 gap-4">
        <h2 className="text-gray-500">Download Document</h2>
            <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
                {files && files.length > 0 ? (
                files.map((file) => (
                    <a
                    key={file.ID}
                    href={file.fileUrl ?? "#"}
                    download
                    className="bg-amber-400 text-base whitespace-nowrap w-fit font-medium text-white hover:border hover:outline-amber-400 hover:outline-2 hover:bg-white hover:text-amber-400 px-5 py-3 rounded-full"
                    >
                    {file.nama_file || "SOP PPT Fasilkom"}
                    </a>
                ))
                ) : (
                <>
                    <a
                    href="#"
                    download
                    className="bg-amber-400 text-base whitespace-nowrap w-fit font-medium text-white hover:border hover:outline-amber-400 hover:outline-2 hover:bg-white hover:text-amber-400 px-5 py-3 rounded-full">
                    </a>
                    <a
                    href="#"
                    download
                    className="bg-white border whitespace-nowrap w-fit outline-amber-400 outline-2 text-base font-medium text-amber-400 hover:bg-amber-400 hover:text-white hover:outline-none px-5 py-3 rounded-full">
                    </a>
                </>
                )}
            </div>
        </div>
    )
}

export default DownloadFile;