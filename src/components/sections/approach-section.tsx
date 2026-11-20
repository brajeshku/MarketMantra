import {
  ArrowRight,
  ArrowUpRight,
  ChartCandlestick,
  HandCoins,
  LineChart,
  Play,
  UsersRound,
} from "@/components/icons";
import { SectionHeading } from "@/components/section-heading";
import Image from "next/image";

export function ApproachSection() {
  return (
    <section className="approach-section section-pad" id="approach">
      <div className="page-shell approach-layout">
        <div className="approach-copy">
          <SectionHeading
            eyebrow="WHY MARKET MANTRA?"
            title={
              <>
                Build a process.
                <br />
                <span>Grow with confidence.</span>
              </>
            }
          >
            Learn to think critically about markets, understand risk and make
            informed decisions for yourself.
          </SectionHeading>
          <div className="approach-benefits">
            <div>
              <span>
                <ChartCandlestick size={20} />
              </span>
              <b>
                Market concepts
                <br />
                made clear
              </b>
            </div>
            <div>
              <span>
                <LineChart size={20} />
              </span>
              <b>
                Analysis from
                <br />
                the ground up
              </b>
            </div>
            <div>
              <span>
                <UsersRound size={20} />
              </span>
              <b>
                Personalised
                <br />
                mentorship
              </b>
            </div>
            <div>
              <span>
                <HandCoins size={20} />
              </span>
              <b>
                Risk-aware
                <br />
                learning
              </b>
            </div>
          </div>
          <a className="text-link text-link--dark" href="#about">
            Discover our approach <ArrowRight size={15} />
          </a>
        </div>

        <div className="practice-panel">
          <div className="practice-panel__image">
            <Image
              src="/marketmantra-practice-laptop.jpg"
              alt="Laptop displaying market charts during a practical learning session"
              fill
              sizes="(max-width: 860px) 100vw, 50vw"
            />
            <span className="practice-panel__scrim" />
            <span className="practice-panel__badge">
              <Play size={15} fill="currentColor" /> Learn by doing
            </span>
          </div>
          <div className="practice-panel__caption">
            <span>
              <small>THE MARKET MANTRA METHOD</small>
              <b>Practical knowledge for real-world decisions.</b>
            </span>
            <span className="practice-arrow">
              <ArrowUpRight size={21} />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
