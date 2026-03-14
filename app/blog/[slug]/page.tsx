import { notFound } from "next/navigation";

import BlogDetailClient from "./BlogDetailClient";
import { posts } from "@/app/components/shared/data/Posts";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) return notFound();

  // post is guaranteed to be defined here — notFound() exits above
  return <BlogDetailClient post={post as NonNullable<typeof post>} allPosts={posts} />;
}

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}