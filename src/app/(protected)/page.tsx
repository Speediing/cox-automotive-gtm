import { CompareTable } from "@/components/CompareTable";
import { HeroDemo } from "@/components/HeroDemo";
import { HeroTelemetry } from "@/components/HeroTelemetry";
import { JobSection } from "@/components/JobSection";
import { QuoteWall } from "@/components/QuoteWall";
import { RosterChart } from "@/components/RosterChart";
import { SiteNav } from "@/components/SiteNav";
import { JOBS } from "@/data/jobs";

export default function HomePage() {
  return (
    <main id="top">
      <div className="hero-watercolor">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="hero-watercolor-image"
          src="/brand/watercolor-pad.jpg"
          alt=""
        />
        <SiteNav />
      </div>

      <div className="report is-pinned">
        <div className="report-hero">
          <HeroTelemetry />
          <HeroDemo />

          <section className="usecase-framing">
            <p className="eyebrow">Three sample use cases</p>
            <h2>
              Every seller gets a fleet of agents with their own computers.
              Work your sellers already do can run through Grok Bot.
            </h2>
            <p>Three proposals from a wider set.</p>
          </section>

          <div className="metric-grid">
            {JOBS.map((job) => (
              <a
                key={job.id}
                className="metric-card"
                href={`#${job.id}`}
              >
                <div className="metric-card-top">
                  <p>Sample {String(job.number).padStart(2, "0")}</p>
                </div>
                <h2>{job.title}</h2>
                <p className="metric-trigger">Starts when {job.trigger.toLowerCase()}</p>
              </a>
            ))}
          </div>
        </div>

        <RosterChart />

        <div id="jobs">
          {JOBS.map((job) => (
            <JobSection key={job.id} job={job} />
          ))}
        </div>
      </div>

      <div className="orbit-break" aria-hidden>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/brand/watercolor-orbit.jpg" alt="" />
      </div>

      <div className="report">
        <CompareTable />
        <QuoteWall />
      </div>

      <footer className="site-footer">
        <div>
          <p className="footer-title">Cox Automotive x SpaceXAI</p>
        </div>
        <address className="footer-contact">
          <strong>Biz Eshetu</strong>
          <a href="mailto:biz.eshetu@cursor.com">
            biz.eshetu@cursor.com
          </a>
        </address>
      </footer>
    </main>
  );
}
