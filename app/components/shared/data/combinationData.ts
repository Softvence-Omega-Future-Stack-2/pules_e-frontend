

export type Category = "Fertility" | "Menopause" | "Wellness" | "PCOS" | "Postpartum";
export type Status = "Published" | "Draft";

export interface Companion {
  id: number;
  title: string;
  category: Category;
  description: string;
  image: string;
  status: Status;
}

export const initialCompanions: Companion[] = [
  {
    id: 1,
    title: "Fertility Fight Sister",
    category: "Fertility",
    description: "Supporting your journey to motherhood with tracking, insights, and encouragement.",
    image: "/img/companion1.png",
    status: "Published",
  },
  {
    id: 2,
    title: "Menopause Fight Sister",
    category: "Menopause",
    description: "Navigate this transition with confidence, tracking tools, and community support.",
    image: "/img/companion2.png",
    status: "Published",
  },
  {
    id: 3,
    title: "Wellness Fight Sister",
    category: "Wellness",
    description: "Empowering your daily health journey with personalized guidance and motivation.",
    image: "/img/companion3.png",
    status: "Published",
  },
];

export const categoryColors: Record<Category, string> = {
  Fertility: "bg-[#C9A96E] text-white",
  Menopause: "bg-[#c5a059] text-white",
  Wellness: "bg-[#7a9e7e] text-white",
  PCOS: "bg-[#9b8abf] text-white",
  Postpartum: "bg-[#e07b8a] text-white",
};

export const CATEGORIES: Category[] = ["Fertility", "Menopause", "Wellness", "PCOS", "Postpartum"];