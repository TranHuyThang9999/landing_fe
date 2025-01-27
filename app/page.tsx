import React from "react";
import ListMitsubishiServices from "@/app/components/MitsubishiServices/list_mitsubishi_services";
import PromoCard from "@/app/components/promotional_banner/promotional_banner";
import ProductGrid from "@/app/components/products/product_list";
import productList from "@/app/data/data";
import Footer from "@/app/components/footer/footer";
const App = () => {
    const data = [
        {
            src: "https://drive.gianhangvn.com/image/dich-vu-gia-tang-1552268j29652.jpg",
            title: "Dịch vụ 1",
            description: "Chính sách mang lại những sửa chữa cần thiết, sử dụng những phụ tùng mới hoặc những phụ tùng tái chế cho xe của Khách hàng nằm trong chế độ được bảo hành.",
        },
        {
            src: "https://example.com/image2.jpg",
            title: "Dịch vụ 2",
            description: "Mô tả dịch vụ 2",
        },
        {
            src: "https://example.com/image3.jpg",
            title: "Dịch vụ 3",
            description: "Mô tả dịch vụ 3",
        },
        {
            src: "https://example.com/image4.jpg",
            title: "Dịch vụ 4",
            description: "Mô tả dịch vụ 4",
        },

    ];

    return (
        <div>
            <PromoCard/>
            <ProductGrid products={productList}/>
            <div className="container mx-auto my-10">
                <ListMitsubishiServices data={data}/>
            </div>
        </div>
    );
};

export default App;
