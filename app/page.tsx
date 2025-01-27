'use client';
import React, {useState} from "react";
import ListMitsubishiServices from "@/app/components/MitsubishiServices/list_mitsubishi_services";
import ProductGrid from "@/app/components/products/product_list";
import PromoCard from "@/app/components/promo_card/promotional_banner";
import MitsubishiDealerHeader from "@/app/components/promotion_section_header/promotion_section_header";
import QuoteForm from "@/app/components/ quote_form/quote_form";
import productList, {dataService} from "@/app/data/data";

const App = () => {

    const [isFormOpen, setIsFormOpen] = useState(false)
    return (
        <div>
            <button onClick={() => setIsFormOpen(true)} className="bg-blue-600 text-white px-4 py-2 rounded">
                Mở Form Báo Giá
            </button>

            <QuoteForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)}/> <MitsubishiDealerHeader/>
            <PromoCard/>
            <ProductGrid products={productList} />
            <div className="container mx-auto my-10">
                <ListMitsubishiServices data={dataService}/>
            </div>
        </div>
    );
};

export default App;
