import type { JobId } from "./types";

export type FleetBot = {
  id: string;
  name: string;
  blurb: string;
  color: string;
  jobId?: JobId;
  mark?: string;
  seat?: boolean;
  status?: string;
};

export const FLEET: FleetBot[] = [
  {
    id: "rep",
    name: "Cox seller",
    blurb: "Stays on the call and in the inbox. Room, Paper, and Outbound keep the surrounding work moving.",
    color: "#E8E8ED",
    mark: "CS",
    seat: true,
  },
  {
    id: "room",
    name: "Room",
    blurb: "Watches the call. Rewrites the open deck into a Cox product story for this room.",
    jobId: "standardize-room",
    color: "#117d9b",
    mark: "R",
    status: "Computer online",
  },
  {
    id: "inbox",
    name: "Paper",
    blurb: "Watches dealer questions. Drafts answers from named product sources before the seller opens Gmail.",
    jobId: "legal-redlines",
    color: "#FF375F",
    mark: "P",
    status: "Computer online",
  },
  {
    id: "cross-sell",
    name: "Outbound",
    blurb: "Watches dealer, OEM, and marketplace lists. Writes the 3-why and queues drafts.",
    jobId: "attach-engine",
    color: "#FF9500",
    mark: "O",
    status: "Computer online",
  },
];
