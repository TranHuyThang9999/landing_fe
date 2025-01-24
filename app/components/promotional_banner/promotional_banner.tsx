'use client'
import React from "react";
import {BiDollarCircle} from "react-icons/bi";
import {BsCalculator} from "react-icons/bs";
import {FaCar} from "react-icons/fa";

const PromotionalBanner: React.FC = () => {
    return (
        <div className="bg-gray-100 p-8">

            <div className="text-white p-4 sm:p-6 rounded-lg mb-1 text-center">

                <div className="w-full px-2.5">
                    <div className="text-center">
                        <div
                            className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 text-[#FF0000] leading-tight sm:leading-snug">
                            ĐẠI LÝ MITSUBISHI PHẠM VĂN ĐỒNG
                        </div>

                        <p className="text-base sm:text-lg md:text-xl text-black font-bold mb-4 leading-relaxed sm:leading-loose">
                            CHÚNG TÔI LUÔN GIỮ VỮNG NHỮNG CAM KẾT VỚI QUÝ KHÁCH HÀNG
                        </p>
                    </div>
                </div>


            </div>
            <div className="flex justify-center space-x-4">

                <button
                    className="flex items-stretch overflow-hidden rounded-lg h-[70px] shadow-lg hover:shadow-xl transition-shadow hover:scale-105 max-[414px]:flex-col max-[414px]:h-auto max-[414px]:items-center">
                    <div
                        className="flex items-center justify-center bg-red-500 w-16 hover:bg-red-600 transition-colors duration-300 max-[414px]:w-full max-[414px]:py-2">
                    <div
                            className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center p-2">
                            <BiDollarCircle className="text-white text-3xl"/>
                        </div>
                    </div>

                    <div
                        className="flex items-center bg-black w-60 hover:bg-gray-900 transition-colors duration-300 max-[414px]:w-full max-[414px]:justify-center max-[414px]:py-2">
                        <span className="text-white px-4 font-semibold max-[414px]:text-sm">Yêu cầu báo giá</span>
                    </div>
                </button>

                <button
                    className="flex items-stretch overflow-hidden rounded-lg h-[70px] shadow-lg hover:shadow-xl transition-shadow hover:scale-105 max-[414px]:flex-col max-[414px]:h-auto max-[414px]:items-center">
                    <div
                        className="flex items-center justify-center bg-red-500 w-16 hover:bg-red-600 transition-colors duration-300 max-[414px]:w-full max-[414px]:py-2">
                        <div
                            className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center p-2">
                            <BsCalculator className="text-white text-3xl"/>
                        </div>
                    </div>

                    <div
                        className="flex items-center bg-black w-60 hover:bg-gray-900 transition-colors duration-300 max-[414px]:w-full max-[414px]:justify-center max-[414px]:py-2">
                        <span className="text-white px-4 font-semibold max-[414px]:text-sm">Thủ tục trả góp</span>
                    </div>
                </button>

                <button
                    className="flex items-stretch overflow-hidden rounded-lg h-[70px] shadow-lg hover:shadow-xl transition-shadow hover:scale-105 max-[414px]:flex-col max-[414px]:h-auto max-[414px]:items-center">
                    <div
                        className="flex items-center justify-center bg-red-500 w-16 hover:bg-red-600 transition-colors duration-300 max-[414px]:w-full max-[414px]:py-2">
                        <div
                            className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center p-2">
                            <FaCar className="text-white text-3xl"/>
                        </div>
                    </div>

                    <div
                        className="flex items-center bg-black w-60 hover:bg-gray-900 transition-colors duration-300 max-[414px]:w-full max-[414px]:justify-center max-[414px]:py-2">
                        <span className="text-white px-4 font-semibold max-[414px]:text-sm">Đăng ký lái thử</span>
                    </div>
                </button>
            </div>
        </div>
    );
};

export default PromotionalBanner;