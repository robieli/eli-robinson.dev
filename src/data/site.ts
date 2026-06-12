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
    period: "2023 — present",
    title: "B.S. Computer Science & Linguistics",
    place: "University of Michigan, Ann Arbor",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Relevant coursework: lorem, ipsum, dolor, sit amet.",
  },
];

export const experience: TimelineEntry[] = [
  {
    period: "Summer 2025",
    title: "Software Engineering Intern",
    place: "Lorem Ipsum Co.",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    period: "2024 — 2025",
    title: "Research Assistant",
    place: "Dolor Sit Lab, University of Michigan",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
];

export const contactLinks = [
  { label: "Email", href: "mailto:hello@eli-robinson.dev" },
  { label: "GitHub", href: "https://github.com/eli-robinson" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/eli-robinson" },
] as const;
