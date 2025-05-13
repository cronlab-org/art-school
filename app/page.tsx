import ArticleGrid from "@/components/ArticleGrid";
import FeaturedArticle from "@/components/FeaturedArticle";
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
      <footer className="container mx-auto px-4 py-8 border-t border-gray-800 mt-12 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Arcus. All rights reserved.</p>
      </footer>
    </div>
  );
}
