import { motion } from "motion/react";

const ListOrganization = () => {
    const listOrganization = [
        "/assets/logo/logo-dpm.png",
        "/assets/logo/logo-bem.png",
        "/assets/logo/logo-hmif.png",
        "/assets/logo/logo-himsi.png",
        "/assets/logo/logo-himasisko.png",
        "/assets/logo/logo-himdiko.png",
        "/assets/logo/logo-wifi.png",
        "/assets/logo/logo-fasco.png",
        "/assets/logo/logo-intel.png",
        "/assets/logo/logo-nac.png",
        "/assets/logo/logo-isport.png"
    ];

    return(
        <div className="container mx-auto">
            <motion.div 
                initial={{ x: 0 }} 
                animate={{ x: "-50%" }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                style={{ width: "200%" }}
                className="flex flex-shrink-0"
            >
                {listOrganization.map((image, index) => {
                    return <img 
                            src={image} 
                            key={`original-${index}`}
                            className="h-40 w-56 pr-10"
                            />;
                })}
                {listOrganization.map((image, index) => {
                    return <img 
                            src={image} 
                            key={`duplicate-${index}`}
                            className="h-40 w-56 pr-10"
                            />;
                })}
            </motion.div>
        </div>
    );
};

export default ListOrganization;