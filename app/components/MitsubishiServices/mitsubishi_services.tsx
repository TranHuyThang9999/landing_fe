import React from "react";

export interface MitsubishiServicesProps {
    src: string;
    title: string;
    description: string;
}

const Mitsubishi_services: React.FC<MitsubishiServicesProps> = ({ src, title, description }) => {
    return (
        <div>
            <div className="card-container w-56 sm:w-64 md:w-72 h-auto overflow-hidden rounded-lg shadow-md bg-white
         dark:bg-gray-800 transition-transform duration-300 hover:scale-105
         border border-gray-200 dark:border-gray-700 flex flex-col">
                <div className="flex justify-center overflow-hidden">
                    <img
                        className="object-cover h-40 scale-110 transition-all duration-300 transform hover:scale-110"
                        src={src}
                        alt={title}
                    />
                </div>
                <div className="px-4 py-4">
                    <div className="font-bold text-center text-sm mb-2">
                        {title}
                    </div>
                    <hr className="border-t-2 mt-6 mb-3 border-red-700" />
                    <div className="flex items-center justify-center min-h-[110px]">
                        <p className="text-black  font-medium font-roboto text-justify max-w-sm leading-relaxed tracking-wide px-6">
                            {description}
                        </p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Mitsubishi_services;
