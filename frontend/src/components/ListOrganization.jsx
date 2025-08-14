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
            <div className="flex flex-row">
                {listOrganization.map((image, index) => {
                    return <img 
                            src={image} 
                            key={index}
                            className="h-40 w-56 pr-10"
                            
                            />;
                })}
            </div>
        </div>
    );
};

export default ListOrganization;