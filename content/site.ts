export interface SocialLink {
  label: string;
  href: string;
}

export interface Portrait {
  src: string;
  alt: string;
}

export interface SiteConfig {
  name: string;
  role: string;
  location: string;
  email: string;
  resumeHref: string;
  /** Short intro shown on the home hero. */
  intro: string;
  /** Longer about paragraphs. */
  about: string[];
  /** Headshot shown in the About section. */
  portrait?: Portrait;
  socials: SocialLink[];
}

export const site: SiteConfig = {
  name: "Ryder Sitcawich",
  role: "Computer Science & Philosophy, University of Pennsylvania",
  location: "Philadelphia, PA",
  email: "rydersitcawich@gmail.com",
  resumeHref: "/Ryder_Sitcawich_Resume.pdf",
  intro:
    "I like to architect challenging systems from the bottom up. From distributed cloud platforms and operating systems to data-center simulations, I get a lot of satisfaction from being the person who understands the code, the key design decisions, and the why.",
  about: [
    "I'm a recent graduate of the University of Pennsylvania where I studied Computer Science and Philosophy with a minor in Math. Most of my favorite work is pretty low-level: schedulers, distributed key-value stores, fault tolerance, and the math that decides when a system should push its limits. I've also done a fair amount of frontend development through clubs, internships, and coursework.",
    "Outside of building, I was a Head TA for CIS 1200, one of Penn's biggest CS courses, where I led a 40-person teaching team supporting 200-400 students a semester. I've spent the last two summers shipping production software at Meta and Travelers.",
    "When I'm not at a keyboard you'll probably find me cooking, lifting, playing soccer, or at a poker table.",
  ],
  portrait: {
    src: "/projects/Headshot.png",
    alt: "Portrait of Ryder Sitcawich",
  },
  socials: [
    { label: "GitHub", href: "https://github.com/rydersitcawich" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/ryder-sitcawich/" },
    { label: "Email", href: "mailto:rydersitcawich@gmail.com" },
  ],
};
