// flex flex-wrap gap-2 justify-center
//"max-w-6xl
//             mx-auto
//             p-8
//             border-dotted border-4 border-gray-600
//             rounded-lg
export default function ProductPages() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Breadcrumb */}
            <div className="max-w-7xl mx-auto px-4 py-2"> {/* Sửa px-90 thành px-4 */}
                <div className="flex items-center gap-2 text-gray-600 text-sm">
                    <a href="/" className="hover:text-red-600">
                        Trang chủ
                    </a>
                    <span>/</span>
                    <span className="text-gray-900">Sản phẩm</span>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 py-6"> {/* Thay container bằng max-w-7xl */}
                <div className="flex flex-col md:flex-row gap-6">
                    {/* Sidebar */}
                    <div className="w-full md:w-72">
                        {/* Categories */}
                        <div className="mb-6">
                            <h2 className="bg-red-600 text-white p-3 font-medium">DANH MỤC SẢN PHẨM</h2>
                            <ul className="bg-white border border-gray-200">
                                <li className="border-b border-gray-200">
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-50">
                                        Mitsubishi Attrage
                                    </a>
                                </li>
                                <li className="border-b border-gray-200">
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-50">
                                        Mitsubishi Outlander
                                    </a>
                                </li>
                                <li className="border-b border-gray-200">
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-50">
                                        Mitsubishi Pajero Sport
                                    </a>
                                </li>
                                <li className="border-b border-gray-200">
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-50">
                                        Mitsubishi Xpander
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-50">
                                        Mitsubishi Triton
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Online Support */}
                        <div className="mb-6">
                            <h2 className="bg-red-600 text-white p-3 font-medium">HỖ TRỢ TRỰC TUYẾN</h2>
                            <div className="bg-white border border-gray-200 p-4">
                                <div className="flex flex-col items-center mb-4">
                                    <img src="https://drive.gianhangvn.com/image/telesale-1965409j31472.jpg"
                                         alt="Support" className="w-24 h-24 rounded-full mb-2" />
                                    <p className="text-sm font-medium">Phụ trách kinh doanh - 092.992.4078</p>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-2 p-2 border rounded">
                                        <img src="https://drive.gianhangvn.com/image/zalo-1965410j31472.jpg" alt="Zalo" className="w-8 h-8" />
                                        <span className="text-sm">Chat Zalo - 092.992.4078</span>
                                    </div>
                                    <div className="flex items-center gap-2 p-2 border rounded">
                                        <img src="https://drive.gianhangvn.com/image/email-1965408j31472.jpg" alt="Email" className="w-8 h-8" />
                                        <span className="text-sm break-words">Mail báo giá - mitsubishi3hanoi.mmv@gmail.com</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Featured Products */}
                        <div>
                            <h2 className="bg-red-600 text-white p-3 font-medium">SẢN PHẨM NỔI BẬT</h2>
                            <div className="bg-white border border-gray-200 p-4">{/* Featured products content */}</div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="flex-1">
                        <div className="bg-white border border-gray-200 p-4 mb-6">
                            <h1 className="text-xl font-bold text-red-600 mb-4">SẢN PHẨM</h1>

                            {/* Filters */}
                            <div className="flex flex-wrap items-center gap-4 mb-4">
                                <div className="flex items-center gap-2">
                                    <span className="text-sm">Sắp xếp theo</span>
                                    <select className="border rounded px-2 py-1">
                                        <option>Mặc định</option>
                                    </select>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-sm">Hiển thị</span>
                                    <select className="border rounded px-2 py-1 w-20">
                                        <option>36</option>
                                    </select>
                                    <span className="text-sm">mỗi trang</span>
                                </div>
                                <div className="flex items-center gap-2 ml-auto">
                                    <button className="p-2 border rounded hover:bg-gray-50">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                        </svg>
                                    </button>
                                    <button className="p-2 border rounded hover:bg-gray-50">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M4 6h16M4 10h16M4 14h16M4 18h16"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            {/* Products Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {/* Product Card */}
                                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">

                                    <div className="p-4">
                                        <h3 className="font-medium text-lg mb-2">Mitsubishi Xforce Ultimate</h3>
                                        <p className="text-red-600 font-bold mb-3">705,000,000 VND</p>
                                        <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded">
                                            Nhận giá khuyến mãi
                                        </button>
                                    </div>
                                </div>

                                {/* Repeat Product Cards as needed */}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

