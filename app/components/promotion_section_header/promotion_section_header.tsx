import type React from "react"
import { DollarSign, Calendar, Car } from "lucide-react"

const MitsubishiDealerHeader = () => {
    return (
        <div className="container mx-auto px-2 py-8">
            {/* Main Title Section */}
            <div className="text-center mb-8">
                <h1 className="text-red-600 text-3xl md:text-3xl font-bold mb-4">ĐẠI LÝ MITSUBISHI PHẠM VĂN ĐỒNG</h1>
                <h2 className="text-lg md:text-xl font-semibold">CHÚNG TÔI LUÔN GIỮ VỮNG NHỮNG CAM KẾT VỚI QUÝ KHÁCH HÀNG</h2>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
                <ActionButton icon={<DollarSign className="w-8 h-8" />} text="Yêu cầu báo giá" />
                <ActionButton icon={<Calendar className="w-8 h-8" />} text="Thủ tục trả góp" />
                <ActionButton icon={<Car className="w-8 h-8" />} text="Đăng ký lái thử" />
            </div>
        </div>
    )
}

// Action Button Component
interface ActionButtonProps {
    icon: React.ReactNode
    text: string
}

const ActionButton: React.FC<ActionButtonProps> = ({ icon, text }) => {
    return (
        <button className="group flex items-stretch transition-all duration-300 hover:opacity-90 rounded-lg overflow-hidden shadow-lg hover:shadow-xl hover:scale-105">
            <div className="bg-red-600 p-4 flex items-center justify-center">
                <div className="text-white">{icon}</div>
            </div>
            <div className="bg-[#2a2a2a] flex-1 p-4">
                <span className="text-white text-lg font-medium">{text}</span>
            </div>
        </button>
    )
}

export default MitsubishiDealerHeader