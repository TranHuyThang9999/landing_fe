import ProductCard from "@/app/components/products/product-catalog";

interface ProductGridProps {
    products: {
        image: string;
        name: string;
        price: string;
        specs: string[];
    }[];
}

const ProductGrid = ({ products }: ProductGridProps) => {
    return (
        <div className="container px-2 sm:px-4 py-8 mx-auto"> {/* Thêm mx-auto */}
            <ul className="flex flex-wrap gap-2 justify-center">
                {products.map((product, index) => (
                    <li key={index} className="w-56 sm:w-64 md:w-72">
                        <ProductCard
                            image={product.image}
                            name={product.name}
                            price={product.price}
                            specs={product.specs}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductGrid;
