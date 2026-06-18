export interface Experience {
  company: string;
  role: string;
  location: string;
  period: string;
  bullets: string[];
}

export const experience: Experience[] = [
  {
    company: "Meta",
    role: "Software Engineer Intern",
    location: "New York, NY",
    period: "May – Aug 2025",
    bullets: [
      "Developed and launched AI Background Themes on Messenger Web using React, GraphQL, and LightSpeed DB — 10,000+ daily themes generated and a 37% increase in Meta AI prompter DAU.",
      "Owned the launch end-to-end: designed A/B experiments, analyzed engagement metrics, coordinated cross-functional QA and dogfooding, and drove the go/no-go decision to launch approval.",
      "Engineered a media-send architecture for Edit Images with AI, bypassing the message composer via LightSpeed DB stored procedures with efficient image processing, optimistic local sends, and server-confirmed delivery.",
    ],
  },
  {
    company: "Travelers",
    role: "Software Engineer Intern",
    location: "St. Paul, MN",
    period: "May 2024 – Present",
    bullets: [
      "Built a full-stack enterprise web app (React + AWS Lambda) to monitor app status and Kubernetes pod health for ~60 applications, each with 6 environments — supporting 6 dev teams and ~50 users.",
      "Integrated CI/CD via Jenkins and Argo; provisioned AWS infrastructure (S3, CloudFront, API Gateway, IAM, Lambda) with Terraform; and automated deployments through Urban Code Deploy.",
      "Implemented backend Lambdas querying RDS/PostgreSQL for app/pod health histories and application groupings, enabling comprehensive visualization and debugging.",
    ],
  },
  {
    company: "UPenn CIS Department",
    role: "Head Teaching Assistant, CIS 1200",
    location: "Philadelphia, PA",
    period: "Jan 2024 – Present",
    bullets: [
      "Lead a 40+ TA team supporting 400 students per semester; coordinate grading, office hours, and recitations.",
      "Design and run weekly new-TA training, mentoring staff on teaching and debugging best practices.",
    ],
  },
];
