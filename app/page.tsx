import Carousel from "@/app/components/carousel/Carousel";


const images = [
    "https://flowbite.com/docs/images/carousel/carousel-5.svg",
    "https://flowbite.com/docs/images/carousel/carousel-2.svg",
    "https://flowbite.com/docs/images/carousel/carousel-1.svg",
];

export default function Home() {
    return <div>
        <Carousel urls={images} />
    </div>;
}


