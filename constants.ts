import { MapPin, Music, Award, Sunset, UserCheck, ShieldAlert, Ticket, Users, AlertTriangle, Trash2, Clock, Backpack, Camera } from 'lucide-react';
import { TimelineItem, RuleItem, ContactInfo } from './types';

export const EVENT_DETAILS = {
  title: "শিক্ষা সফর ২০২৫",
  slogan: "চলো হারিয়ে যাই প্রকৃতির মাঝে! ✨",
  organizer: "কোডেক্স আইটি সলিউশন এন্ড কম্পিউটার ট্রেনিং ইনস্টিটিউট",
  date: "2025", 
  reportingTime: "সকাল ৬:০০ টা (শার্প)",
  departureTime: "সকাল ৬:৩০ মিনিট",
  location: "কোডেক্স অফিস প্রাঙ্গণ / কলসি দিঘী পকেট গেইট (ইপিজেড)",
  warning: "সতর্কতা: ঘড়ির কাঁটা ৬:৩০ পেরোলেই বাস স্টার্ট দিবে, কারো জন্য অপেক্ষা করা সম্ভব হবে না!"
};

export const ITINERARY: TimelineItem[] = [
  {
    id: 1,
    location: "মহামায়া লেক",
    description: "পাহাড় ও লেকের মিতালী",
    activities: ["সাংস্কৃতিক প্রতিযোগিতা ও আড্ডা", "দুপুরের রাজকীয় ভোজ"],
    icon: Music,
    image: "https://picsum.photos/800/600?random=1" 
  },
  {
    id: 2,
    location: "গুলিয়াখালী সী-বিচ",
    description: "সবুজ ঘাস ও সমুদ্রের মেলবন্ধন",
    activities: ["মেমোরি টেস্ট গেম (স্মৃতি পরীক্ষা)", "লটারি ড্র ও আকর্ষণীয় পুরস্কার বিতরণী"],
    icon: Award,
    image: "https://picsum.photos/800/600?random=2"
  },
  {
    id: 3,
    location: "ভাটিয়ারী লেক",
    description: "শর্তসাপেক্ষে",
    activities: ["হাতে সময় থাকলে গোধূলি লগ্নে আমরা ভাটিয়ারী হয়েই ঘরে ফিরব"],
    icon: Sunset,
    image: "https://picsum.photos/800/600?random=3",
    isOptional: true
  }
];

export const RULES: RuleItem[] = [
  {
    id: 1,
    title: "সিট প্ল্যান",
    description: "বাসে যেই সিট দিয়ে যাত্রা শুরু করবেন, ফেরার পথেও সেটাই আপনার নির্ধারিত আসন।",
    icon: UserCheck
  },
  {
    id: 2,
    title: "সময়ানুবর্তিতা",
    description: "প্রতিটি স্পটে দেওয়া নির্ধারিত সময় মেনে চলুন। একজনের দেরি পুরো দলের আনন্দের সময় কমিয়ে দিতে পারে।",
    icon: Clock
  },
  {
    id: 3,
    title: "ডিসিপ্লিন",
    description: "বাসের ভেতর এবং ট্যুর স্পটে ভদ্রতা ও শৃঙ্খলা আমাদের প্রতিষ্ঠানের পরিচয়। উচ্চস্বরে গান বা হইচই করে অন্যের অসুবিধা করা যাবে না।",
    icon: Users
  },
  {
    id: 4,
    title: "পরিচ্ছন্নতা",
    description: "প্রকৃতি আমাদের সম্পদ। চিপসের প্যাকেট, বোতল বা কোনো ময়লা নির্দিষ্ট স্থান ছাড়া ফেলা সম্পূর্ণ নিষেধ।",
    icon: Trash2
  },
  {
    id: 5,
    title: "নিরাপত্তা ও ছবি তোলা",
    description: "ঝুঁকিপূর্ণ স্থানে সেলফি তোলা থেকে বিরত থাকুন। মহামায়ায় অনুমতি ছাড়া বাস থেকে নামা বা দলছুট হওয়া নিষেধ।",
    icon: Camera
  },
  {
    id: 6,
    title: "নিজ দায়িত্বে",
    description: "টিকেট, টোকেন, মোবাইল বা টাকা-পয়সা সযত্নে রাখবেন। নিজের ভুলের কারণে কিছু হারালে বা বাস মিস করলে কর্তৃপক্ষ দায়ী নয়।",
    icon: Ticket
  },
  {
    id: 7,
    title: "প্রস্তুতি",
    description: "আরামদায়ক পোশাক ও জুতা পরুন। সাথে পাওয়ার ব্যাংক, সানগ্লাস, ছাতা এবং প্রয়োজনীয় ঔষধ রাখা ভালো।",
    icon: Backpack
  },
  {
    id: 8,
    title: "সহযোগিতা",
    description: "যেকোনো প্রয়োজনে বা অসুস্থবোধ করলে সাথে সাথে গাইড বা ভলান্টিয়ার ভাইদের জানান। আমরা সবাই একটি পরিবার।",
    icon: AlertTriangle
  }
];

export const CONTACT: ContactInfo = {
  name: "রিদুয়ানুল হক",
  phones: ["01838505621", "01975505621"]
};