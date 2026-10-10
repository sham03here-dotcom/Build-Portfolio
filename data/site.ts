import type { SiteProfile } from "@/types";

/**
 * Site-wide profile + contact content. All Home/header/footer copy lives here.
 * External hrefs are placeholders ("#") until real links are provided.
 */
export const site: SiteProfile = {
  name: "Sham Karthikeyan",
  wordmark: "SHAM",
  role: "UI/UX Designer",
  status: {
    text: "Currently working as a",
    company: "Divami Design Labs",
    companyHref: "https://www.divami.com",
  },
  location: "Originally from Chennai, currently building and designing in Hyderabad.",
  bio: "Worked across brand strategy, visual identity, digital experiences, and product design to create cohesive and user-centric solutions.",
  resumeHref: "/resume/sham-karthikeyan-resume.pdf",
  email: "sham03here@gmail.com",
  contact: [
    { label: "LINKED IN", href: "https://www.linkedin.com/in/karthi-k-" },
    { label: "RESUME", href: "/resume/sham-karthikeyan-resume.pdf" },
    { label: "EMAIL", href: "mailto:sham03here@gmail.com" },
    { label: "INSTAGRAM", href: "https://www.instagram.com/cartee_creates/" },
  ],
  footerHeadline: "NICE TO MEET YOU",
  footerTagline: "Have an idea, a project, or just want to say hi?",
  footerNote: "© 2026 Sham Karthikeyan",
};
