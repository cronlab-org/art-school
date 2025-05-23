import Curriculum from "@/components/curriculum/Curriculum";
import ExpBanner from "@/components/exp_banner/ExpBanner";
import Footer from "@/components/footer/Footer";
import StudentGallery from "@/components/gallery/StudentGallerySection";
import TeacherGallery from "@/components/gallery/TeacherGallery";
import Header from "@/components/header/Header";
import ArtistCarousel from "@/components/Hero/ArtistCarausel";
import Hero from "@/components/Hero/Hero";


export default function Home() {
  return (
    <div className="min-h-screen bg-[#121212] text-neutral-300">
      <Header />
      <main className="container mx-auto px-4 md:px-6">
        <Hero />
        <ExpBanner />
        <Curriculum />
        <TeacherGallery />
        <StudentGallery />
        <ArtistCarousel />
      </main>
      <Footer />
    </div>
  );
}
