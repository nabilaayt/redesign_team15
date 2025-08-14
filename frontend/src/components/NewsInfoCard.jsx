import { FaArrowRightLong } from "react-icons/fa6";

const NewsInfoCard = ({ cover, category, title }) => {
    return(
        <div className="flex flex-col h-full cursor-pointer">
            <div className="overflow-hidden mb-4">
                <img 
                    src={cover} 
                    alt={title} 
                    className="w-full h-68 object-cover transform transition-transform duration-500 ease-in-out hover:scale-110" />
            </div>
            <div className="flex flex-col gap-3">
                <p className="text-base text-gray-500">{category}</p>
                <h2 className="text-xl text-gray-950 font-medium break-words">{title}</h2>
            </div>
            <div className="flex flex-row mt-4 gap-4 items-center">
                <a href="#" className="text-amber-400">Read More</a>
                <FaArrowRightLong className="text-amber-400" size={24} />
            </div>
        </div> 
    );
}

export default NewsInfoCard;