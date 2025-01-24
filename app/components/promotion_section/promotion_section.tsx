import React from 'react';

const PromotionSection: React.FC = () => {
    return (
        <div className="bg-gray-100 p-6 rounded-lg mb-8">
            {/* Tiêu đề khuyến mãi */}
            <h2 className="text-2xl font-bold text-red-600 mb-4">
                MITSUBISHI PHẠM VĂN ĐỒNG - CHIẾT KHẤU TIỀN MẶT CỰC HẤP DẪN (GỌI NGAY !)
            </h2>

            {/* Mô tả */}
            <p className="text-gray-700 mb-4 italic">
                <em>Đại lý phân phối Mitsubishi chính hãng tại Mitsubishi Phạm Văn Đồng</em>
            </p>

            {/* Danh sách ưu đãi */}
            <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>
                    Khách hàng sở hữu dòng xe All-New Triton sẽ nhận được ưu đãi tương đương 50% lệ phí trước bạ, cùng quà tặng trị giá 10 triệu đồng cho tất cả các phiên bản.
                </li>
                <li>
                    Phiếu nhiên liệu trị giá 25 triệu đồng sẽ được dành tặng cho khách hàng sở hữu All-New XFORCE phiên bản Premium và Exceed. Phiếu nhiên liệu trị giá 15 triệu đồng sẽ được dành tặng cho phiên bản Ultimate – 1 tone màu và phiếu nhiên liệu trị giá 10 triệu đồng dành cho phiên bản Ultimate – 2 tone màu.
                </li>
                <li>
                    Với dòng xe Xpander và Xpander Cross, khách hàng sẽ nhận ưu đãi tương đương 50% lệ phí trước bạ, phiếu nhiên liệu trị giá lên đến 21 triệu đồng cùng 01 camera toàn cảnh 360 hoặc 01 camera lùi (tùy theo phiên bản).
                </li>
                <li>
                    Mẫu xe Attrage được ưu đãi tương đương 50% lệ phí trước bạ dành cho phiên bản CVT Premium và CVT, phiếu nhiên liệu trị giá lên đến 20 triệu đồng cùng 01 camera lùi hoặc quà tặng phụ kiện (tùy theo phiên bản).
                </li>
                <li>
                    Khách hàng khi mua xe Outlander phiên bản CVT sẽ nhận được ưu đãi tương đương 50% lệ phí trước bạ, phiếu nhiên liệu trị giá 10 triệu đồng và 01 camera toàn cảnh 360.
                </li>
            </ul>

            {/* Lưu ý */}
            <p className="text-gray-700 mt-4 italic">
                <em>
                    (*) Ưu đãi và quà tặng được áp dụng tùy theo phiên bản của từng dòng xe và có số lượng giới hạn. Để biết thêm chi tiết về điều kiện và điều khoản chương trình, quý khách hàng vui lòng liên hệ với Nhà Phân Phối ủy quyền gần nhất của Mitsubishi Motors Việt Nam.
                </em>
            </p>

            {/* Liên kết xem chi tiết */}
            <div className="text-center mt-6">
                <a href="#" className="text-red-600 font-semibold hover:underline">
                    Xem chi tiết: Bảng giá xe Mitsubishi 2024 tại Mitsubishi Phạm Văn Đồng
                </a>
            </div>
        </div>
    );
};

export default PromotionSection;