import Carousel from "@/components/carousel/Carousel";
import Header from "@/components/header/Header";
import Image from "next/image";

export default function Home() {
  return (
    <div className="main">
      <Header />
      <Carousel />
    </div>
  );
}
