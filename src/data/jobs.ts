import type { Artifact, CroJob, SlideCard } from "./types";

export const COX_STORY_SLIDES: SlideCard[] = [
  {
    n: 4,
    kicker: "Product area",
    voice: "us",
    title: "Inventory and listings",
    body: "Keep lot inventory and public listings in one view. Autotrader is the marketplace in that story.",
  },
  {
    n: 5,
    kicker: "On the deck",
    voice: "us",
    title: "Start with inventory + Autotrader",
    body: "Cox Automotive spans dealer software and marketplaces. Start with inventory management and the listing the shopper sees.",
  },
  {
    n: 6,
    kicker: "Product area",
    voice: "us",
    title: "Digital retail and financing",
    body: "The buy path and the finance path can sit in the same conversation. Dealertrack is the financing product.",
  },
  {
    n: 7,
    kicker: "On the deck",
    voice: "us",
    title: "Dealertrack, then Kelley Blue Book",
    body: "Name Dealertrack for financing. Name Kelley Blue Book when pricing data belongs. Leave the rest off this deck.",
  },
];

export const COX_OVERNIGHT: Extract<Artifact, { kind: "redlines" }> = {
  kind: "redlines",
  title: "Dealer group · overnight product questions",
  paperTitle: "Their questions",
  from: "Dealer contact · overnight",
  marks: [
    {
      text: "How do Autotrader listings relate to the inventory the desk already runs?",
      note: "Autotrader is the marketplace listing. Inventory management is the lot record. Tell one story, not two product tours.",
      take: true,
    },
    {
      text: "What does Kelley Blue Book cover versus a listing?",
      note: "Kelley Blue Book is data and valuation. A listing is the shopper-facing ad. Do not treat them as the same product.",
      take: true,
    },
    {
      text: "Where does Dealertrack sit if the next step is financing?",
      note: "Dealertrack is the financing product in the Cox Automotive set. Name it when the buy path needs a finance step.",
      take: true,
    },
    {
      text: "Can we promise a price, a rollout date, or a usage number?",
      note: "Hold. This pack has no confirmed pricing, dates, or adoption figures. Stay on named product areas only.",
      take: false,
    },
  ],
  reply: {
    to: "Dealer contact",
    subject: "Dealer group product questions. Draft you can review",
    body: "Hi,\n\nShort map from named Cox Automotive products. No price and no rollout claim.\n\nAutotrader is the marketplace listing. Inventory management is the lot record. The useful story is one view of both.\n\nKelley Blue Book is valuation and data. It is not the listing itself.\n\nDealertrack is the financing product when the buy path needs that step.\n\nDigital retail is the online path that sits next to those products.\n\nI can send this as-is or trim it. Draft only.\n\nBest,",
  },
};

export const COX_OUTBOUND: Extract<Artifact, { kind: "outbound" }> = {
  kind: "outbound",
  title: "Dealer group outreach",
  account: "Dealer group",
  hypothesis: [
    {
      k: "Why us",
      body: "Cox Automotive spans marketplaces, dealer software, inventory management, financing, and data. Autotrader, Kelley Blue Book, and Dealertrack are the named products in that set.",
    },
    {
      k: "Why now",
      body: "Digital retail, AI-driven pricing, and real-time inventory are the work in front of dealer, OEM, and marketplace desks. This note maps those areas. It does not claim a live deal.",
    },
    {
      k: "Why them",
      body: "A dealer principal owns the lot and the listings. A digital retail lead lives in inventory, pricing, and the online buy path.",
    },
  ],
  evidence: [
    {
      source: "Public site",
      finding:
        "Sample read of a public site. Digital retail and lot inventory are the opening topics, not proof of a product they already bought.",
    },
    {
      source: "Careers",
      finding:
        "Sample read of open roles. Dealer software and marketplace work name the desk, not a champion.",
    },
    {
      source: "Cox product set",
      finding:
        "Named products only. Autotrader, Kelley Blue Book, Dealertrack, plus inventory, financing, and data services.",
    },
  ],
  targets: [
    {
      name: "Dealer principal",
      role: "Dealer group",
      why: "Owns the lot, the listings, and the retail path.",
    },
    {
      name: "Digital retail lead",
      role: "Dealer group",
      why: "Lives in inventory, pricing, and the online buy path.",
    },
  ],
  page: {
    headline: "A product map for this dealer group",
    body: "Start with inventory and Autotrader listings. Add Dealertrack when financing is in the room. Add Kelley Blue Book when pricing data belongs. No tour of the full catalog.",
  },
};

export const JOBS: CroJob[] = [
  {
    id: "standardize-room",
    number: 1,
    title: "Update decks in real time",
    trigger: "A customer call starts",
    backgroundAction: "Listening to the room + rewriting the open deck",
    problem:
      "A generic deck is a pitch they have already sat through. The useful move is mapping this room to the Cox products that fit, while they are still on.",
    botJob:
      "Granola is in while you are on. The last slides become a Cox product story for this room. Autotrader, Kelley Blue Book, Dealertrack, inventory, and digital retail are the named areas. Not last quarter's catalog.",
    storyboard: [
      {
        when: "Call starts",
        label: "The call starts. Grok is already listening. No prompt needed.",
        scene: "call",
        visual: {
          kind: "live-call",
          title: "Dealer group call",
          people: [
            { initials: "CS", name: "Cox seller" },
            { initials: "DC", name: "Dealer contact" },
            { initials: "YO", name: "You" },
          ],
        },
      },
      {
        when: "Call in progress",
        label: "A product area from the room lands in the notes.",
        scene: "demo",
        visual: {
          kind: "live-transcript",
          phase: "Call in progress",
          topic: "Room topic",
          summary: "How the lot and the listings stay in sync",
          signals: ["Inventory", "Autotrader"],
        },
      },
      {
        when: "Still on",
        label: "Grok maps it to named products and rewrites the open deck.",
        scene: "notes",
        visual: {
          kind: "deck-update",
          eyebrow: "On the deck",
          headline: "Inventory and listings in one view",
          product: "Start with Autotrader",
          status: "Slides updating",
        },
      },
      {
        when: "Before the call ends",
        label: "Present the new slides before the call ends.",
        scene: "deck",
        slides: COX_STORY_SLIDES,
      },
    ],
    unlock:
      "A product story on the slide, plus a next product named for this room, while they are still on.",
    outcome:
      "One live call becomes a Cox product story built for this room, before the call ends.",
    clips: ["03-slides-granola"],
    demo: {
      title: "Room",
      subtitle: "Live call · product story",
      participants: [
        { id: "you", name: "You", role: "you" },
        {
          id: "room",
          name: "Room",
          role: "bot",
          persona: "Turns the live room into slides that name the right Cox products",
          color: "#34C759",
        },
        {
          id: "slides",
          name: "Slides",
          role: "bot",
          persona: "Maps the room to Autotrader, Kelley Blue Book, and Dealertrack",
          color: "#007AFF",
        },
      ],
      messages: [
        {
          id: "m1",
          from: "room",
          kind: "routine",
          body: "Customer call started. I am following Granola and watching for product areas the room actually uses. The open deck stays untouched until there is a map worth writing.",
        },
        {
          id: "m2",
          from: "room",
          kind: "text",
          body: "Room topic is inventory and listings. Mapping both to Autotrader and dealer inventory software now, while the call is still live.",
        },
        {
          id: "m3",
          from: "room",
          kind: "text",
          body: "Still on. The slide is a product story, not a catalog. Inventory and listings first. Financing and Kelley Blue Book only if the room goes there.",
        },
        {
          id: "m4",
          from: "slides",
          kind: "draft",
          draftLabel: "Last slides of the open deck · still on",
          artifact: {
            kind: "slides",
            title: "Product story",
            cards: COX_STORY_SLIDES,
          },
        },
        {
          id: "m5",
          from: "room",
          kind: "draft",
          draftLabel: "One-pager they can forward",
          artifact: {
            kind: "one-pager",
            title: "Dealer group one-pager",
            eyebrow: "One-pager",
            sections: [
              {
                heading: "Product areas in this room",
                body: "Start with inventory management and Autotrader listings. Digital retail if the buy path is in the room. Dealertrack if financing is. Kelley Blue Book if pricing data is.",
              },
              {
                heading: "What stays off the page",
                body: "No price, date, or adoption claim. No extra products. This is a map for this room, not a tour.",
              },
              {
                heading: "Suggested next step",
                body: "A follow-up that stays on the products named above. Bring the dealer contact who owns inventory or digital retail.",
              },
              {
                heading: "What we need from you",
                body: "Confirm which of those product areas stay in the story. Strike the rest before this leaves the draft.",
              },
            ],
          },
        },
        {
          id: "m6",
          from: "room",
          kind: "draft",
          draftLabel: "Note they can send inside",
          artifact: {
            kind: "packet",
            title: "Forward this inside the dealer group",
            fields: [
              {
                label: "Product story",
                value:
                  "Keep lot inventory and Autotrader listings in one view. Add Dealertrack when financing is in the path. Add Kelley Blue Book when pricing data belongs.",
              },
              {
                label: "Why this map",
                value:
                  "Cox Automotive spans marketplaces, dealer software, inventory, financing, and data. This note names the slice that fits this room.",
              },
              {
                label: "Out of scope",
                value:
                  "Pricing, rollout dates, and any claim that a product is already in use. Those stay off this page.",
              },
              {
                label: "Ask for the next meeting",
                value:
                  "A short follow-up. Cox seller plus the dealer contact who owns inventory or digital retail. Stay on the named products.",
              },
            ],
          },
        },
        {
          id: "m7",
          from: "room",
          kind: "draft",
          draftLabel: "Gmail to the dealer contact",
          artifact: {
            kind: "gmail",
            title: "Forward to the dealer contact",
            to: "Dealer contact",
            subject: "Dealer group / Cox Automotive. Product story from today's room",
            body: "Forwarding the internal note from today's room. Inventory and Autotrader first. Dealertrack and Kelley Blue Book only if those areas stay in scope. Nothing else is in the ask.",
          },
        },
        {
          id: "m8",
          from: "room",
          kind: "system",
          body: "Nothing sent. Deck, one-pager, note, and Gmail stay drafts until you tap Send.",
        },
      ],
    },
  },
  {
    id: "legal-redlines",
    number: 2,
    title: "Answer overnight dealer questions",
    trigger: "A dealer or product question lands",
    backgroundAction: "Searching named product sources + drafting a reply",
    problem:
      "A dealer question can turn into a week of Slack across product, sales engineering, and marketing. The seller waits, the dealer waits, and internal experts repeat the same map.",
    botJob:
      "Grok Bot watches for the question, searches named Cox product sources, and drafts a sourced reply. The seller reviews instead of chasing teams.",
    storyboard: [
      {
        when: "Before the rep signs in",
        label: "Product questions land. Grok starts while you are asleep.",
        scene: "notes",
        visual: {
          kind: "procurement-email",
          sender: "Dealer contact · overnight questions",
          subject: "Questions on listings, KBB, and financing",
          label: "Questions in",
        },
      },
      {
        when: "Sources checked",
        label: "Grok has already found and checked the answers.",
        scene: "inspect",
        visual: {
          kind: "answers-found",
          sources: [
            { name: "Autotrader", answer: "Listing vs lot record" },
            { name: "Kelley Blue Book", answer: "Data, not the ad" },
            { name: "Dealertrack", answer: "Financing step" },
          ],
          status: "Sources checked",
        },
      },
      {
        when: "Draft ready",
        label: "A sourced reply is waiting for one-click approval.",
        scene: "send",
        visual: {
          kind: "reply-ready",
          to: "Dealer contact",
          subject: "Listings, KBB, financing · answers",
          status: "Draft ready",
        },
      },
    ],
    unlock:
      "Dealer and product questions in. A sendable draft out. No week of internal delay.",
    outcome:
      "Grok finds the named product map, then drafts the answer. No Slack chase and no seller time wasted.",
    clips: ["01-morning-inbox"],
    demo: {
      title: "Paper",
      subtitle: "Overnight questions · draft waiting",
      participants: [
        { id: "you", name: "You", role: "you" },
        {
          id: "paper",
          name: "Paper",
          role: "bot",
          persona: "Reads overnight dealer mail and drafts the reply so you do not chase product",
          color: "#FF375F",
        },
      ],
      messages: [
        {
          id: "m1",
          from: "paper",
          kind: "routine",
          body: "New dealer-group thread detected overnight. Product questions on listings, Kelley Blue Book, and financing. Checking named Autotrader, Kelley Blue Book, and Dealertrack sources while you are offline.",
        },
        {
          id: "m2",
          from: "paper",
          kind: "text",
          body: "Already read it overnight. Draft is waiting. You do not need to ping product or marketing for this one. Nothing sent.",
        },
        {
          id: "m3",
          from: "paper",
          kind: "draft",
          draftLabel: "Questions + reply",
          artifact: COX_OVERNIGHT,
        },
        {
          id: "m4",
          from: "paper",
          kind: "draft",
          draftLabel: "Gmail reply · not sent",
          artifact: {
            kind: "gmail",
            title: "Reply to the dealer contact",
            to: COX_OVERNIGHT.reply.to,
            subject: COX_OVERNIGHT.reply.subject,
            body: COX_OVERNIGHT.reply.body,
          },
        },
        {
          id: "m5",
          from: "paper",
          kind: "system",
          body: "Nothing sent. The reply stays a draft until you tap Send.",
        },
      ],
    },
  },
  {
    id: "attach-engine",
    number: 3,
    title: "Research the account, then draft outreach",
    trigger: "A dealer, OEM, or marketplace account enters your list",
    backgroundAction: "Researching public signals + building reviewed outreach",
    problem:
      "Cold outbound is a generic sequence. No research, no hypothesis, no evidence, and a name from a list. Pipeline that lands starts with why this account, why now, and who would care.",
    botJob:
      "When an account enters your target list, Grok Bot researches it, writes a 3-why, finds public signals, names the seats that would care, then drafts LinkedIn, email, and a page. Draft only. You send.",
    storyboard: [
      {
        when: "No meeting yet",
        label: "A dealer group hits your target list. Grok starts without a prompt.",
        scene: "inspect",
        visual: {
          kind: "account-research",
          account: "Dealer group",
          sources: ["Public site", "Careers", "Cox products"],
          signal: "Digital retail + inventory",
        },
      },
      {
        when: "Hypothesis ready",
        label: "It turns public signals into a sharp 3-why.",
        scene: "notes",
        visual: {
          kind: "three-why",
          items: [
            { label: "Why us", answer: "Cox product set" },
            { label: "Why now", answer: "Digital retail" },
            { label: "Why them", answer: "Own the lot" },
          ],
        },
      },
      {
        when: "Drafts queued",
        label: "The right seat gets personalized drafts.",
        scene: "map",
        visual: {
          kind: "outreach-ready",
          person: "Dealer principal · dealer group",
          channels: ["LinkedIn", "Email", "Account page"],
          status: "Drafts queued · none sent",
        },
      },
      {
        when: "Ready for your click",
        label: "Research, message, and account page, all built from public signals.",
        scene: "send",
        artifact: COX_OUTBOUND,
      },
    ],
    unlock:
      "Research, a 3-why, evidence, named seats, and sendable drafts. Nothing fires until you tap.",
    outcome:
      "One account in. Research, a 3-why, named seats, and personalized outreach out.",
    clips: ["02-prospecting-pg"],
    demo: {
      title: "Outbound",
      subtitle: "Research to reviewed outreach",
      participants: [
        { id: "you", name: "You", role: "you" },
        {
          id: "attach",
          name: "Outbound",
          role: "bot",
          persona: "Researches the account, writes the 3-why, and drafts the outreach",
          color: "#FF9500",
        },
      ],
      messages: [
        {
          id: "m1",
          from: "attach",
          kind: "routine",
          body: "Dealer group entered your target-account list. No meeting yet. Researching the account, building the 3-why, and finding the seats that would care. Drafts only.",
        },
        {
          id: "m2",
          from: "attach",
          kind: "text",
          body: "In the account. Public site, careers, Cox product set. Sample read: digital retail and lot inventory show up on the public site. Writing the 3-why from that, not from a persona list.",
        },
        {
          id: "m3",
          from: "attach",
          kind: "draft",
          draftLabel: "3-why hypothesis",
          artifact: {
            kind: "packet",
            title: "Dealer group 3-why",
            fields: COX_OUTBOUND.hypothesis.map((item) => ({
              label: item.k,
              value: item.body,
            })),
          },
        },
        {
          id: "m4",
          from: "attach",
          kind: "draft",
          draftLabel: "Evidence + who cares",
          artifact: {
            kind: "packet",
            title: "Signals, then the seats",
            fields: [
              ...COX_OUTBOUND.evidence.map((item) => ({
                label: item.source,
                value: item.finding,
              })),
              ...COX_OUTBOUND.targets.map((person) => ({
                label: `${person.name} · ${person.role}`,
                value: person.why,
              })),
            ],
          },
        },
        {
          id: "m5",
          from: "attach",
          kind: "draft",
          draftLabel: "LinkedIn · not sent",
          artifact: {
            kind: "linkedin",
            title: "LinkedIn to the dealer principal",
            to: "Dealer principal",
            role: "Dealer group",
            body: "Your public site talks about digital retail and lot inventory. A short note on how Autotrader listings and inventory management sit in one view, with Dealertrack if financing is in the path. Draft only. Nothing sent.",
          },
        },
        {
          id: "m6",
          from: "attach",
          kind: "draft",
          draftLabel: "Gmail · not sent",
          artifact: {
            kind: "gmail",
            title: "Email to the dealer principal",
            to: "Dealer principal, dealer group",
            subject: "Dealer group, listings, and the Cox product map",
            body: "Public pages point at digital retail and inventory. I put a one-page map on how Autotrader, inventory management, Dealertrack, and Kelley Blue Book can sit in that story. No catalog. Draft only until you tap Send.",
          },
        },
        {
          id: "m7",
          from: "attach",
          kind: "draft",
          draftLabel: "Page for this account · not live",
          artifact: {
            kind: "one-pager",
            title: COX_OUTBOUND.page.headline,
            eyebrow: "Page for Dealer group",
            sections: [
              {
                heading: "What we saw",
                body:
                  COX_OUTBOUND.evidence[0]?.finding ??
                  "Public site. Digital retail and inventory are the opening map.",
              },
              {
                heading: "Why this desk",
                body:
                  COX_OUTBOUND.hypothesis.find((item) => item.k === "Why them")
                    ?.body ?? "Dealer principal owns the lot and the listings.",
              },
              {
                heading: "How the products map",
                body: COX_OUTBOUND.page.body,
              },
            ],
          },
        },
        {
          id: "m8",
          from: "attach",
          kind: "system",
          body: "Nothing sent. LinkedIn, Gmail, and the page stay drafts until you tap Send.",
        },
      ],
    },
  },
];

export function getJob(id: string): CroJob | undefined {
  return JOBS.find((job) => job.id === id);
}
