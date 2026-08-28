import type { ClipId, JobId } from "./types";

export type SiteKind =
  | "granola"
  | "figma"
  | "gong"
  | "sfdc-account"
  | "sfdc-opp"
  | "sheets"
  | "gmail"
  | "slack"
  | "gdoc"
  | "linkedin"
  | "research"
  | "page"
  | "clip";

export type ChromeTab = {
  id: string;
  host: string;
  label: string;
};

export type ComputerBeat = {
  pill: string;
  host: string;
  path?: string;
  title: string;
  site: SiteKind;
  clip?: ClipId;
  tabs: ChromeTab[];
};

const granola = { id: "granola", host: "granola.app", label: "Granola" };
const figma = { id: "figma", host: "figma.com", label: "Figma" };
const gmail = { id: "gmail", host: "mail.google.com", label: "Gmail" };
const gdoc = { id: "gdoc", host: "docs.google.com", label: "Docs" };
const linkedin = {
  id: "linkedin",
  host: "www.linkedin.com",
  label: "LinkedIn",
};
const web = { id: "web", host: "dealergroup.example", label: "Dealer group" };

export const SCREENS: Record<JobId, Record<string, ComputerBeat>> = {
  "standardize-room": {
    m1: {
      pill: "Opening Granola",
      host: "granola.app",
      path: "/notes/dealer-group-cox",
      title: "Dealer group <> Cox Automotive",
      site: "granola",
      tabs: [granola, figma, gmail],
    },
    m2: {
      pill: "In Granola",
      host: "granola.app",
      path: "/notes/dealer-group-cox",
      title: "Dealer group <> Cox Automotive",
      site: "granola",
      tabs: [granola, figma, gmail],
    },
    m3: {
      pill: "Pulling Granola, still on the call",
      host: "granola.app",
      path: "/notes/dealer-group-cox",
      title: "Dealer group <> Cox Automotive",
      site: "clip",
      clip: "03-slides-granola",
      tabs: [granola, figma, gmail],
    },
    m4: {
      pill: "Writing the product story into the deck",
      host: "figma.com",
      path: "/file/dealer-group-next-meeting",
      title: "Dealer group next meeting",
      site: "figma",
      tabs: [granola, figma, gmail],
    },
    m5: {
      pill: "Drafting the one-pager",
      host: "figma.com",
      path: "/file/dealer-group-leave-behind",
      title: "Dealer group one-pager",
      site: "figma",
      tabs: [granola, figma, gmail],
    },
    m6: {
      pill: "Building the inside note",
      host: "figma.com",
      path: "/file/dealer-group-forward",
      title: "Inside note",
      site: "figma",
      tabs: [granola, figma, gmail],
    },
    m7: {
      pill: "Drafting in Gmail, not sent",
      host: "mail.google.com",
      path: "/mail/u/0/#drafts",
      title: "Drafts",
      site: "gmail",
      tabs: [granola, figma, gmail],
    },
    m8: {
      pill: "Drafting in Gmail, not sent",
      host: "mail.google.com",
      path: "/mail/u/0/#drafts",
      title: "Drafts",
      site: "gmail",
      tabs: [granola, figma, gmail],
    },
  },
  "legal-redlines": {
    m1: {
      pill: "Opening Gmail",
      host: "mail.google.com",
      path: "/mail/u/0/#inbox",
      title: "Inbox",
      site: "gmail",
      tabs: [gmail, gdoc],
    },
    m2: {
      pill: "Drafting so you do not chase product",
      host: "mail.google.com",
      path: "/mail/u/0/#inbox",
      title: "Inbox",
      site: "clip",
      clip: "01-morning-inbox",
      tabs: [gmail, gdoc],
    },
    m3: {
      pill: "Drafting the morning reply, not sent",
      host: "docs.google.com",
      path: "/document/d/dealer-group-questions",
      title: "Dealer group product questions",
      site: "gdoc",
      tabs: [gmail, gdoc],
    },
    m4: {
      pill: "Drafting in Gmail, not sent",
      host: "mail.google.com",
      path: "/mail/u/0/#drafts",
      title: "Drafts",
      site: "gmail",
      tabs: [gmail, gdoc],
    },
    m5: {
      pill: "Drafting in Gmail, not sent",
      host: "mail.google.com",
      path: "/mail/u/0/#drafts",
      title: "Drafts",
      site: "gmail",
      tabs: [gmail, gdoc],
    },
  },
  "attach-engine": {
    m1: {
      pill: "Researching the account",
      host: "dealergroup.example",
      path: "/digital-retail",
      title: "Digital retail · dealer group",
      site: "research",
      tabs: [web, gdoc, linkedin, gmail],
    },
    m2: {
      pill: "Pulling public signals",
      host: "dealergroup.example",
      path: "/inventory",
      title: "Inventory · dealer group",
      site: "clip",
      clip: "02-prospecting-pg",
      tabs: [web, gdoc, linkedin, gmail],
    },
    m3: {
      pill: "Writing the 3-why hypothesis",
      host: "docs.google.com",
      path: "/document/d/dealer-group-3-why",
      title: "Dealer group 3-why",
      site: "gdoc",
      tabs: [web, gdoc, linkedin, gmail],
    },
    m4: {
      pill: "Naming who would care",
      host: "docs.google.com",
      path: "/document/d/dealer-group-3-why",
      title: "Dealer group 3-why",
      site: "gdoc",
      tabs: [web, gdoc, linkedin, gmail],
    },
    m5: {
      pill: "Drafting LinkedIn, not sent",
      host: "www.linkedin.com",
      path: "/messaging/compose",
      title: "Message",
      site: "linkedin",
      tabs: [web, gdoc, linkedin, gmail],
    },
    m6: {
      pill: "Drafting in Gmail, not sent",
      host: "mail.google.com",
      path: "/mail/u/0/#drafts",
      title: "Drafts",
      site: "gmail",
      tabs: [web, gdoc, linkedin, gmail],
    },
    m7: {
      pill: "Building a page for this account",
      host: "pages.internal",
      path: "/dealer-group-map",
      title: "For this dealer group",
      site: "page",
      tabs: [web, gdoc, linkedin, gmail],
    },
    m8: {
      pill: "Drafts parked. Nothing sent",
      host: "mail.google.com",
      path: "/mail/u/0/#drafts",
      title: "Drafts",
      site: "gmail",
      tabs: [web, gdoc, linkedin, gmail],
    },
  },
};

export function beatFor(
  jobId: JobId,
  messageId: string | undefined,
): ComputerBeat | undefined {
  if (!messageId) return undefined;
  return SCREENS[jobId]?.[messageId];
}
