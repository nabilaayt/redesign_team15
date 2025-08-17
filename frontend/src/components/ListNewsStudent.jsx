import { useEffect, useState } from "react";
import StudentCard from "./StudentCard";
import { getBeritaMhs } from "../service/api";

const ListNewsStudent = () => {

    const [newsMhs, setNewsMhs] = useState([]);
    
    useEffect(() => {
        getBeritaMhs().then(setNewsMhs);
    }, []);

    return(
        <section id="newsStudents" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-stretch gap-14">
            {newsMhs.map((news, index) => {
                console.log(news);
                return (
                    <StudentCard 
                        key={index}
                        cover={news.imageUrl}
                        title={news.title}
                        category={news.description}
                    />
                );
            })}
        </section>
    );
}

export default ListNewsStudent;