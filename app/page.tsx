import ArticleGrid from "@/components/ArticleGrid";
import FeaturedArticle from "@/components/FeaturedArticle";
import Footer from "@/components/footer/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StudentGallery from "@/components/StudentGallerySection";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#121212] text-white">
      <Header />
      <main className="container mx-auto px-4 md:px-6">
        <Hero />
        <FeaturedArticle />
        <ArticleGrid />
        <StudentGallery />
      </main>
      <Footer />
    </div>
  );
}
