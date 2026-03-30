"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Post } from "@/app/components/shared/data/Posts";


// ── helpers ───────────────────────────────────────────────────────────────────

function renderBold(text: string) {
  const parts = text.split(/\*\*(.+?)\*\*/g);
  return parts.map((p, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="font-semibold text-[#1a1a1a]">
        {p}
      </strong>
    ) : (
      p
    )
  );
}

function ContentBlock({
  block,
}: {
  block: { id: string; heading?: string; body: string; type: string; };
}) {
  const lines = block.body.split("\n").filter(Boolean);

  return (
    <div id={block.id} className="scroll-mt-24">
        
      {block.heading && (
        <h2 className=" text-2xl md:text-4xl font-bold text-primaryColor leading-10 mt-10 mb-3">
          {block.heading}
         
        </h2>
      )}
      {block.type === "intro" && (
        <p className="text-base md:text-lg font-normal text-primaryColor leading-8">{block.body}</p>
      )}
      {block.type === "section" && (
        <p className="text-base md:text-lg font-normal text-primaryColor leading-8">{block.body}</p>
      )}
      {block.type === "list" && (
        <ul className="space-y-2 mt-1">
          {lines.map((line, i) => (
            <li key={i} className="flex gap-2 items-center text-base md:text-lg font-normal text-primaryColor leading-8">
              <span className=" w-1.5 h-1.5 rounded-full bg-[#b8924a] flex-shrink-0" />
              <span>
                {renderBold(line.replace(/^\*\*(.+?)\*\*: /, "").replace(/^- /, ""))}
              </span>
            </li>
          ))}
        </ul>
      )}
      {block.type === "numbered" && (
        <ol className="space-y-2 mt-1">
          {lines.map((line, i) => (
            <li key={i} className="flex gap-3 items-center text-base md:text-lg font-normal text-primaryColor leading-8">
              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#f0e8d8] text-[#9a7a3e] text-xs font-bold flex items-center justify-center mt-0.5">
                {i + 1}
              </span>
              <span>{renderBold(line)}</span>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}




type CommentType = {
  id: string;
  name: string;
  avatar: string;
  date: string;
  text: string;
  likes: number;
  replies?: CommentType[];
};

function CommentCard({
  comment,
  isReply = false,
}: {
  comment: CommentType;
  isReply?: boolean;
}) {
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(comment.likes);

  const handleLike = () => {
    setLiked(!liked);
    setCount(liked ? count - 1 : count + 1);
  };

  return (
<div className={`flex gap-3 ${isReply ? "pl-10 mt-3" : "mt-5"}`}>
  
  {/* Avatar */}
  <div className="flex-shrink-0 w-9 h-9 rounded-full bg-[#ddd5c5] flex items-center justify-center text-[11px] font-bold text-[#7a6a4a]">
    {comment.avatar}
  </div>

  <div className="flex-1">

    {/* Name + Date + Heart */}
    <div className="flex justify-between items-start mb-2">

      <div>
        <span className="block text-base font-bold text-primaryColor leading-5">
          {comment.name}
        </span>
        <span className="block text-xs text-[#6B7280]">
          {comment.date}
        </span>
      </div>

      {/* Heart Icon */}
      <button
        onClick={handleLike}
        className={`flex items-center gap-1 text-[12px] transition-colors cursor-pointer hover:opacity-80 ${
          liked ? "text-[#b8924a]" : "text-[#9a8a78] hover:text-[#b8924a]"
        }`}
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill={liked ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 24.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
        {count > 0 ? count : ""}
      </button>

    </div>

    {/* Comment text */}
    <p className="text-base text-primaryColor font-normal leading-relaxed md:leading-7">
      {comment.text}
    </p>

  </div>
</div>
  );
}



type Props = {
  post: Post;
  allPosts: Post[];
};

export default function BlogDetailClient({ post, allPosts }: Props) {
  const [activeSection, setActiveSection] = useState(
    post?.tableOfContents?.[0]?.id ?? ""
  );
  const [commentText, setCommentText] = useState("");
  const [commentName, setCommentName] = useState("");
  const [allComments, setAllComments] = useState<CommentType[]>(post?.comments ?? []);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  // Active TOC section on scroll
  useEffect(() => {
    const ids = post.tableOfContents.map((t) => t.id);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        });
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [post.tableOfContents]);

  const handlePostComment = () => {
    if (!commentText.trim()) return;
    const newComment: CommentType = {
      id: `new-${Date.now()}`,
      name: commentName.trim() || "Anonymous Fight Sister",
      avatar: (commentName.trim() || "AF")
        .split(" ")
        .map((n) => n[0])
        .join("")
        .slice(0, 2)
        .toUpperCase(),
      date: "Just now",
      text: commentText,
      likes: 0,
      replies: [],
    };
    setAllComments([newComment, ...allComments]);
    setCommentText("");
    setCommentName("");
  };

  const related = allPosts
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 2);

  return (
    <div className="min-h-screen">

      {/* ── HERO BANNER ── */}
      <div className="relative h-[340px] md:h-[400px]  overflow-hidden">
        <img
          src={post.bannerImg}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute px-4 inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end px-6 md:px-16 pb-10">
          <span className="inline-block mb-3 px-4 py-2 rounded-full text-sm leading-5 font-bold  bg-secondaryColor text-white w-fit">
            {post.category}
          </span>
          <h1 className=" text-5xl md:text-6xl font-bold text-white leading-tight mnd:leaidng-18 max-w-4xl mb-3">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-white/80 text-sm font-normal leading-5">
            <span className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 24h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {post.date}
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              {post.author}
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {post.readTime}
            </span>
          </div>
        </div>
      </div>

      {/* ── BACK TO BLOG ── */}
      <div className="max-w-7xl mx-auto px-6 pt-5 pb-2">
        <Link
          href="/site/blog"
          className="inline-flex items-center gap-1.5 text-sm text-[#6B7280] font-normal leading-5 cursor-pointer hover:text-[#6b5230] transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Blog
        </Link>
      </div>

      {/* ── BODY: Sidebar + Content ── */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col lg:flex-row gap-10">

        {/* LEFT SIDEBAR */}
        <aside className="w-full lg:w-56 flex-shrink-0 space-y-5 lg:sticky lg:top-24 lg:self-start">

          {/* Table of Contents */}
          <div className="bg-white rounded-2xl p-5 ">
            <h4 className="text-lg sm:text-xl font-bold text-primaryColor leading-5 mb-3">
              In This Article
            </h4>
            <nav className="space-y-1">
              {post.tableOfContents.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById(item.id)
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className={`block text-sm font-normal leading-5 py-1.5 px-2 rounded-lg transition-all ${
                    activeSection === item.id
                      ? "bg-[#f0e8d8] text-[#9a7a3e] font-semibold"
                      : "text-[#5a4e44] hover:text-[#9a7a3e] hover:bg-[#faf7f2]"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Article Stats */}
          <div className="bg-[#F8F1E9] rounded-2xl p-5 ">
            <h4 className="text-base  font-bold text-primaryColor leading-6 mb-3 ">
              Article Stats
            </h4>
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm font-normal text-[#6B7280] leading-5">
                <span className="text-[#9a8a78]">Reading time</span>
                <span className="font-semibold text-[#1a1a1a]">{post.readTime}</span>
              </div>
              <div className="flex justify-between items-center text-sm font-normal text-[#6B7280] leading-5">
                <span className="text-[#9a8a78]">Word count</span>
                <span className="font-semibold text-[#1a1a1a]">
                  {post.wordCount.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between items-center text-sm font-normal text-[#6B7280] leading-5">
                <span className="text-[#9a8a78]">Category</span>
                <span className="text-[#b8924a] font-semibold text-[11px]">
                  {post.category}
                </span>
              </div>
            </div>
          </div>

          {/* Tags */}
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-[#ece4d8]">
            <h4 className="text-[13px] font-bold text-[#1a1a1a] mb-3 ">
              Tags
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] bg-[#f0e8d8] text-[#9a7a3e] px-2.5 py-1 rounded-full font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </aside>

        {/* MAIN CONTENT */}
        <main className="flex-1 min-w-0">
          <article className="bg-white  space-y-2">
                        <h1 className="font-serif text-2xl md:text-3xl font-bold text-[#1a1a1a] leading-tight pb-2">
              {post.title}
            </h1>
            {post.content.map((block) => (
              <ContentBlock key={block.id} block={block} />
            ))}
          </article>

        
          {/* ── ABOUT THE AUTHOR ── */}
          <section style={{background: 'linear-gradient(180deg, #F8F1E9 0%, #FFF 100%)'}} className="mt-8  rounded-2xl shadow-sm border border-[#ece4d8] p-7 md:p-10">
            <h3 className="text-xl md:text-2xl  font-bold text-primaryColor leading-7 mb-4 ">
              About the Author
            </h3>
            <div className="flex gap-4">
              <img
                src={post.authorImg}
                alt={post.author}
                className="w-16 h-16 rounded-full object-cover flex-shrink-0"
                onError={(e) => {
                  const el = e.target as HTMLImageElement;
                  el.style.display = "none";
                }}
              />
              <div>
                <p className="text-lg md:text-xl  font-bold text-primaryColor leading-7">{post.author}</p>
                <p className="text-sm text-[#6B7280] leading-6 mb-2">{post.authorRole}</p>
                <p className="text-[14px] text-[#3a3028] leading-relaxed">{post.authorBio}</p>
                <div className="flex gap-3 mt-3">
                  {["twitter", "link", "mail"].map((icon) => (
                    <button
                      key={icon}
                      className="flex items-center justify-center hover:text-[#C9A96E] hover:opacity-80  cursor-pointer transition-colors"
                    >
                      {icon === "twitter" && (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M18.4973 3.36303C18.4973 3.36303 17.9088 5.12868 16.8157 6.2247C18.161 14.6295 8.91237 20.7672 1.68164 15.9748C3.53136 16.0589 5.38109 15.4703 6.72634 14.2932C2.52242 13.032 0.420466 8.07142 2.52242 4.20382C4.37245 6.38985 7.23081 7.65103 10.0895 7.56695C9.33277 4.03566 13.4526 2.01778 15.975 4.37197C16.8998 4.37197 18.4973 3.36303 18.4973 3.36303Z" stroke="#C9A96E" strokeWidth="1.68157" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
                      )}
                      {icon === "link" && (
                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M13.4529 6.72559C14.7908 6.72559 16.074 7.25708 17.02 8.20314C17.9661 9.14924 18.4976 10.4323 18.4976 11.7703V17.6558H15.1345V11.7703C15.1345 11.3243 14.9573 10.8966 14.6419 10.5812C14.3266 10.2659 13.8989 10.0887 13.4529 10.0887C13.0069 10.0887 12.5792 10.2659 12.2639 10.5812C11.9485 10.8966 11.7713 11.3243 11.7713 11.7703V17.6558H8.4082V11.7703C8.4082 10.4323 8.9397 9.14924 9.88576 8.20314C10.8318 7.25708 12.115 6.72559 13.4529 6.72559Z" stroke="#C9A96E" strokeWidth="1.68157" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M5.04477 7.56641H1.68164V17.6558H5.04477V7.56641Z" stroke="#C9A96E" strokeWidth="1.68157" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M3.36324 5.0438C4.29191 5.0438 5.04477 4.29093 5.04477 3.36223C5.04477 2.43353 4.29191 1.68066 3.36324 1.68066C2.4345 1.68066 1.68164 2.43353 1.68164 3.36223C1.68164 4.29093 2.4345 5.0438 3.36324 5.0438Z" stroke="#C9A96E" strokeWidth="1.68157" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
                      )}
                      {icon === "mail" && (
                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M16.8138 3.36328H3.36125C2.43255 3.36328 1.67969 4.11614 1.67969 5.04485V15.1342C1.67969 16.0629 2.43255 16.8158 3.36125 16.8158H16.8138C17.7425 16.8158 18.4953 16.0629 18.4953 15.1342V5.04485C18.4953 4.11614 17.7425 3.36328 16.8138 3.36328Z" stroke="#C9A96E" strokeWidth="1.68157" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M18.4953 5.88477L10.9535 10.6772C10.694 10.8399 10.3938 10.9261 10.0875 10.9261C9.78124 10.9261 9.48108 10.8399 9.22451 10.6772L1.67969 5.88477" stroke="#C9A96E" strokeWidth="1.68157" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ── NEWSLETTER ── */}
          <section
            className="mt-8 rounded-2xl overflow-hidden"
            style={{ background: "linear-gradient(180deg, #001F3F 0%, #0A2540 100%)" }}
          >
            <div className="p-8 md:p-10 text-center">
              <h2 className=" text-2xl md:text-[28px] font-bold leading-8 text-white mb-2">
                Join the Fight Sister Newsletter
              </h2>
              <p className="text-base text-white/80 mb-6 max-w-md mx-auto leading-relaxed">
                Get weekly insights on cycle awareness, body neutrality, and fighting the
                numbers. Plus exclusive tips from Numera AI.
              </p>
              {subscribed ? (
                <div className="inline-flex items-center gap-2 bg-white/10 text-white px-6 py-3 rounded-xl text-[14px]">
                  <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  You're in! Welcome, Fight Sister. 💛
                </div>
              ) : (
                <div className="flex flex-col md:flex-row  gap-2 max-w-sm mx-auto">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2.5 rounded-xl text-[14px] bg-white/10 text-white placeholder-white/40 border border-white/20 outline-none focus:border-[#b8924a] transition-colors"
                  />
                  <button
                    onClick={() => {
                      if (email.includes("@")) setSubscribed(true);
                    }}
                    style={{ background: "linear-gradient(180deg, #C9A96E 0%, #57431F 100%)" }}
                    className="px-5 py-2.5 rounded-xl  cursor-pointer hover:from-[#d4b77e] hover:to-[#6b5328] hover:opacity-80 text-white font-semibold text-[14px] transition-colors whitespace-nowrap"
                  >
                    Subscribe
                  </button>
                </div>
              )}
              {!subscribed && (
                <p className="text-xs text-white/60 font-normal mt-3">
                  No spam. Unsubscribe anytime. We respect your inbox.
                </p>
              )}
            </div>
          </section>

          {/* ── COMMENTS ── */}
          <section className="mt-12">
            <div className="mb-8">
              <h2 className=" text-xl md:text-[28px] leading-6 font-bold text-[#1a1a1a] mb-2">
                Fight Sister Discussions ({allComments.length})
              </h2>
              <p className="text-base font-normal  text-[#6B7280]">
                Share your thoughts and connect with other Fight Sisters
              </p>
            </div>

            {/* Comment Input */}
            <div className="bg-[#F8F1E9] rounded-2xl  border border-[#ece4d8] p-5 mb-6">
              <input
                type="text"
                value={commentName}
                onChange={(e) => setCommentName(e.target.value)}
                placeholder="Your name (optional)"
                className="w-full px-4 py-2.5 rounded-xl text-[14px] bg-[#faf7f2] border border-[#E5E7EB] outline-none focus:border-[#b8924a] mb-3 text-[#1a1a1a] placeholder-[#c0b4a4]"
              />
              <textarea
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                placeholder="Join the conversation"
                rows={3}
                className="w-full px-4 py-3 rounded-xl text-[14px] bg-[#faf7f2] border border-[#E5E7EB] outline-none focus:border-[#b8924a] resize-none text-[#1a1a1a] placeholder-[#c0b4a4]"
              />
              <div className="flex flex-col md:flex-row gap-4 items-center justify-between mt-3">
                <p className="text-xs text-[#6B7280] font-normal leading-4">
                  Be kind and respectful. We're all fighting together.
                </p>
                <button
                  onClick={handlePostComment}
                  disabled={!commentText.trim()}
                  className="flex w-full md:w-auto items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl bg-[#b8924a] cursor-pointer hover:bg-[#9a7a3e] disabled:opacity-40 disabled:cursor-not-allowed text-white text-[13px] font-semibold transition-colors"
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  Post Comment
                </button>
              </div>
            </div>

            {/* Comment List */}
            <div className=" ">
              {allComments.map((comment) => (
                <div key={comment.id} className="border border-[#E5E7EB] mb-6 p-5 bg-white rounded-xl">
                  <CommentCard comment={comment} />
                  {comment.replies?.map((reply) => (
                    <CommentCard key={reply.id} comment={reply} isReply />
                  ))}
                </div>
              ))}
              {allComments.length === 0 && (
                <p className="text-center text-[14px] text-[#b0a494] py-8">
                  Be the first to share your thoughts, Fight Sister! 💛
                </p>
              )}
            </div>
          </section>

          {/* ── RELATED POSTS ── */}
          {related.length > 0 && (
            <section className="mt-8 mb-12">
              <h3 className="font-serif text-xl font-bold text-[#1a1a1a] mb-5">
                Related Posts
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {related.map((rp) => (
                  <Link
                    key={rp.slug}
                    href={`/blog/${rp.slug}`}
                    className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-[#ece4d8] hover:shadow-md transition-all duration-200 hover:-translate-y-1 flex flex-col"
                  >
                    <div className="overflow-hidden">
                      <img
                        src={rp.img}
                        alt={rp.title}
                        className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-5 flex flex-col gap-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#9a7a3e]">
                        {rp.category}
                      </span>
                      <h4 className="font-serif text-[16px] font-bold text-[#1a1a1a] group-hover:text-[#9a7a3e] transition-colors leading-snug">
                        {rp.title}
                      </h4>
                      <p className="text-[12px] text-[#7a6a5a] leading-relaxed line-clamp-2">
                        {rp.desc}
                      </p>
                      <p className="text-[11px] text-[#b0a494] mt-1">
                        {rp.date} · {rp.readTime}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </main>
      </div>
    </div>
  );
}