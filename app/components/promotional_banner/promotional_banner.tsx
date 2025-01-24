export default function PromoCard() {
    return (
        <div className="max-w-6xl
            mx-auto
            p-8
            border-dotted border-4 border-gray-600
            rounded-lg">
            {/* Header */}
            <div className="text-center mb-6 font-semibold">
                <h1 className="text-xl font-bold mb-2">
                    <span className="text-red-500">MITSUBISHI PHẠM VĂN ĐỒNG</span>
                    {" - "}
                    <span className="text-blue-500">CHIẾT KHẤU TIỀN MẶT CỰC HẤP DẪN (GỌI NGAY !)</span>
                </h1>
                <p className="text-gray-700 italic">Đại lý phân phối Mitsubishi chính hãng tại Mitsubishi Phạm Văn
                    Đồng</p>
            </div>

            {/* Promo List */}
            <div className="space-y-4 font-semibold">
                {/* Item 1 */}
                <div className="flex gap-3">
                    <div
                        className="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center">
                        1
                    </div>
                    <p className="flex-1 font-semibold">
                        Khách hàng sở hữu dòng xe <span className="font-semibold">All-New Triton</span> sẽ nhận
                        được{" "}
                        <span className="text-red-500">
              ưu đãi tương đương 50% lệ phí trước bạ, cùng quà tặng trị giá 10 triệu đồng
            </span>{" "}
                        cho tất cả các phiên bản.
                    </p>
                </div>

                {/* Item 2 */}
                <div className="flex gap-3">
                    <div
                        className="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center">
                        2
                    </div>
                    <p className="flex-1">
                        <span className="text-red-500">Phiếu nhiên liệu trị giá 25 triệu đồng</span> sẽ được dành tặng
                        cho khách
                        hàng sở hữu <span className="font-semibold">All-New XFORCE</span> phiên bản{" "}
                        <span className="font-semibold">Premium</span> và <span
                        className="font-semibold">Exceed</span>.{" "}
                        <span className="text-red-500">Phiếu nhiên liệu trị giá 15 triệu đồng</span> sẽ được dành tặng
                        cho phiên bản{" "}
                        <span className="font-semibold">Ultimate</span> – 1 tone màu và phiếu nhiên liệu trị giá 10
                        triệu đồng dành
                        cho phiên bản Ultimate – 2 tone màu.
                    </p>
                </div>

                {/* Item 3 */}
                <div className="flex gap-3">
                    <div
                        className="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center">
                        3
                    </div>
                    <p className="flex-1">
                        Với dòng xe <span className="font-semibold">Xpander</span> và{" "}
                        <span className="font-semibold">Xpander Cross</span>, khách hàng sẽ nhận{" "}
                        <span className="text-red-500">
              ưu đãi tương đương 50% lệ phí trước bạ, phiếu nhiên liệu trị giá lên đến 21 triệu đồng cùng 01 camera toàn
              cảnh 360
            </span>{" "}
                        hoặc <span className="text-red-500">01 camera lùi</span> (tùy theo phiên bản).
                    </p>
                </div>

                {/* Item 4 */}
                <div className="flex gap-3">
                    <div
                        className="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center">
                        4
                    </div>
                    <p className="flex-1">
                        Mẫu xe <span className="font-semibold">Attrage</span> được{" "}
                        <span className="text-red-500">ưu đãi tương đương 50% lệ phí trước bạ</span> dành cho phiên
                        bản{" "}
                        <span className="font-semibold">CVT Premium</span> và <span
                        className="font-semibold">CVT</span>,{" "}
                        <span className="text-red-500">phiếu nhiên liệu trị giá lên đến 20 triệu đồng</span> cùng{" "}
                        <span className="text-red-500">01 camera lùi hoặc quà tặng phụ kiện</span> (tùy theo phiên bản).
                    </p>
                </div>

                {/* Item 5 */}
                <div className="flex gap-3">
                    <div
                        className="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center">
                        5
                    </div>
                    <p className="flex-1">
                        Khách hàng khi mua xe <span className="font-semibold">Outlander</span> phiên bản{" "}
                        <span className="font-semibold">CVT</span> sẽ nhận được{" "}
                        <span className="text-red-500">
              ưu đãi tương đương 50% lệ phí trước bạ, phiếu nhiên liệu trị giá 10 triệu đồng
            </span>{" "}
                        và <span className="text-red-500">01 camera toàn cảnh 360</span>.
                    </p>
                </div>
            </div>

            {/* Footer Note */}
            <p className="mt-6 text-sm text-blue-500 italic">
                (*) Ưu đãi và quà tặng được áp dụng tùy theo phiên bản của từng dòng xe và có số lượng giới hạn, để biết
                thêm
                chi tiết về điều kiện và điều khoản chương trình, quý khách hàng vui lòng liên hệ với Nhà Phân Phối ủy
                quyền gần
                nhất của Mitsubishi Motors Việt Nam.
            </p>

            {/* CTA */}
            <div className="mt-6 flex items-center gap-4 bg-gray-400 p-3 rounded-lg border-l-4 border-red-500 font-semibold">
                <span className="text-yellow-500 text-2xl">💡</span>
                <a href="#" className="text-black hover:underline font-bold text--2xl">
                    Xem chi tiết: Bảng giá xe Mitsubishi 2024 tại Mitsubishi Phạm Văn Đồng
                </a>
            </div>

        </div>
    )
}

