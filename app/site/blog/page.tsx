import BlogHero from "@/app/components/blog/BlogHero";
import CategoriesFilter from "@/app/components/blog/Categories";



export default function BlogPage() {
  return (
    <div className="bg-[#F8F1E9] pb-12">
    <BlogHero/>
    <CategoriesFilter/>
    </div>
  );
}
