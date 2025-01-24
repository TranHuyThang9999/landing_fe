import productList from '@/app/data/data';
import ProductGrid from "@/app/components/products/product_list";
import MitsubishiSales from "@/app/components/dealership_page/dealership_page";

export default function Home() {
    return (
        // <ProductGrid products={productList} />
        <MitsubishiSales/>
    );
}