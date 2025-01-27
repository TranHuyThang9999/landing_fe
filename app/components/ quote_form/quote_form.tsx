"use client"

import type React from "react"
import { useState } from "react"
import { X } from "lucide-react"

interface QuoteFormProps {
    isOpen: boolean
    onClose: () => void
}

const QuoteForm: React.FC<QuoteFormProps> = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        carModel: "",
        paymentType: "installment", // trả góp
        name: "",
        phone: "",
    })

    const [errors, setErrors] = useState({
        carModel: false,
        name: false,
        phone: false,
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        // Basic validation
        const newErrors = {
            carModel: !formData.carModel,
            name: !formData.name,
            phone: !formData.phone,
        }

        setErrors(newErrors)

        if (!Object.values(newErrors).some((error) => error)) {
            // Handle form submission
            console.log("Form submitted:", formData)
            // Reset form
            setFormData({
                carModel: "",
                paymentType: "installment",
                name: "",
                phone: "",
            })
            onClose()
        }
    }

    if (!isOpen) return null

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg w-full max-w-xl relative">
                {/* Close Button */}
                <button onClick={onClose} className="absolute right-4 top-4 text-gray-500 hover:text-gray-700">
                    <X size={24} />
                </button>

                {/* Form Content */}
                <div className="p-6">
                    <h2 className="text-2xl font-bold text-blue-600 text-center mb-2">NHẬN BÁO GIÁ XE MITSUBISHI</h2>
                    <p className="text-center text-gray-600 mb-6">
                        Để nhận được "BÁO GIÁ ĐẶC BIỆT" và các "CHƯƠNG TRÌNH ƯU ĐÃI",
                        <br />
                        Quý khách vui lòng điền form báo giá dưới đây:
                    </p>

                    <form onSubmit={handleSubmit}>
                        {/* Car Model Selection */}
                        <div className="mb-4">
                            <label className="block mb-2">
                                Chọn Dòng Xe <span className="text-red-500">*</span>
                            </label>
                            <select
                                value={formData.carModel}
                                onChange={(e) => setFormData({...formData, carModel: e.target.value})}
                                className={`w-full p-2 border rounded ${errors.carModel ? "border-red-500" : "border-gray-300"}`}
                            >
                                <option value="">== Chọn dòng xe ==</option>
                                <option value="attrage">Mitsubishi Attrage</option>
                                <option value="xpander">Mitsubishi Xpander</option>
                                <option value="outlander">Mitsubishi Outlander</option>
                                <option value="pajero-sport">Mitsubishi Pajero Sport</option>
                                <option value="triton">Mitsubishi Triton</option>
                            </select>
                            {errors.carModel && <p className="text-red-500 text-sm mt-1">Vui lòng chọn dòng xe</p>}
                        </div>

                        {/* Payment Method */}
                        <div className="flex flex-col sm:flex-row sm:items-center mb-4">
                            {/* Label */}
                            <label className="mb-2 sm:mb-0 sm:mr-4 whitespace-nowrap">Hình thức thanh toán:</label>

                            {/* Radio Options */}
                            <div className="flex flex-col sm:flex-row sm:gap-4">
                                <label className="flex items-center whitespace-nowrap mb-2 sm:mb-0">
                                    <input
                                        type="radio"
                                        name="paymentType"
                                        value="installment"
                                        checked={formData.paymentType === "installment"}
                                        onChange={(e) => setFormData({...formData, paymentType: e.target.value})}
                                        className="mr-2"
                                    />
                                    Trả góp
                                </label>
                                <label className="flex items-center whitespace-nowrap">
                                    <input
                                        type="radio"
                                        name="paymentType"
                                        value="full"
                                        checked={formData.paymentType === "full"}
                                        onChange={(e) => setFormData({...formData, paymentType: e.target.value})}
                                        className="mr-2"
                                    />
                                    Trả hết
                                </label>
                            </div>
                        </div>
                        {/* Name Input */}

                        <div className="flex flex-col sm:flex-row mb-4 mt-6">
                            {/* Name Input */}
                            <div className="mb-4 w-full sm:mr-4">
                                <label className="block mb-2">
                                    Họ tên <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    value={formData.name}
                                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                                    placeholder="Họ tên"
                                    className={`w-full p-2 border rounded ${errors.name ? "border-red-500" : "border-gray-300"}`}
                                />
                                {errors.name && <p className="text-red-500 text-sm mt-1">Vui lòng nhập họ tên</p>}
                            </div>

                            {/* Phone Input */}
                            <div className="mb-6 w-full">
                                <label className="block mb-2">
                                    Điện thoại <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="tel"
                                    value={formData.phone}
                                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                                    placeholder="Điện thoại"
                                    className={`w-full p-2 border rounded ${errors.phone ? "border-red-500" : "border-gray-300"}`}
                                />
                                {errors.phone &&
                                    <p className="text-red-500 text-sm mt-1">Vui lòng nhập số điện thoại</p>}
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-4 rounded relative overflow-hidden transition-colors duration-200"
                        >
                            <span
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-shine"></span>
                            <span className="relative z-10">GỬI YÊU CẦU NGAY</span>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default QuoteForm

