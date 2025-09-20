import Carousel from "@/components/carousel/Carousel";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";


export default function Home() {
  return (
    <div className="main">
      <Header />
      <Carousel />
      <Footer />
    </div>
  );
}
