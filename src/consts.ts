import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "Markets & Microchips",
  DESCRIPTION: "Markets & Microchips is an accessible and lightweight blog.",
  EMAIL: "panchamb63@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 5,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Markets & Microchips is an accessible theme for Astro.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Where I have worked and what I have done.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION:
    "A collection of my projects with links to repositories and live demos.",
};

export const SOCIALS: Socials = [
  {
    NAME: "X (formerly Twitter)",
    HREF: "https://twitter.com/pancham_barman",
  },
  {
    NAME: "GitHub",
    HREF: "https://github.com/Pancham555",
  },
  {
    NAME: "Website",
    HREF: "https://pancham-barman.vercel.app",
  },
];
