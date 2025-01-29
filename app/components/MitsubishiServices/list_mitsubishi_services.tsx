import React from "react";
import { MitsubishiServicesProps } from "@/app/components/MitsubishiServices/mitsubishi_services";
import Mitsubishi_services from "@/app/components/MitsubishiServices/mitsubishi_services";

interface ListMitsubishiServicesProps {
    data: MitsubishiServicesProps[];
}

const ListMitsubishiServices: React.FC<ListMitsubishiServicesProps> = ({ data }) => {
    return (
        <div className="container px-2 sm:px-4 mx-auto">
            <ul className="flex flex-wrap gap-2 justify-center">
                {data.map((item, index) => (
                    <li key={index} className="w-56 sm:w-64 md:w-72">
                        <Mitsubishi_services
                            src={item.src}
                            title={item.title}
                            description={item.description}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListMitsubishiServices;