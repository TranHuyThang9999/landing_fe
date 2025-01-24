"use client";

import { Image } from "antd";

interface ProductCardProps {
    image: string;
    name: string;
    price: string;
    specs: string[];
}

const ProductCard = ({
                         image = "https://drive.gianhangvn.com/image/image-2688858j31472.jpg",
                         name = "New ATTR AGE 2022",
                         price = "500.000.000 VND",
                         specs = ["7 chỗ ngồi", "Số sàn 5 cấp", "Động cơ xăng dung tích 1.499 cm3"],
                     }: ProductCardProps) => {
    return (
        <div className="card-container w-56 sm:w-64 md:w-72 h-auto overflow-hidden rounded-lg shadow-md bg-white
         dark:bg-gray-800 transition-transform duration-300 hover:scale-105
         border border-gray-200 dark:border-gray-700 flex flex-col">
            {/* Image Container */}
            <div className="image-container relative h-40 w-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center flex-shrink-0">
                <Image
                    src={image || "/placeholder.svg"}
                    alt={name}
                    className="object-cover p-3 w-full h-full"
                />
            </div>

            {/* Content */}
            <div className="content p-3 space-y-2 flex-grow">
                <h2 className="text-base font-bold text-center text-gray-800 dark:text-white">
                    {name}
                </h2>
                <div className="divider h-0.5 bg-red-600 w-full mx-auto" />
                <p className="text-sm font-semibold text-center text-gray-700 dark:text-gray-300">
                    Giá từ: {price}
                </p>
                <ul className="specs-list space-y-1">
                    {specs.map((spec, index) => (
                        <li
                            key={index}
                            className="flex items-start text-xs text-gray-600 dark:text-gray-400"
                        >
                            <span className="bullet mr-1">•</span>
                            {spec}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Button */}
            <div className="button-container px-3 pb-3 flex-shrink-0">
                <button className="w-full py-1.5 bg-blue-600 hover:bg-red-600 text-white font-semibold rounded-md transition-colors duration-200 text-sm">
                    TÌM HIỂU THÊM
                </button>
            </div>
        </div>
    );
};

export default ProductCard;