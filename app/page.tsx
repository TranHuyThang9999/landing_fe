'use client';
import React, { useEffect, useState, useRef } from "react";
import ListMitsubishiServices from "@/app/components/MitsubishiServices/list_mitsubishi_services";
import ProductGrid from "@/app/components/products/product_list";
import PromoCard from "@/app/components/promo_card/promotional_banner";
import MitsubishiDealerHeader from "@/app/components/promotion_section_header/promotion_section_header";
import productList, { dataService } from "@/app/data/data";
import AutoOpenModal from "@/app/components/ quote_form/auto_open_modal";
import MitsubishiSales from "@/app/components/dealership_page/dealership_page";
import ProductPages from "@/app/components/products/product_pages";
const App = () => {

    // function handleCloseModal() {
    //     console.log("Close modal");
    // }

    return (
        <div>

            {/*<AutoOpenModal onClose={handleCloseModal} />*/}
            {/*<MitsubishiDealerHeader />*/}
            {/*<PromoCard />*/}
            {/*<ProductGrid products={productList} />*/}
            <MitsubishiSales />
            {/*<div className="container mx-auto my-10">*/}
            {/*    <ListMitsubishiServices data={dataService} />*/}
            {/*</div>*/}
            <ProductPages />
        </div>
    );
};

export default App;