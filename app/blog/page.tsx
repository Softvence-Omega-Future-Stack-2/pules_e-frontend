import BlogHero from "../components/blog/BlogHero";
import CategoriesFilter from "../components/blog/Categories";



export default function BlogPage() {
  return (
    <div className="bg-[#F8F1E9] pb-12">
    <BlogHero/>
    <CategoriesFilter/>
    </div>
  );
}
