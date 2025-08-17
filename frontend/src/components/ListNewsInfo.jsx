import { useEffect, useState } from "react";
import NewsInfoCard from "./NewsInfoCard";
import { getBeritaBaru } from "../service/api";

const ListNewsInfo = () => {

    const [newsInfo, setNewsInfo] = useState([]);

    useEffect(() => {
        getBeritaBaru().then(setNewsInfo);
    }, []);

    return(
        <section id="newsInfo" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-stretch gap-14">
            {newsInfo.map((news, index) => {
                console.log(news);
                return (
                    <NewsInfoCard 
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

export default ListNewsInfo;