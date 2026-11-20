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
            <div className="practice-screen">
              <span className="practice-screen__dots">
                <i />
                <i />
                <i />
              </span>
              <div className="practice-screen__chart">
                {[25, 40, 31, 51, 44, 68, 57, 76, 64, 95, 83].map(
                  (height, index) => (
                    <span
                      key={height + "-" + index}
                      style={{ height }}
                    />
                  ),
                )}
              </div>
              <svg viewBox="0 0 280 95" preserveAspectRatio="none">
                <path
                  d="M0 74 C30 67 29 59 51 65 S83 49 101 52 S135 26 158 42 S184 34 202 38 S231 21 249 26 S268 14 280 10"
                  fill="none"
                  stroke="#57d9fc"
                  strokeWidth="2.5"
                />
              </svg>
            </div>
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
