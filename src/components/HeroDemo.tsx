"use client";

import { useState } from "react";
import { HERO_JOBS, type HeroJob } from "@/data/hero-jobs";

function CheckIcon() {
  return (
    <svg viewBox="0 0 16 16" width="11" height="11" aria-hidden>
      <circle cx="8" cy="8" r="8" fill="currentColor" />
      <path
        d="M4.8 8.2 7 10.4 11.3 5.8"
        fill="none"
        stroke="#fff"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MonitorIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden>
      <rect
        x="3"
        y="4.5"
        width="18"
        height="12"
        rx="2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path d="M8 20h8M12 16.5V20" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

function AgentMark({ job }: { job: HeroJob }) {
  switch (job.id) {
    case "account-research":
      return (
        <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden>
          <circle
            cx="10.5"
            cy="10.5"
            r="5.2"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <path d="M14.4 14.4 18 18" stroke="currentColor" strokeWidth="1.8" />
        </svg>
      );
    case "call-follow-up":
      return (
        <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden>
          <path
            d="M7.2 4.8h3.2l.9 2.3-1.6 1.6a10 10 0 0 0 5.6 5.6l1.6-1.6 2.3.9v3.2A1.6 1.6 0 0 1 17.6 18 12.8 12.8 0 0 1 6 6.4 1.6 1.6 0 0 1 7.2 4.8Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "deal-desk":
      return (
        <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden>
          <rect
            x="4.5"
            y="6"
            width="15"
            height="12"
            rx="1.6"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
          />
          <path d="M4.5 10h15M9 6v4" stroke="currentColor" strokeWidth="1.7" />
        </svg>
      );
    case "pipeline-health":
      return (
        <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden>
          <path
            d="M5 16.5 9.2 12l3.2 3.1L19 8.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "renewal-risk":
      return (
        <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden>
          <path
            d="M12 5.5 4.8 18h14.4L12 5.5Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinejoin="round"
          />
          <path d="M12 10v4.2" stroke="currentColor" strokeWidth="1.7" />
          <circle cx="12" cy="16.2" r="0.7" fill="currentColor" />
        </svg>
      );
    case "competitive-intel":
      return (
        <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden>
          <circle
            cx="12"
            cy="12"
            r="7"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
          />
          <path
            d="M12 5v14M5 12h14M7.2 7.8c1.6 1.2 3.2 1.8 4.8 1.8s3.2-.6 4.8-1.8M7.2 16.2c1.6-1.2 3.2-1.8 4.8-1.8s3.2.6 4.8 1.8"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>
      );
    case "sales-chief-of-staff":
      return (
        <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden>
          <circle
            cx="12"
            cy="8"
            r="3.1"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
          />
          <path
            d="M6.2 18.2c.7-3 2.7-4.5 5.8-4.5s5.1 1.5 5.8 4.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden>
          <path
            d="M13 4.5 6.8 13.2h5.1L11 19.5l6.3-8.8h-5.1L13 4.5Z"
            fill="currentColor"
          />
        </svg>
      );
  }
}

export function HeroDemo() {
  const [activeId, setActiveId] = useState(HERO_JOBS[0].id);
  const job = HERO_JOBS.find((item) => item.id === activeId) ?? HERO_JOBS[0];

  return (
    <section className="hero">
      <div className="hero-copy">
        <p className="eyebrow">Agents for every Cox seller</p>
        <h1>The agents that work while your reps sell.</h1>
        <p className="hero-intro">
          Grok Bot listens to calls, watches the inbox, and researches dealer,
          OEM, and marketplace accounts. Work starts it. Not another prompt.
        </p>
        <div className="hero-phone-jobs" aria-label="Choose a Grok Bot job">
          {HERO_JOBS.map((item) => {
            const active = item.id === job.id;
            return (
              <button
                key={item.id}
                type="button"
                className={active ? "is-active" : undefined}
                aria-pressed={active}
                onClick={() => setActiveId(item.id)}
              >
                {active ? <CheckIcon /> : null}
                {item.label}
              </button>
            );
          })}
        </div>
      </div>

      <aside className="hero-bot-demo" aria-label="Live Grok Bot phone demo">
        <div className="hero-phone">
          <div className="hero-phone-notch" aria-hidden />
          <header className="hero-phone-header">
            <span className="hero-phone-back" aria-hidden>
              ‹
            </span>
            <span className="hero-phone-agent">
              <i>
                <AgentMark job={job} />
              </i>
              <span>
                <strong>{job.label} Agent</strong>
                <small>Working in the cloud</small>
              </span>
            </span>
            <span className="hero-phone-desktop" aria-hidden>
              <MonitorIcon />
            </span>
          </header>
          <div className="hero-phone-thread" key={job.id}>
            <article className="hero-phone-work">
              <p className="hero-phone-work-label">New signal detected</p>
              <p className="hero-phone-work-meta">
                <span>Account</span>
                {job.account}
              </p>
              <p className="hero-phone-work-meta">
                <span>Signal</span>
                {job.signal}
              </p>
              <p className="hero-phone-work-copy">
                {job.summary}
                <strong>{job.result}</strong>
              </p>
            </article>
            <p className="hero-phone-message is-user">{job.user}</p>
            <p className="hero-phone-message is-bot">{job.reply}</p>
            <footer className="hero-phone-composer">
              <span aria-hidden>+</span>
              <p>Message {job.label} Agent</p>
              <span aria-hidden>
                <svg viewBox="0 0 24 24" width="16" height="16">
                  <circle cx="12" cy="12" r="9.2" fill="currentColor" />
                  <path
                    d="M8.4 12h6.4M12.2 8.8 15.6 12l-3.4 3.2"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </footer>
          </div>
        </div>
      </aside>
    </section>
  );
}
