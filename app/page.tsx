import Carousel from "@/app/components/carousel/Carousel";
import PromotionalBanner from "@/app/components/promotional_banner/promotional_banner";


const images = [
    "https://drive.gianhangvn.com/image/image-2688858j31472.jpg",
    "https://drive.gianhangvn.com/image/image-2688838j31472.jpg",
    "https://drive.gianhangvn.com/image/image-2688841j31472.png",
];

export default function Home() {
    return <div>
        {/*<Carousel urls={images} />*/}
        <PromotionalBanner/>
    </div>;
}


