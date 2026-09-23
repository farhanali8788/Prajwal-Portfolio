// =============================================================
//  SINGLE SOURCE OF TRUTH
//  Edit this file to update any copy across the whole site.
//  Most details below are pulled from Prajwal's CV.
// =============================================================

import {
  FiInstagram,
  FiYoutube,
  FiLinkedin,
  FiMail,
  FiPhone,
} from "react-icons/fi";

export const profile = {
  name: "Prajwal Kokate",
  firstName: "Prajwal",
  lastName: "Kokate",
  role: "Cinematographer & Editor",
  // NOTE: the brief asked for "5+ years". The CV states 3+ years.
  // Set whichever is accurate — it is only referenced here.
  yearsLabel: "3+ Years of Creating Visual Stories",
  basedIn: "Nagpur · Pune, India",
  company: "Media Forum",
  tagline:
    "I don’t just record moments.\nI create emotions that people remember.",
  email: "prajwalkokate333@gmail.com",
  phone: "+91 99758 41931",
  whatsapp: "+91 94223 89529",

  instagram: "_sanskari_",
  // Drop a file at /public/showreel.mp4 and set this to '/showreel.mp4'
  // to make the "Watch Showreel" button play a real video.
  showreel: "",
};

export const nav = [
  { label: "About", href: "#about" },
  { label: "Works", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const aboutCopy = [
  "For over three years I have lived behind the camera — shaping light, framing tension, and cutting moments into stories that stay with people long after the screen goes dark.",
  "My work moves between commercial films, brand films, real estate, advertisements and podcasts. Whether it is a fast cut for a gym or a slow, deliberate frame for a cafe, the craft is the same: find the emotion, then build everything around it.",
  "I currently create with Media Forum, and freelance with brands who care about how their story looks and feels.",
];

export const stats = [
  { value: 500, suffix: "+", label: "Real Estate Shoots" },
  { value: 200, suffix: "+", label: "Commercial Projects" },
  { value: 100, suffix: "+", label: "Freelance Edits" },
  // { value: 1, prefix: "", suffix: "st", label: "Best Cinematography" },
];

export const services = [
  "Commercial Films",
  "Brand Films",
  "Real Estate Films",
  "Advertisements",
  "Podcasts",
  "Visual Direction",
  "Color Grading",
  "Storytelling",
];

export const experience = [
  {
    year: "Now",
    role: "Cinematographer & Editor",
    org: "Media Forum",
    detail:
      "Leading brand films, commercial ads, real estate videos and podcast production end to end — from shoot to final grade.",
    tags: ["Brand Films", "Commercials", "Real Estate", "Podcasts"],
  },
  {
    year: "2023",
    role: "Cinematography & Editing",
    org: "Vithoba — Brand Campaigns",
    detail:
      "Produced brand films and ad videos: directing the shoot, operating camera, and editing the final cut for digital platforms.",
    tags: ["Shoot", "Cinematography", "Edit"],
  },
  {
    year: "2022",
    role: "Freelance Editor",
    org: "Independent",
    detail:
      "Delivered 100+ editing projects and 200+ shoots for gyms, restaurants and cafes — building a reputation for fast, clean, story-led cuts.",
    tags: ["100+ Edits", "200+ Shoots"],
  },
  {
    year: "2021",
    role: "Video Editing Intern",
    org: "Amol Markad Films, Pune",
    detail:
      "A one-year internship learning the discipline of the edit suite — pacing, rhythm, and the grammar of cinematic sequences.",
    tags: ["Internship", "Post-Production"],
  },
  {
    year: "2020",
    role: "Certification — Cinematography & Editing",
    org: "AMF Institute, Pune · Zee Institute of Creative Arts",
    detail:
      "Formal training in cinematography and the Adobe suite — Premiere Pro, After Effects and Photoshop modules.",
    tags: ["Training", "Adobe Suite"],
  },
];

export const award = {
  title: "1st Prize — Best Cinematography & Editing",
  event: "Short Film Competition",
  by: "Zee Institute of Creative Arts, Nagpur · Super 30 “Nazariya”",
};

// Featured work — categories are real (from the CV); client names and
// covers are sample placeholders. Swap `client`, `cover` and `video`.
export const works = [
  {
    title: "The Hazra Falls",
    category: "Documentory",
    client: "Forest Department",
    year: "2026",
    cover: "/assets/hazra_falls_TN.webp",
    video:
      "https://drive.google.com/file/d/1Bpn7xmaa2V44E_5sMm0N6ClqBeYP2RVg/view?usp=drive_link",
    ratio: "wide",
  },

  {
    title: "Earth Day",
    category: "Cinematic Video",
    // client: "",
    year: "2025",
    cover: "/assets/Earth_Day.png",
    video:
      "https://drive.google.com/file/d/1dBQXzrvvuA8Z40CVnuQHQYbeqLUPuuQQ/view?usp=drive_link",
    ratio: "wide",
  },
  {
    title: "Nazariya",
    category: "Shortfilm",
    // client: "Studio Session",
    year: "2024",
    cover: "/assets/nazariya.png",
    video:
      "https://drive.google.com/file/d/1CGCMGc13fvIdlWnJTTsmlpmI_z3CsSFZ/view?usp=drive_link",
    ratio: "wide",
  },
  {
    title: "Environment Day",
    category: "Cinematic",
    // client: "Local Studio",
    year: "2026",
    cover: "/assets/Environment_day.webp",
    video:
      "https://drive.google.com/file/d/14dF04QGOIvKL2tLmHoGIx1xVPz4zaVD6/view?usp=drive_link",
    ratio: "wide",
  },

  {
    title: "Mother's Day",
    category: "Cinematic",
    // client: "Independent Cafe",
    year: "2026",
    cover: "/assets/mother's_day.webp",
    video:
      "https://drive.google.com/file/d/1-zy2PRdsQkL023KgEuuMBE2YA5PnQD5r/view?usp=drive_link",
    ratio: "wide",
  },

  {
    title: "Labour's Day",
    category: "Cinematic",
    // client: "Fine Dining",
    year: "2026",
    cover: "/assets/labour's_day.png",
    video:
      "https://drive.google.com/file/d/1azFRjiv5mgEjt-S73Ma3MVdQc6tVPFT4/view?usp=drive_link",
    ratio: "wide",
  },
];

// Gallery + Behind the scenes share the uploaded BTS frames.
// export const gallery = [
//   { src: "/assets/bts-1.jpg", tag: "On Location", span: "lg" },
//   { src: "/assets/bts-2.jpg", tag: "The Monitor", span: "sm" },
//   { src: "/assets/bts-3.jpg", tag: "Direction", span: "sm" },
//   { src: "/assets/bts-2.jpg", tag: "Framing", span: "sm" },
//   { src: "/assets/bts-1.jpg", tag: "Golden Hour", span: "sm" },
//   { src: "/assets/bts-3.jpg", tag: "The Crew", span: "lg" },
// ];

// export const behindTheScenes = [
//   {
//     src: "/assets/bts-1.jpg",
//     label: "Camera",
//     n: "01",
//     video:
//       "https://drive.google.com/file/d/1ZpwQFzhOdhQIXvFLK508b8hDy7hdh--N/view",
//   },
//   { src: "/assets/bts-3.jpg", label: "Direction", n: "02", video: "" },
//   { src: "/assets/bts-2.jpg", label: "The Monitor", n: "03", video: "" },
//   { src: "/assets/bts-1.jpg", label: "Lighting", n: "04", video: "" },
//   { src: "/assets/bts-3.jpg", label: "The Crew", n: "05", video: "" },
// ];

export const skills = [
  { name: "Premiere Pro", note: "Edit" },
  { name: "After Effects", note: "Motion" },
  // { name: "DaVinci Resolve", note: "Grade" },
  // { name: "Photoshop", note: "Design" },
  // { name: "CapCut", note: "Short-form" },
  // { name: "VN Editor", note: "Mobile" },
  { name: "Color Grading", note: "Look" },
  { name: "Lighting", note: "Light" },
  { name: "Camera Operation", note: "Shoot" },
  { name: "Storyboarding", note: "Plan" },
  { name: "Motion Graphics", note: "Animate" },
  { name: "Visual Direction", note: "Lead" },
];

export const equipment = [
  { name: "Cinema Camera", spec: "Full-frame body", use: "Primary capture" },
  { name: "Prime Lenses", spec: "Fast cinema glass", use: "Shallow depth" },
  { name: "Aerial Drone", spec: "4K stabilised", use: "Establishing shots" },
  { name: "Gimbal", spec: "3-axis stabiliser", use: "Moving frames" },
  { name: "Lighting Kit", spec: "LED + modifiers", use: "Shaping light" },
  { name: "Microphones", spec: "Shotgun + lav", use: "Clean audio" },
];

export const testimonials = [
  {
    quote:
      "Prajwal made our property feel like a place you’d want to live in, not just a listing. The film sold the space before anyone walked in.",
    name: "Real Estate Developer",
    role: "Sample testimonial — replace with a real quote",
  },
  {
    quote:
      "He understood the brand instantly. Every frame felt intentional, and the edit had a rhythm that kept people watching to the end.",
    name: "Brand Manager",
    role: "Sample testimonial — replace with a real quote",
  },
  {
    quote:
      "Calm on set, ruthless in the edit. Our cafe has never looked this good. The lighting alone changed how people see us.",
    name: "Cafe Owner",
    role: "Sample testimonial — replace with a real quote",
  },
  {
    quote:
      "From podcast to ad campaign, the storytelling carried through. He doesn’t just shoot — he directs the feeling.",
    name: "Studio Producer",
    role: "Sample testimonial — replace with a real quote",
  },
];

export const socials = [
  {
    label: "Instagram",
    handle: "@_sanskari_",
    href: "https://instagram.com/_sanskari_",
    Icon: FiInstagram,
  },
  {
    label: "YouTube",
    handle: "Prajwal Kokate",
    href: "https://youtube.com/@prajwalkokatefilms?si=lhTPF6si7zUykqpB",
    Icon: FiYoutube,
  },

  {
    label: "Email",
    handle: profile.email,
    href: `mailto:${profile.email}`,
    Icon: FiMail,
  },
  {
    label: "Phone",
    handle: profile.phone,
    href: `tel:${profile.phone.replace(/\s/g, "")}`,
    Icon: FiPhone,
  },
];

export const budgets = [
  "Under ₹25k",
  "₹25k – ₹75k",
  "₹75k – ₹2L",
  "₹2L +",
  "Not sure yet",
];
