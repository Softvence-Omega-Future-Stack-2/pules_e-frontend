export type Category = "All" | "Tools" | "Journals" | "Wellness" | "Apparel";

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: Exclude<Category, "All">;
  image: string;
  features: string[];
}

export const products: Product[] = [
  {
    id: "1",
    name: "Premium BBT Thermometer",
    description:
      "Medical-grade basal body temperature thermometer with 2-decimal precision. Syncs automatically with Fight the Number app.",
    price: 29.99,
    category: "Tools",
    image:
      "/img/blogHeroImg.svg",
    features: [
      "0.01°F precision for accurate tracking",
      "60-second quick reading",
      "Backlit display for early morning readings",
      "Auto-sync with Fight the Number app",
      "30-day memory storage",
      "1-year warranty",
    ],
  },
  {
    id: "2",
    name: "Fight Sister Journal",
    description:
      "Beautiful hardcover journal for tracking NMS, cycle heights, and other wellness journey. Designed by Fight Sisters, for Fight Sisters.",
    price: 24.99,
    category: "Journals",
    image:
      "/img/shopImg2.svg",
    // image:
    //   "https://images.unsplash.com/photo-1516534775068-ba3e7458af70?w=600&q=80",
    features: [
      "180 pages of guided prompts",
      "Monthly cycle tracking spreads",
      "Symptom logging pages",
      "Lay-flat binding",
      "Ribbon bookmark",
      "Premium cream paper",
    ],
  },
  {
    id: "3",
    name: "Cycle-Sync Tea Collection",
    description:
      "Four organic herbal tea blends formulated for each cycle phase. Support your body with phase-specific botanicals.",
    price: 39.99,
    category: "Wellness",
    image:
      "/img/shopImg3.svg",
    // image:
    //   "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=600&q=80",
    features: [
      "4 unique phase blends",
      "100% organic ingredients",
      "USDA certified",
      "Caffeine-free options",
      "Biodegradable packaging",
      "30 tea bags total",
    ],
  },
  {
    id: "4",
    name: "Fight the Number Tee",
    description:
      "Soft organic cotton tee with our signature 'Fight the Number' slogan. Wear your rebellion proudly.",
    price: 32.0,
    category: "Apparel",
    image:
      "/img/shopImg4.svg",
    // image:
    //   "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&q=80",
    features: [
      "100% organic cotton",
      "Unisex relaxed fit",
      "Sizes XS–3XL",
      "Screen-printed graphic",
      "Pre-washed for softness",
      "Ethically manufactured",
    ],
  },
  {
    id: "5",
    name: "NSV Tracker Notepad",
    description:
      "Daily notepad for capturing Non-Scale Victories as they happen. Tear-off sheets for your fridge, desk, or nightstand.",
    price: 14.99,
    category: "Journals",
    image:
      "https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=600&q=80",
    features: [
      "100 tear-off sheets",
      "Daily NSV prompts",
      "Affirmation footer",
      "Magnet backing included",
      "A5 size — fits anywhere",
      "Recycled paper",
    ],
  },
  {
    id: "6",
    name: "Luteal Phase Care Kit",
    description:
      "Everything you need to survive and thrive all your luteal phase. Curated with love by Fight Sisters.",
    price: 54.99,
    category: "Wellness",
    image:
      "https://images.unsplash.com/photo-1498579397066-22750a3cb424?w=600&q=80",
    features: [
      "Magnesium glycinate capsules",
      "Luteal phase tea blend",
      "Guided symptom journal",
      "Heating pad patch",
      "Self-care checklist card",
      "Gift-ready box",
    ],
  },
];

export const categories: Category[] = [
  "All",
  "Tools",
  "Journals",
  "Wellness",
  "Apparel",
];