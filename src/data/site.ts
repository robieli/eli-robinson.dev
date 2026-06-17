/**
 * All site copy lives here so real content can replace the lorem ipsum
 * without touching any component markup.
 */

export interface Project {
  title: string;
  description: string;
  tags: string[];
  href?: string;
}

export interface TimelineEntry {
  period: string;
  title: string;
  place: string;
  description: string;
}

export const site = {
  name: "Eli Robinson",
  tagline: "Computer Science & Linguistics",
  institution: "University of Michigan",
  location: "Ann Arbor, Michigan",
  resumeUrl: "/resume.pdf",
} as const;

export const hero = {
  headline: "Eli Robinson",
  subhead:
    "Studying the structure of languages — the ones people speak and the ones machines run.",
} as const;

export const about = {
  paragraphs: [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
  ],
  pullQuote:
    "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.",
} as const;

export const projects: Project[] = [
  {
    title: "Lorem Ipsum Dolor",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae ab illo.",
    tags: ["TypeScript", "Astro", "NLP"],
    href: "#",
  },
  {
    title: "Consectetur Adipiscing",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.",
    tags: ["Python", "Linguistics"],
    href: "#",
  },
  {
    title: "Tempor Incididunt",
    description:
      "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.",
    tags: ["React", "D3"],
    href: "#",
  },
  {
    title: "Magna Aliqua",
    description:
      "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae.",
    tags: ["Rust", "CLI"],
  },
];

export const education: TimelineEntry[] = [
  {
    period: "Aug 2023 — May 2027",
    title: "B.S. Computer Science & Linguistics",
    place: "University of Michigan - Ann Arbor",
    description:
      "Pursuing a Bachelor's degree double-majoring in Computer Science and Linguistics. Cumulative GPA: 3.665.",
  },
];

export const experience: TimelineEntry[] = [
  {
    period: "May 2025 — present",
    title: "Software Development Intern",
    place: "MemorAIz - Bologna, Italy",
    description:
      "On-site software development internship building and shipping product features.",
  },
  {
    period: "Sep 2023 — present",
    title: "Website Designer",
    place:
      "University of Michigan: Student Life Technology Services - Ann Arbor, MI",
    description:
      "Part-time, remote role designing and maintaining websites for Student Life Technology Services.",
  },
];

export const contactLinks = [
  { label: "Email", href: "mailto:robieli@umich.edu" },
  { label: "GitHub", href: "https://github.com/robieli" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/elijah-f-robinson" },
] as const;
