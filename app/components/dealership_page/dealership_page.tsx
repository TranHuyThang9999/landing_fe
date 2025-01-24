import React from "react";
import { Image } from "antd";
import {TiStarOutline} from "react-icons/ti";

const MitsubishiSales = () => {
    return (
        <div className="bg-gray-100 flex items-center justify-center">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] w-full max-w-6xl">
                {/* Left column */}
                <div className="flex flex-col items-center bg-white">
                    <Image
                        src="https://drive.gianhangvn.com/image/xf-backk-2688838j31472.jpg"
                        alt="Mitsubishi"
                        className="w-full h-auto"
                    />
                    <div className="p-4">
                        <p className="text-center text-2xl md:text-xl sm:text-lg font-bold text-gray-900">
                            MITSUBISHI PHẠM VĂN ĐỒNG
                        </p>

                        <p className="text-lg font-semibold text-white bg-red-600 flex justify-center items-center h-12 border border-white rounded-lg">
                            <span className="hidden md:inline">Gọi ngay:</span>
                            <a href="tel:0929924078" className="md:hidden">092.992.4078</a>
                            <span className="md:inline hidden">092.992.4078</span>
                        </p>

                    </div>
                </div>
                {/* Right column */}
                <div className="flex flex-col bg-white p-6">
                    <h1 className="text-2xl font-extrabold text-gray-900">
                        PHÒNG KINH DOANH MITSUBISHI PHẠM VĂN ĐỒNG
                    </h1>
                    <p className="text-lg  mb-4">
                        😀 Phụ Trách Kinh Doanh: Mr. Thanh Tùng
                    </p>

                    <p className="text-lg font-bold text-red-700 mb-6">
                        <span className="text-black">
                            ☎ Hotline + Zalo:
                        </span>
                        <a href="tel:0929924078" className="hover:text-red-900">092.992.4078</a>
                        <span className="text-black">(24/7)</span>
                        <a href="https://zalo.me/0929924078" target="_blank" rel="noopener noreferrer"
                           className="ml-2 hover:text-red-900 hidden md:inline">
                            (Chat Zalo)
                        </a>
                    </p>

                    <hr className="ml-2 border-t-2 border-gray-600 pb-3"/>

                    <ul className="space-y-6">
                        <li>

                            <h2 className="flex text-xl font-semibold text-gray-900 items-center">
                                <div className="flex items-center">
                                    <TiStarOutline
                                        className="w-4 h-4 bg-black text-white shadow-[inset_0_0_0_2px_#000000] rounded-full transition-shadow duration-200"/>
                                    <span className="ml-2">GIÁ XE TỐT NHẤT</span>
                                </div>
                            </h2>

                            <p className="text-gray-700 font-sans ">
                                Chúng tôi luôn cam kết mang lại mức giá tốt nhất thị trường cho quý khách, cùng với sự
                                tư vấn tận tâm,
                                chuyên nghiệp nhất.
                            </p>
                        </li>
                        <li>

                            <h2 className="text-xl font-bold text-gray-900">
                                <div className="flex items-center">
                                    <TiStarOutline
                                        className="w-4 h-4 bg-black text-white shadow-[inset_0_0_0_2px_#000000] rounded-full transition-shadow duration-200"/>
                                    <span className="ml-2">TƯ VẤN TẬN TÌNH</span>
                                </div>
                            </h2>

                            <p className="text-gray-700 font-semibold">
                                Với kinh nghiệm nhiều năm bán xe Mitsubishi, Chúng tôi tin sẽ giúp quý khách chọn được
                                chiếc xe ưng ý và
                                phù hợp nhất cho bản thân và gia đình.
                            </p>
                        </li>
                        <li>
                            <h2 className="text-xl font-bold text-gray-900">
                                <div className="flex items-center">
                                    <TiStarOutline
                                        className="w-4 h-4 bg-black text-white shadow-[inset_0_0_0_2px_#000000] rounded-full transition-shadow duration-200"/>
                                    <span className="ml-2">HỖ TRỢ TRẢ GÓP</span>
                                </div>
                            </h2>
                            <p className="text-gray-700 font-semibold">
                                Hỗ trợ vay vốn ngân hàng lên đến 80% giá trị xe, lãi suất ưu đãi, thủ tục nhanh chóng,
                                đơn giản.
                            </p>
                        </li>
                        <li>
                            <h2 className="text-xl font-bold text-gray-900">
                                <div className="flex items-center">
                                    <TiStarOutline
                                        className="w-4 h-4 bg-black text-white shadow-[inset_0_0_0_2px_#000000] rounded-full transition-shadow duration-200"/>
                                    <span className="ml-2">BẢO HÀNH 3 NĂM</span>
                                </div>
                            </h2>
                            <p className="text-gray-700 font-semibold">
                                Chiếc xe Mitsubishi của Quý Khách sẽ được bảo hành 3 năm hoặc 100.000km cùng những dịch
                                vụ chăm sóc khách
                                hàng tốt nhất.
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default MitsubishiSales;