export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  platform: string;
  location: string;
  rating: number;
  ratingScore: string;
  badge?: string;
  avatarUrl?: string;
  projectType: string;
}

export const TESTIMONIALS_ROW_1: Testimonial[] = [
  {
    id: "review-martin",
    quote:
      "Very satisfied with the landing page for my app, thank you very much for the excellent work!",
    author: "Ober Tetti",
    role: "Project Owner",
    platform: "Fiverr",
    location: "Italy",
    rating: 5,
    ratingScore: "5.0/5.0",
    badge: "Verified Buyer",

    projectType: "SaaS Dashboard Frontend",
  },
  {
    id: "review-alex",
    quote:
      "I had the pleasure of working with Kamran on the front-end development for our dashboard, which we plan to integrate into our app. His expertise, attention to detail, and commitment to delivering high-quality work exceeded my expectations. Kamran was highly responsive, implemented feedback efficiently, and brought valuable insights to improve the user experience. I am extremely satisfied with his work and look forward to hiring him again for future projects. Highly recommended!",
    author: "Martin Snyder",
    role: "Project Owner",
    platform: "Fiverr",
    location: "United States",
    rating: 5,
    ratingScore: "5.0/5.0",
    badge: "Verified Order",
    avatarUrl: "/images/martin.webp",
    projectType: "Full-Stack Web App",
  },
  {
    id: "review-sarah",
    quote:
      "Kamran is a true professional who approaches every task with exceptional attention to detail. He guides you through the entire journey, from the initial project discussion to the final delivery, making the process seamless and stress-free. Kamran delivers genuinely high-quality, professional solutions that align with and even exceed industry standards. His expertise in coding is evident in the polished and well-structured final results. Kamran employs advanced technologies and best practices, ensuring the solutions are both modern and reliable. He is incredibly responsive, addressing any concerns or questions with speed and precision. His dedication to understanding and incorporating client feedback is unmatched. Moreover, Kamran often completes the work ahead of the agreed deadlines without compromising quality. His fluency in communication and his ability to collaborate effectively make working with him an absolute pleasure. I highly recommend Kamran for anyone seeking a talented, responsible, and efficient freelancer who consistently delivers top-tier results!",
    author: "Ser Ghei",
    role: "Head of Growth",
    platform: "Fiverr",
    location: "Poland",
    rating: 5,
    ratingScore: "5.0/5.0",
    badge: "Verified Order",
    avatarUrl: "/images/sergehi.jpg",
    projectType: "B2B Website Redesign",
  },
];

export const TESTIMONIALS_ROW_2: Testimonial[] = [
  {
    id: "review-david",
    quote:
      "Kamran Shekh truly excelled in delivering top-notch code with exceptional attention to detail and professionalism. Working with him was a breeze thanks to his deep understanding, quick responsiveness, and proactive communication. Can't recommend him enough!",
    author: "Rob Paddock",
    role: "Product Lead",
    platform: "Fiverr",
    location: "United Kingdom",
    rating: 5,
    ratingScore: "5.0/5.0",
    badge: "Verified Buyer",
    avatarUrl: "/images/rob.webp",
    projectType: "React & API Architecture",
  },
  {
    id: "review-elena",
    quote:
      "Kamran is a honest and fair web developer, with great communications skills which allowed us to work great when building our product. He is respectful was able to resolve issues in a very timely manner. Great Job! 5/5 stars",
    author: "Chatalk",
    role: "Startup Co-Founder",
    platform: "Fiverr",
    location: "United States",
    rating: 5,
    ratingScore: "5.0/5.0",
    badge: "Verified Order",
    projectType: "SaaS Landing & Product UI",
  },
  {
    id: "review-marcus",
    quote:
      "Kamran was very responsive and did a good job. He was also responsive to feedback and cared about the quality of work. I would work with him again in the future.",
    author: "Thomas Schneider",
    role: "Project Owner",
    platform: "Upwork",
    location: "United States",
    rating: 5,
    ratingScore: "5.0/5.0",
    badge: "Verified Order",
    avatarUrl: "/images/thomas.webp",
    projectType: "React Component & Landing Page",
  },
];
