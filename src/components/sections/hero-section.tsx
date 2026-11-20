import {
  ArrowRight,
  ArrowUpRight,
  Award,
  BookOpenCheck,
  LineChart,
  ShieldCheck,
  UsersRound,
} from "@/components/icons";
import { MarketIllustration } from "@/components/market-illustration";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="hero" id="home">
      <div className="hero__backdrop" />
      <div className="hero-inner page-shell">
        <div className="hero-copy">
          <span className="hero-kicker">
            <i /> STOCK MARKET EDUCATION &amp; TRAINING INSTITUTE
          </span>
          <h1>
            Learn the market.
            <br />
            <span>Build your future.</span>
          </h1>
          <p className="hero-lead">
            Build practical market knowledge with expert guidance, structured
            learning and real-world context—at your pace.
          </p>
          <div className="hero-pillars">
            <div>
              <span>
                <BookOpenCheck size={19} />
              </span>
              <b>
                Expert-led
                <br />
                learning
              </b>
            </div>
            <div>
              <span>
                <LineChart size={19} />
              </span>
              <b>
                Practical
                <br />
                training
              </b>
            </div>
            <div>
              <span>
                <UsersRound size={19} />
              </span>
              <b>
                Personal
                <br />
                mentorship
              </b>
            </div>
            <div>
              <span>
                <Award size={19} />
              </span>
              <b>
                Career-ready
                <br />
                skills
              </b>
            </div>
          </div>
          <div className="hero-actions">
            <Button asChild size="lg">
              <a href="#courses">
                Explore our courses <ArrowRight size={17} />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#enquire">Admission enquiry</a>
            </Button>
          </div>
          <div className="hero-assurance">
            <ShieldCheck size={15} /> Education first. Risk awareness always.
          </div>
        </div>
        <div className="hero-art-wrap">
          <MarketIllustration />
        </div>
      </div>
      <div className="hero-bottomline page-shell">
        <span>LEARN</span>
        <span className="line" />
        <span>ANALYZE</span>
        <span className="line" />
        <span>GROW</span>
        <ArrowUpRight size={17} />
      </div>
    </section>
  );
}
