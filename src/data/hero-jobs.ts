export type HeroJob = {
  id: string;
  label: string;
  account: string;
  signal: string;
  summary: string;
  result: string;
  user: string;
  reply: string;
};

export type HeroJobs = readonly [
  HeroJob,
  HeroJob,
  HeroJob,
  HeroJob,
  HeroJob,
  HeroJob,
  HeroJob,
  HeroJob,
];

export const HERO_JOBS: HeroJobs = [
  {
    id: "sales-outbound",
    label: "Sales Outbound",
    account: "Dealer group",
    signal: "Public site names digital retail and lot inventory",
    summary:
      "I checked its public site and careers page. I drafted outreach around inventory, Autotrader listings, and the online buying path.",
    result: "Outreach drafts ready",
    user: "show me the dealer principal note",
    reply: "It is ready for your review.",
  },
  {
    id: "account-research",
    label: "Account Research",
    account: "OEM account",
    signal: "Public site lists dealer software and marketplace work",
    summary:
      "I mapped the public site, open roles, and relevant Cox Automotive products. The brief covers Autotrader, Kelley Blue Book, and Dealertrack.",
    result: "Account brief ready",
    user: "brief me before the call",
    reply: "Sent. I will keep the brief current.",
  },
  {
    id: "call-follow-up",
    label: "Call Follow-up",
    account: "Dealer group",
    signal: "Call ended after a discussion on inventory and listings",
    summary:
      "I turned the call notes into a follow-up about inventory and Autotrader. Dealertrack and Kelley Blue Book stay out until they come up.",
    result: "Follow-up draft ready",
    user: "show me the follow-up",
    reply: "Drafted. It is ready for your review.",
  },
  {
    id: "deal-desk",
    label: "Deal Desk",
    account: "Marketplace account",
    signal: "Dealer asked how listings connect to the lot record",
    summary:
      "I checked the product sources and drafted a simple map. Autotrader carries the listing. Inventory holds the lot record.",
    result: "Product map ready",
    user: "show me the product map",
    reply: "The draft is ready for your review.",
  },
  {
    id: "pipeline-health",
    label: "Pipeline Health",
    account: "Dealer group",
    signal: "Open opportunity has no next step",
    summary:
      "I read the open notes and found the missing next meeting. I drafted a next step without changing the stage or forecast.",
    result: "Pipeline note ready",
    user: "draft a next step",
    reply: "Done. You still choose when to send it.",
  },
  {
    id: "renewal-risk",
    label: "Renewal Risk",
    account: "Dealer group",
    signal: "Support thread asks about listings and lot inventory",
    summary:
      "I read the support thread and drafted a recap of the Cox Automotive products involved, with source links for each answer.",
    result: "Customer recap ready",
    user: "show me the recap",
    reply: "It is ready for your review.",
  },
  {
    id: "competitive-intel",
    label: "Competitive Intel",
    account: "OEM account",
    signal: "Public page compares marketplace listing tools",
    summary:
      "I used public pages to compare the named Cox Automotive products with the listing tool already in view.",
    result: "Source-backed comparison ready",
    user: "add this to my leave-behind",
    reply: "Added. The source links are attached.",
  },
  {
    id: "sales-chief-of-staff",
    label: "Sales Chief of Staff",
    account: "Cox seller book",
    signal: "Inbox and calendar have work waiting",
    summary:
      "I checked the inbox and calendar, then queued outbound drafts, follow-ups, and account research. You choose what goes out.",
    result: "Morning queue ready",
    user: "start with the dealer group",
    reply: "Opening that account now. The rest stays in the queue.",
  },
];
