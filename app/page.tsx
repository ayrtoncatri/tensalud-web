import Carousel from "@/components/carousel/Carousel";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import WhatsappButton from "@/components/WhatsappButton";
import MisionVision from "@/components/MisionVision";
import ServiciosOfrecidos from "@/components/ServiciosOfrecidos";

export default function Home() {
  return (
    <div
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/fondito.jpg')" }}
    >
      <Header />
      <Carousel />
      <ServiciosOfrecidos />
      <MisionVision />
      <WhatsappButton />
      <Footer />
    </div>
  );
}
