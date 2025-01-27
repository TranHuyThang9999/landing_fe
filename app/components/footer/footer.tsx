'use client';
import {useState} from "react";
import type React from "react";
import {Phone, Mail, MapPin, Globe, CirclePlus, CircleMinus} from "lucide-react";

const Footer: React.FC = () => {
    const [openSections, setOpenSections] = useState({
        about: false,
        promotion: false,
        categories: false,
        contact: false
    });

    const toggleSection = (section: keyof typeof openSections) => {
        setOpenSections(prev => ({
            ...prev,
            [section]: !prev[section]
        }));
    };

    return (
        <footer className="bg-[#1a1a1a] text-white">
            <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-40">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Về Showroom Section */}
                    <div className="pl-4 md:pl-0">
                        <div className="flex items-start md:justify-start mb-4">
                            <h3 className="text-lg font-bold">VỀ SHOWROOM MITSUBISHI</h3>
                            <button
                                className="ml-2 md:hidden"
                                onClick={() => toggleSection('about')}
                            >
                                {openSections.about ? <CircleMinus size={20}/> : <CirclePlus size={20}/>}
                            </button>
                        </div>
                        <ul className={`space-y-2 ${!openSections.about && 'hidden md:block'}`}>
                            <li><a href="#" className="hover:text-red-500">Giới thiệu</a></li>
                            <li><a href="#" className="hover:text-red-500">Tin tức</a></li>
                            <li><a href="#" className="hover:text-red-500">Khuyến mãi</a></li>
                            <li><a href="#" className="hover:text-red-500">Đăng ký lái thử</a></li>
                        </ul>
                    </div>

                    {/* Khuyến Mãi Section */}
                    <div className="pl-4 md:pl-0">
                        <div className="flex items-start md:justify-start mb-4">
                            <h3 className="text-lg font-bold">KHUYẾN MÃI TRONG THÁNG</h3>
                            <button
                                className="ml-2 md:hidden"
                                onClick={() => toggleSection('promotion')}
                            >
                                {openSections.promotion ? <CircleMinus size={20}/> : <CirclePlus size={20}/>}
                            </button>
                        </div>
                        <ul className={`space-y-2 ${!openSections.promotion && 'hidden md:block'}`}>
                            <li><a href="#" className="hover:text-red-500">Bảng giá xe Mitsubishi 2024</a></li>
                        </ul>
                    </div>

                    {/* Danh Mục Chính Section */}
                    <div className="pl-4 md:pl-0">
                        <div className="flex items-start md:justify-start mb-4">
                            <h3 className="text-lg font-bold">DANH MỤC CHÍNH</h3>
                            <button
                                className="ml-2 md:hidden"
                                onClick={() => toggleSection('categories')}
                            >
                                {openSections.categories ? <CircleMinus size={20}/> : <CirclePlus size={20}/>}
                            </button>
                        </div>
                        <ul className={`space-y-2 ${!openSections.categories && 'hidden md:block'}`}>
                            <li><a href="#" className="hover:text-red-500">Mitsubishi Attrage</a></li>
                            <li><a href="#" className="hover:text-red-500">Mitsubishi Outlander</a></li>
                            <li><a href="#" className="hover:text-red-500">Mitsubishi Pajero Sport</a></li>
                            <li><a href="#" className="hover:text-red-500">Mitsubishi Triton</a></li>
                            <li><a href="#" className="hover:text-red-500">Mitsubishi Xpander</a></li>
                        </ul>
                    </div>

                    {/* Contact Section */}
                    <div className="border-l-0 md:border-l pl-4 md:pl-4">
                        <div className="flex items-start md:justify-start mb-4">
                            <h3 className="text-lg font-bold">MITSUBISHI PHẠM VĂN ĐỒNG</h3>
                            <button
                                className="ml-2 md:hidden"
                                onClick={() => toggleSection('contact')}
                            >
                                {openSections.contact ? <CircleMinus size={20}/> : <CirclePlus size={20}/>}
                            </button>
                        </div>
                        <ul className={`space-y-3 ${!openSections.contact && 'hidden md:block'}`}>
                            <li className="flex items-center gap-2">
                                <Phone size={18}/>
                                <a href="tel:092.992.4078" className="hover:text-red-500">092.992.4078 Mr.Thanh Tùng</a>
                            </li>
                            <li className="flex items-center gap-2">
                                <Mail size={18}/>
                                <a href="mailto:mitsubishi3hanoi.mmv@gmail.com" className="hover:text-red-500">
                                    <span
                                        className="overflow-hidden text-ellipsis whitespace-nowrap">mitsubishi3hanoi.mmv</span>
                                    <span className="hidden lg:inline">@gmail.com</span>
                                </a>

                            </li>
                            <li className="flex items-center gap-2">
                                <MapPin size={18}/>
                                <span>Số 26 Phạm Văn Đồng - Bắc Từ Liêm - Hà Nội</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Globe size={18}/>
                                <a href="http://www.mitsubishiphamvandong.net" className="hover:text-red-500">
                                   <span
                                       className="overflow-hidden text-ellipsis whitespace-nowrap block max-w-[150px]">
                                        mitsubishiphamvandong
                                    </span>
                                </a>

                            </li>
                        </ul>

                        {/* Social Media Links */}
                        <div className={`mt-6 ${!openSections.contact && 'hidden md:block'}`}>
                            <h4 className="text-lg font-bold mb-3">KẾT NỐI VỚI CHÚNG TÔI</h4>
                            <div className="flex gap-4">
                                {/* Social media icons remain unchanged */}
                                <a href="#" className="hover:text-red-500">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path
                                            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                                    </svg>
                                </a>
                                <a href="#" className="hover:text-red-500">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path
                                            d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                                    </svg>
                                </a>
                                <a href="#" className="hover:text-red-500">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path fillRule="evenodd"
                                              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                              clipRule="evenodd"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;