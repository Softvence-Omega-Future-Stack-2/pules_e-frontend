export type Comment = {
  id: string;
  name: string;
  avatar: string;
  date: string;
  text: string;
  likes: number;
  replies?: Comment[];
};

export type FAQ = {
  question: string;
  answer: string;
};

export type Post = {
  slug: string;
  title: string;
  category: string;
  desc: string;
  date: string;
  readTime: string;
  wordCount: number;
  author: string;
  authorRole: string;
  authorBio: string;
  authorAvatar: string;
  authorImg: string;
  img: string;
  bannerImg: string;
  tags: string[];
  tableOfContents: { id: string; label: string }[];
  content: { id: string; heading?: string; body: string; type: 'intro' | 'section' | 'list' | 'numbered' }[];
  faqs: FAQ[];
  comments: Comment[];
};

export const posts: Post[] = [
  {
    slug: "understanding-bbt-cycle-awareness",
    title: "Understanding BBT for Cycle Awareness",
    category: "Cycle Awareness",
    desc: "Learn how basal body temperature tracking can help you understand your hormonal patterns and anticipate cycle shifts.",
    date: "March 1, 2026",
    readTime: "7 min",
    wordCount: 1385,
    author: "Dr. Sarah Chen",
    authorRole: "Women's Health Specialist",
    authorBio: "Board-certified physician specializing in women's hormonal health and cycle awareness. Passionate about fighting diet culture and empowering women through evidence-based education.",
    authorAvatar: "SC",
    authorImg: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&q=80",
    img: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&q=80",
    bannerImg: "/img/blogHeroImg.svg",
    tags: ["BBT", "Cycle Tracking", "Hormones", "Ovulation"],
    tableOfContents: [
      { id: "what-is-bbt", label: "What is BBT?" },
      { id: "why-track-bbt", label: "Why Track BBT?" },
      { id: "how-to-track", label: "How to Track" },
      { id: "numera-difference", label: "What Numera Does Differently" },
    ],
    content: [
      {
        id: "intro",
        type: "intro",
        body: "Basal Body Temperature (BBT) tracking is one of the most powerful tools for understanding your hormonal health. Unlike the scale or calorie counting, BBT gives you real-time feedback about what's happening inside your body.",
      },
      {
        id: "what-is-bbt",
        type: "section",
        heading: "What is BBT?",
        body: "Your basal body temperature is your body's temperature at complete rest. It changes throughout your menstrual cycle in response to hormonal shifts — specifically the rise in progesterone after ovulation.",
      },
      {
        id: "why-track-bbt",
        type: "list",
        heading: "Why Track BBT?",
        body: "**Confirm ovulation**: See the temperature shift that confirms you've ovulated\n**Understand cycle phases**: Know when you're in follicular vs. luteal phase\n**Identify patterns**: Spot irregularities that might need medical attention\n**Honor your energy**: Expect and plan for the energy dips that come with hormonal shifts",
      },
      {
        id: "how-to-track",
        type: "numbered",
        heading: "How to Track",
        body: "Take your temperature first thing in the morning, before getting out of bed\nUse a BBT-specific thermometer for accuracy\nLog it in Fight the Number app — Numera will interpret the data for you\nLook for patterns over 2–3 cycles",
      },
      {
        id: "numera-difference",
        type: "list",
        heading: "What Numera Does Differently",
        body: "Unlike basic cycle apps that just chart your temperature, Numera AI:\n\nExplains what the patterns mean in plain language\nConnects BBT shifts to your energy and mood\nOffers compassionate guidance for each phase\nNever makes you feel bad for \"irregular\" patterns\n\nRemember: Your BBT is information, not judgment. Let's fight the numbers together.",
      },
    ],
    faqs: [
      {
        question: "What's the best BBT thermometer to use?",
        answer: "Look for a thermometer that reads to two decimal places (e.g., 36.54°C rather than 36.5°C). Popular options include the iBasal, Tempdrop (wearable), and basic glass oral BBT thermometers. Avoid standard fever thermometers — they're not sensitive enough.",
      },
      {
        question: "Does BBT tracking work for birth control?",
        answer: "BBT alone is not sufficient as birth control. However, combined with cervical mucus observation (Sympto-Thermal Method), effectiveness rates reach 99%+ when used correctly. We strongly recommend working with a certified Fertility Awareness educator.",
      },
      {
        question: "What if my temperatures are all over the place?",
        answer: "Erratic temperatures are common when you first start. Give yourself 2–3 cycles to build a baseline. Common culprits include inconsistent wake times, alcohol, poor sleep, or illness. Note these on your chart and patterns will emerge.",
      },
      {
        question: "Can I track BBT if I work night shifts?",
        answer: "Yes — measure after your longest continuous sleep, always at the same time. Some women find wearable sensors like Tempdrop more practical for non-traditional schedules.",
      },
      {
        question: "How do I confirm ovulation from my chart?",
        answer: "Look for the 3-over-6 rule: a rise of at least 0.2°C that stays elevated for 3+ consecutive days, compared to the previous 6 days. Combined with the disappearance of fertile cervical mucus, this confirms ovulation.",
      },
    ],
    comments: [
      {
        id: "c1",
        name: "Emily R.",
        avatar: "ER",
        date: "4 days ago",
        text: "This article changed my perspective completely. I've been fighting my luteal phase for years instead of working with it. Thank you for the compassionate guidance!",
        likes: 0,
        replies: [],
      },
      {
        id: "c2",
        name: "Sarah M.",
        avatar: "SM",
        date: "4 days ago",
        text: "The BBT tracking tips are so helpful. I never understood what my temperature patterns meant until I read this. Can't wait to try Numera!",
        likes: 0,
        replies: [],
      },
      {
        id: "c3",
        name: "Rachel K.",
        avatar: "RK",
        date: "1 week ago",
        text: "Fellow Fight Sister here — this is exactly what I needed to hear today. The scale doesn't get the final say anymore!",
        likes: 0,
        replies: [],
      },
    ],
  },
  {
    slug: "luteal-phase-survival-guide",
    title: "Luteal Phase Survival Guide",
    category: "Cycle Phases",
    desc: "Everything you need to know about navigating the luteal phase with compassion and cycle-smart strategies.",
    date: "February 24, 2026",
    readTime: "9 min",
    wordCount: 1820,
    author: "Jessica Martinez",
    authorRole: "Cycle Coach & Nutritionist",
    authorBio: "Certified cycle coach and integrative nutritionist who has helped over 3,000 women work with their hormonal rhythms. Believes food is information, not punishment.",
    authorAvatar: "JM",
    authorImg: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80",
    img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80",
    bannerImg: "/img/categorie2.svg",
    tags: ["Luteal Phase", "PMS", "Progesterone", "Nutrition", "Mood"],
    tableOfContents: [
      { id: "what-is-luteal", label: "What is the Luteal Phase?" },
      { id: "hormonal-shifts", label: "Hormonal Shifts" },
      { id: "nutrition", label: "Nutrition Strategy" },
      { id: "movement", label: "Movement & Exercise" },
      { id: "emotional", label: "Emotional Landscape" },
    ],
    content: [
      {
        id: "intro",
        type: "intro",
        body: "The luteal phase — the roughly 14 days between ovulation and your period — gets a bad reputation. Bloating, mood shifts, cravings, fatigue. But with the right approach, this phase becomes something you can work with, not fight against.",
      },
      {
        id: "what-is-luteal",
        type: "section",
        heading: "What is the Luteal Phase?",
        body: "After ovulation, your corpus luteum produces progesterone. This hormone is calming, warming, and nest-building. Estrogen also rises briefly before both drop — triggering your period. This hormonal withdrawal is the engine behind PMS symptoms.",
      },
      {
        id: "hormonal-shifts",
        type: "section",
        heading: "Hormonal Shifts",
        body: "Your metabolism speeds up by 100–300 calories per day in the luteal phase. Your body is burning more — so feed it more. Fighting this with restriction worsens every symptom you're trying to avoid.",
      },
      {
        id: "nutrition",
        type: "list",
        heading: "Nutrition Strategy",
        body: "**Magnesium-rich foods**: dark chocolate, pumpkin seeds, leafy greens — directly reduce cramps and mood dips\n**Complex carbohydrates**: oats, sweet potato, brown rice support serotonin production\n**Reduce sodium**: helps with fluid retention and bloating\n**Limit caffeine and alcohol**: both worsen PMS and deplete magnesium\n**Increase protein**: supports stable blood sugar and moderates mood swings",
      },
      {
        id: "movement",
        type: "section",
        heading: "Movement & Exercise",
        body: "Early luteal phase is still great for strength training. As you approach your period, shift to lower-intensity movement: yoga, walking, swimming. Fighting this window with HIIT often worsens symptoms significantly.",
      },
      {
        id: "emotional",
        type: "section",
        heading: "Emotional Landscape",
        body: "The inner critic gets louder in the late luteal phase. This isn't weakness — it's biology. The veil between your conscious and subconscious thins. Use it. Journaling, honest conversations, therapy — things that feel harder at other times become more accessible now. Your luteal phase isn't broken. It's a wind-down asking for more rest and nourishment.",
      },
    ],
    faqs: [
      {
        question: "How long should a normal luteal phase be?",
        answer: "A healthy luteal phase is typically 12–16 days. A consistently short luteal phase (under 10 days) can make implantation difficult and may be worth discussing with your doctor.",
      },
      {
        question: "Is PMS the same as PMDD?",
        answer: "No. PMDD is a severe form of PMS that significantly impacts daily functioning with intense mood disturbances, depression, or anxiety. If you suspect PMDD, please speak with a healthcare provider — it's a real medical condition with effective treatments.",
      },
      {
        question: "Why do I get so hungry before my period?",
        answer: "Your metabolic rate increases in the luteal phase and progesterone stimulates appetite. Your body craves carbohydrates because they support serotonin synthesis. Honor the hunger with complex carbs rather than ultra-processed foods.",
      },
    ],
    comments: [
      {
        id: "c1",
        name: "Nadia K.",
        avatar: "NK",
        date: "2 days ago",
        text: "The reframe at the end genuinely made me cry (in a good way). I've spent years dreading this phase. Reading it as my body 'asking for things' rather than malfunctioning changes everything.",
        likes: 0,
        replies: [],
      },
      {
        id: "c2",
        name: "Tara B.",
        avatar: "TB",
        date: "5 days ago",
        text: "The magnesium tip is real. I started taking magnesium glycinate 3 months ago and my cramps went from debilitating to manageable. Wish someone told me this years ago.",
        likes: 0,
        replies: [],
      },
    ],
  },
  {
    slug: "scale-lies-hormonal-shifts",
    title: "Why the Scale Lies During Hormonal Shifts",
    category: "Body Neutrality",
    desc: "The science behind weight fluctuations during your cycle and why the number on the scale means nothing.",
    date: "February 15, 2026",
    readTime: "6 min",
    wordCount: 1120,
    author: "Dr. Sarah Chen",
    authorRole: "Women's Health Specialist",
    authorBio: "Board-certified physician specializing in women's hormonal health and cycle awareness. Passionate about fighting diet culture and empowering women through evidence-based education.",
    authorAvatar: "SC",
    authorImg: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&q=80",
    img: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=600&q=80",
    bannerImg: "/img/categorie3.svg",
    tags: ["Body Neutrality", "Hormones", "Water Retention", "Body Image"],
    tableOfContents: [
      { id: "fluid-retention", label: "Fluid Retention Reality" },
      { id: "glycogen", label: "Glycogen Storage" },
      { id: "inflammation", label: "Inflammation & Digestion" },
      { id: "what-matters", label: "What Actually Matters" },
    ],
    content: [
      {
        id: "intro",
        type: "intro",
        body: "You step on the scale Monday: 68 kg. You step on it Friday: 71 kg. You haven't changed a single habit. What happened? Your hormones happened. And the number means almost nothing.",
      },
      {
        id: "fluid-retention",
        type: "section",
        heading: "The Fluid Retention Reality",
        body: "Estrogen and progesterone directly influence how your body retains water. In the days before your period, progesterone drops sharply, causing your body to retain sodium — and therefore water. This alone can add 1–3 kg overnight, with no change in fat mass whatsoever. This is not weight gain. This is physics.",
      },
      {
        id: "glycogen",
        type: "section",
        heading: "Glycogen Storage",
        body: "Each gram of glycogen is stored with approximately 3 grams of water. A higher-carb day — which your body naturally craves in the luteal phase — can show as 1–2 kg on the scale the next morning. Again: not fat gain. Glycogen and its accompanying water weight fluctuates constantly.",
      },
      {
        id: "inflammation",
        type: "section",
        heading: "Inflammation & Digestion",
        body: "Prostaglandins — the compounds that trigger uterine contractions — also affect your gut. Slower motility, bloating, and increased intestinal inflammation all add to scale weight without reflecting any change in actual body composition.",
      },
      {
        id: "what-matters",
        type: "list",
        heading: "What Actually Matters",
        body: "**How your clothes fit** over time — not day to day\n**Energy levels, strength, and endurance** across your cycle\n**Monthly trends** compared at the same cycle phase\n**How you feel** in your body during daily activities",
      },
    ],
    faqs: [
      {
        question: "How much weight fluctuation is normal across a cycle?",
        answer: "Most women experience 1–3 kg of cyclical fluctuation due to water retention and glycogen storage changes. Some experience up to 5 kg, particularly those with strong PMS or PMDD. This is entirely normal and not indicative of fat gain.",
      },
      {
        question: "When is the best time to weigh myself for an accurate reading?",
        answer: "Weigh yourself on the same day of your cycle each month — days 5 to 10 of your follicular phase are typically most stable. First thing in the morning after using the bathroom, before eating or drinking.",
      },
    ],
    comments: [
      {
        id: "c1",
        name: "Yuki T.",
        avatar: "YT",
        date: "3 days ago",
        text: "I used to spiral every time the number went up. Understanding the science has genuinely helped me break that cycle (pun intended). Thank you for explaining this so clearly.",
        likes: 0,
        replies: [],
      },
      {
        id: "c2",
        name: "Carmen L.",
        avatar: "CL",
        date: "6 days ago",
        text: "Shared this with my 16-year-old daughter who was getting distressed about scale fluctuations. She texted me 'oh that makes so much sense' and that made my whole week.",
        likes: 0,
        replies: [],
      },
    ],
  },
  {
    slug: "perimenopause-what-to-expect",
    title: "Perimenopause: What to Expect and How to Fight",
    category: "Life Stages",
    desc: "Navigating the transition with knowledge, support, and a community of Fight Sisters who get it.",
    date: "February 8, 2026",
    readTime: "10 min",
    wordCount: 2100,
    author: "Dr. Maya Patel",
    authorRole: "Integrative Medicine Doctor",
    authorBio: "Integrative medicine physician specializing in women's hormonal transitions. Combines evidence-based medicine with lifestyle interventions to support women through every stage.",
    authorAvatar: "MP",
    authorImg: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=200&q=80",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80",
    bannerImg: "/img/categorie4.svg",
    tags: ["Perimenopause", "Hormones", "HRT", "Life Stages"],
    tableOfContents: [
      { id: "what-is", label: "What is Perimenopause?" },
      { id: "symptoms", label: "Common Symptoms" },
      { id: "what-helps", label: "What Actually Helps" },
      { id: "hrt", label: "HRT & Your Options" },
      { id: "mindset", label: "Fight Sister Mindset" },
    ],
    content: [
      {
        id: "intro",
        type: "intro",
        body: "Perimenopause can start as early as your late 30s and last anywhere from 2 to 12 years. It's one of the most significant hormonal transitions of a woman's life — and one of the least talked about. Let's change that.",
      },
      {
        id: "what-is",
        type: "section",
        heading: "What is Perimenopause?",
        body: "It's the transitional phase before menopause — defined as 12 consecutive months without a period. During perimenopause, estrogen levels fluctuate unpredictably before ultimately declining. This erratic hormonal environment causes most symptoms.",
      },
      {
        id: "symptoms",
        type: "list",
        heading: "Common Symptoms",
        body: "**Irregular periods**: cycles lengthen, shorten, or become heavier\n**Hot flashes & night sweats**: fluctuating estrogen makes your thermostat hypersensitive\n**Sleep disruption**: hormonal shifts affect sleep architecture and melatonin regulation\n**Mood changes**: estrogen modulates serotonin — as it fluctuates, so can your emotional baseline\n**Brain fog**: real, documented, and temporary — typically improves post-menopause\n**Weight redistribution**: fat shifts to the abdomen — a direct hormonal response, not a calorie failure",
      },
      {
        id: "what-helps",
        type: "section",
        heading: "What Actually Helps",
        body: "Strength training is the single most impactful intervention — for body composition, bone density, metabolic health, mood, and sleep quality. Start before symptoms peak if possible. Aim for 1.6g protein per kg of body weight daily to preserve muscle mass.",
      },
      {
        id: "hrt",
        type: "section",
        heading: "HRT & Your Options",
        body: "HRT is worth a serious, informed conversation with your doctor. The risk picture has changed significantly since the misinterpreted 2002 WHI study. For most women under 60, the benefits — quality of life, bone protection, cardiovascular protection — outweigh the risks.",
      },
      {
        id: "mindset",
        type: "section",
        heading: "Fight Sister Mindset",
        body: "Perimenopause isn't decline. It's transformation. The women who come through it strongest get informed early, build their support team, and refuse to accept 'just deal with it' from anyone. You don't need to white-knuckle this transition. You need knowledge, tools, and people who get it.",
      },
    ],
    faqs: [
      {
        question: "How do I know if I'm in perimenopause?",
        answer: "Perimenopause is diagnosed based on symptoms and menstrual changes in women over 40. Blood tests (FSH, estradiol) can support but aren't always conclusive. A clinical conversation with your doctor is the best starting point.",
      },
      {
        question: "Is HRT safe? I've heard it causes cancer.",
        answer: "The cancer concern largely stems from the 2002 WHI study that has since been significantly reanalyzed. For most women under 60 starting HRT within 10 years of their last period, evidence suggests it's safe and beneficial. Discuss with a menopause specialist.",
      },
      {
        question: "Will the brain fog go away?",
        answer: "Yes — for most women, cognitive symptoms improve significantly after the menopause transition stabilizes. Research shows verbal memory and processing speed return to pre-perimenopausal levels within a few years.",
      },
    ],
    comments: [
      {
        id: "c1",
        name: "Diane W.",
        avatar: "DW",
        date: "2 days ago",
        text: "I was diagnosed with POI at 38 and felt so completely alone. This article is the first place I've seen it mentioned as a possibility. Thank you for including us.",
        likes: 0,
        replies: [],
      },
      {
        id: "c2",
        name: "Sandra H.",
        avatar: "SH",
        date: "4 days ago",
        text: "The HRT section is so needed. My GP dismissed me three times before I found a menopause specialist. The science has moved but frontline knowledge hasn't caught up.",
        likes: 0,
        replies: [],
      },
    ],
  },
  {
    slug: "nsvs-matter-more-than-scale",
    title: "NSVs That Actually Matter More Than the Scale",
    category: "NSVs",
    desc: "Celebrating the non-scale victories that show real progress: energy, sleep, mood, and strength.",
    date: "January 30, 2026",
    readTime: "5 min",
    wordCount: 980,
    author: "Jessica Martinez",
    authorRole: "Cycle Coach & Nutritionist",
    authorBio: "Certified cycle coach and integrative nutritionist who has helped over 3,000 women work with their hormonal rhythms. Believes food is information, not punishment.",
    authorAvatar: "JM",
    authorImg: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80",
    img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80",
    bannerImg: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1600&q=90",
    tags: ["NSVs", "Progress", "Body Neutrality", "Mindset"],
    tableOfContents: [
      { id: "what-are-nsvs", label: "What Are NSVs?" },
      { id: "nsvs-list", label: "NSVs Worth Celebrating" },
      { id: "track-them", label: "How to Track NSVs" },
      { id: "deeper-truth", label: "The Deeper Truth" },
    ],
    content: [
      {
        id: "intro",
        type: "intro",
        body: "We've been conditioned to measure progress in kilograms. But the most meaningful changes in your health — the ones that transform how you live — rarely show up on a scale. Non-Scale Victories are the real metrics of a life well-lived.",
      },
      {
        id: "what-are-nsvs",
        type: "section",
        heading: "What Are NSVs?",
        body: "NSVs (Non-Scale Victories) are measurable, meaningful improvements in your health and quality of life that the scale cannot capture. They reflect what's actually changing in your body, your mind, and your daily experience.",
      },
      {
        id: "nsvs-list",
        type: "list",
        heading: "NSVs Worth Celebrating",
        body: "**Energy**: waking up without an alarm and feeling rested; having energy at 3pm\n**Sleep quality**: falling asleep within 20 minutes; waking up actually refreshed\n**Strength milestones**: first unassisted pull-up; carrying all the groceries in one trip\n**Mood stability**: fewer crashes; a longer fuse; moments of genuine contentment\n**Cycle improvements**: less PMS, lighter cramps, more predictable timing\n**Relationship with food**: eating without guilt; stopping when full; enjoying meals\n**Confidence**: wearing something you wouldn't have before; taking up space",
      },
      {
        id: "track-them",
        type: "section",
        heading: "How to Track NSVs",
        body: "Keep a simple note on your phone. At the end of each week, write one non-scale thing that felt different, better, or worth noticing. Over months, you'll have documented a transformation the scale could never capture.",
      },
      {
        id: "deeper-truth",
        type: "section",
        heading: "The Deeper Truth",
        body: "The scale measures gravity's pull on your body. That's all. It cannot measure your energy, your strength, your joy, or your worth. When you shift your attention to NSVs, you stop chasing a number — and start building a life.",
      },
    ],
    faqs: [
      {
        question: "How do I stop obsessing over the scale?",
        answer: "Start by tracking one NSV per week. Over time, you'll build evidence that other metrics matter more. Some women also benefit from putting the scale away entirely for 30–90 days while building a new relationship with progress.",
      },
      {
        question: "What if my doctor only focuses on my weight?",
        answer: "You can advocate for yourself by bringing NSV data to appointments — improved energy, better sleep, more consistent cycles. Ask your doctor to assess metabolic markers, not just BMI. If they refuse to engage beyond weight, seeking a second opinion is reasonable.",
      },
    ],
    comments: [
      {
        id: "c1",
        name: "Yuki T.",
        avatar: "YT",
        date: "2 days ago",
        text: "I cried reading the confidence NSV. I wore a sleeveless top to a work event last month for the first time in years. The scale hadn't moved, but something inside me had.",
        likes: 0,
        replies: [],
      },
    ],
  },
  {
    slug: "community-transforms-health-journey",
    title: "How Community Transforms Your Health Journey",
    category: "Community",
    desc: "Why fighting alongside others makes all the difference — and how to find your people.",
    date: "January 22, 2026",
    readTime: "6 min",
    wordCount: 1150,
    author: "Dr. Maya Patel",
    authorRole: "Integrative Medicine Doctor",
    authorBio: "Integrative medicine physician specializing in women's hormonal transitions. Combines evidence-based medicine with lifestyle interventions to support women through every stage.",
    authorAvatar: "MP",
    authorImg: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=200&q=80",
    img: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&q=80",
    bannerImg: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1600&q=90",
    tags: ["Community", "Support", "Mindset", "Fight Sisters"],
    tableOfContents: [
      { id: "science", label: "The Science of Community" },
      { id: "what-community-does", label: "What Community Does" },
      { id: "find-people", label: "How to Find Your People" },
      { id: "fight-sisters", label: "The Fight Sisters Difference" },
    ],
    content: [
      {
        id: "intro",
        type: "intro",
        body: "Science has known for decades what we feel intuitively: humans heal better together. But the wellness industry often packages transformation as a solo journey. That framing keeps people stuck.",
      },
      {
        id: "science",
        type: "section",
        heading: "The Science of Community",
        body: "People who pursue health goals with social support achieve better outcomes and sustain them longer. The mechanism isn't just motivation — it's identity. When you belong to a community that shares your values, those values become part of who you are.",
      },
      {
        id: "what-community-does",
        type: "list",
        heading: "What Community Does",
        body: "**Normalizes the hard parts**: knowing 500 other women are in their luteal phase eating chocolate at 10pm changes how you respond to it\n**Provides real information**: the best advice often comes from someone 6 months ahead of you\n**Celebrates with you**: NSVs mean more when someone else witnesses them\n**Holds you accountable without shame**: true community doesn't punish — it helps you understand and try differently",
      },
      {
        id: "find-people",
        type: "list",
        heading: "How to Find Your People",
        body: "Look for communities organized around **specific shared experiences** (perimenopause, cycle syncing, postpartum)\nPrioritize spaces where members **share struggles as freely as wins**\nAvoid communities that center shame, comparison, or extreme approaches",
      },
      {
        id: "fight-sisters",
        type: "section",
        heading: "The Fight Sisters Difference",
        body: "We built this space because we couldn't find what we needed anywhere else. A place where the science is taken seriously, the emotional reality is honored, and no one is alone in the fight. If you haven't introduced yourself yet — now's a good time.",
      },
    ],
    faqs: [
      {
        question: "How do I join the Fight Sisters community?",
        answer: "You can join by signing up at the Fight the Number app, which includes access to our community forums, group challenges, and live sessions with coaches and doctors.",
      },
      {
        question: "Is the community moderated?",
        answer: "Yes — our community is actively moderated by our team and community leads. We have clear guidelines: no diet talk, no before/after comparisons, no shame. We enforce them consistently.",
      },
    ],
    comments: [
      {
        id: "c1",
        name: "Lena S.",
        avatar: "LS",
        date: "1 day ago",
        text: "Finding this community six months ago genuinely changed my life. I came for the cycle info and stayed because of the people. You can't put a number on that.",
        likes: 0,
        replies: [],
      },
      {
        id: "c2",
        name: "Priya M.",
        avatar: "PM",
        date: "3 days ago",
        text: "The point about identity is so powerful. I stopped thinking of myself as someone 'trying to be healthy' and started thinking of myself as a Fight Sister. It sounds small but it changed everything.",
        likes: 0,
        replies: [],
      },
    ],
  },
];