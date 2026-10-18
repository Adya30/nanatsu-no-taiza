import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import GallerySection from "@/components/GallerySection";
import EventsSection from "@/components/EventsSection";
import MangaSection from "@/components/MangaSection";
import AnimeSection from "@/components/AnimeSection";
import Footer from "@/components/Footer";
import BackgroundOrnaments from "@/components/BackgroundOrnaments";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#FDF0DE] flex flex-col overflow-x-hidden selection:bg-[#780000] selection:text-white">
      <BackgroundOrnaments />

      <div className="relative md:sticky md:top-0 z-50">
        <Navbar />
      </div>

      <div className="relative z-10 flex flex-col">
        <HeroSection />
        <AboutSection />
        <GallerySection />
        <EventsSection />
        <MangaSection />
        <AnimeSection />
      </div>

      <Footer />
    </main>
  );
}
