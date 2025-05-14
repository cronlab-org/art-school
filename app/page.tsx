import FeaturedArticle from "@/components/Featured/FeaturedArticle";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Hero from "@/components/Hero/Hero";
import StudentGallery from "@/components/gallery/StudentGallerySection";
import ArtistCarousel from "@/components/Featured/ArtistCarausel";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#121212] text-white">
      <Header />
      <main className="container mx-auto px-4 md:px-6">
        <Hero />
        <FeaturedArticle />
        <ArtistCarousel />
        <StudentGallery />
      </main>
      <Footer />
    </div>
  );
}
