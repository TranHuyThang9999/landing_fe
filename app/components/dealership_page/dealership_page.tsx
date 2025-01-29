"use client"

import React from "react"
import { Image } from "antd"
import { TiStarOutline } from "react-icons/ti"

const MitsubishiSales = () => {
    return (
        <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] w-full max-w-6xl">
                {/* Left column */}
                <div className="flex flex-col items-center bg-white pl-2">
                    <Image
                        src="https://drive.gianhangvn.com/image/xf-backk-2688838j31472.jpg"
                        alt="Mitsubishi"
                        className="w-full h-auto object-cover"
                    />
                    <div className="pt-4 px-4 flex-grow w-full space-y-4">
                        <p className="text-center text-2xl font-bold text-gray-900 tracking-wider">MITSUBISHI PHẠM VĂN ĐỒNG</p>

                        <div className="flex justify-center">
                            <p className="text-lg font-semibold text-white bg-red-600 flex justify-center items-center h-12 px-4">
                                <span className="hidden md:inline mr-2">Gọi ngay:</span>
                                <a href="tel:0929924078">092.992.4078</a>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right column */}
                <div className="flex flex-col bg-white space-y-2 pl-5">
                    <h1 className="text-2xl font-extrabold text-gray-900 border-gray-200">
                        PHÒNG KINH DOANH MITSUBISHI PHẠM VĂN ĐỒNG
                    </h1>

                    <div className="flex flex-col space-y-3">
                        <p className="text-lg text-gray-800 flex items-center">
                            <span className="mr-2">😀</span>
                            <span>Phụ Trách Kinh Doanh: Mr. Thanh Tùng</span>
                        </p>

                        <div className="flex items-center text-lg text-gray-800">
                            <span className="mr-2">☎ Hotline + Zalo:</span>
                            <a href="tel:0929924078" className="text-red-600 hover:text-red-800 font-semibold mr-2">
                                092.992.4078
                            </a>
                            <span className="text-gray-500 text-sm">(24/7)</span>
                        </div>
                    </div>

                    <hr className="border-t border-gray-800" />

                    <ul className="space-y-0">
                        {[
                            {
                                title: "GIÁ XE TỐT NHẤT",
                                description: "Cam kết mang lại mức giá tốt nhất thị trường, tư vấn tận tâm và chuyên nghiệp.",
                            },
                            {
                                title: "TƯ VẤN TẬN TÌNH",
                                description:
                                    "Với kinh nghiệm nhiều năm bán xe Mitsubishi, chúng tôi tin sẽ giúp quý khách chọn được chiếc xe ưng ý.",
                            },
                            {
                                title: "HỖ TRỢ TRẢ GÓP",
                                description: "Hỗ trợ vay vốn ngân hàng lên đến 80% giá trị xe, lãi suất ưu đãi, thủ tục nhanh chóng.",
                            },
                            {
                                title: "BẢO HÀNH 3 NĂM",
                                description: "Bảo hành 3 năm hoặc 100.000km cùng những dịch vụ chăm sóc khách hàng tốt nhất.",
                            },
                        ].map((item, index) => (
                            <li key={index} className="pb-4 border-b border-gray-200 last:border-b-0 last:pb-0">
                                <h2 className="flex items-center text-xl font-bold text-gray-900 mb-3">
                                    <TiStarOutline className="w-6 h-6 bg-black text-white rounded-full p-1 mr-3" />
                                    <span className="tracking-wide">{item.title}</span>
                                </h2>
                                <p className="text-gray-700 leading-relaxed pl-10">{item.description}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default MitsubishiSales

