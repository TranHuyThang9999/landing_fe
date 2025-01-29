'use client';
import React, { useEffect, useState } from "react";
import QuoteForm from "@/app/components/ quote_form/quote_form";

interface AutoOpenModalProps {
    onClose: () => void;
}

const AutoOpenModal: React.FC<AutoOpenModalProps> = ({ onClose }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false); // State để kiểm soát hiển thị modal
    const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null); // Lưu timeout ID để clear nếu cần

    useEffect(() => {
        const handleUserActivity = () => {
            // Xóa event listeners sau khi đã phát hiện hoạt động
            window.removeEventListener("mousemove", handleUserActivity);
            window.removeEventListener("click", handleUserActivity);

            // Random thời gian từ 6 đến 8 giây (6000ms đến 8000ms)
            const randomDelay = Math.floor(Math.random() * (180000 - 60000 + 1)) + 60000;

            // Đặt timeout để mở modal
            const timer = setTimeout(() => {
                setIsOpen(true); // Hiện modal
            }, randomDelay);

            setTimeoutId(timer); // Lưu timeout ID để clear nếu cần
        };

        // Gắn event listeners cho hoạt động người dùng
        window.addEventListener("mousemove", handleUserActivity);
        window.addEventListener("click", handleUserActivity);

        return () => {
            // Clear event listeners và timeout khi component bị unmount
            window.removeEventListener("mousemove", handleUserActivity);
            window.removeEventListener("click", handleUserActivity);
            if (timeoutId) clearTimeout(timeoutId);
        };
    }, [timeoutId]);

    const handleClose = () => {
        setIsOpen(false); // Ẩn modal
        onClose(); // Gọi hàm onClose từ prop
    };

    if (!isOpen) return null; // Không hiển thị modal nếu chưa mở

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg relative">
                <button
                    onClick={handleClose}
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                >
                    &times;
                </button>
                <QuoteForm isOpen={isOpen} onClose={handleClose} />
            </div>
        </div>
    );
};

export default AutoOpenModal;