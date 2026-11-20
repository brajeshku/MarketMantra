import {
  ArrowRight,
  Award,
  BookOpenCheck,
  LineChart,
  UsersRound,
} from "@/components/icons";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { publicAsset } from "@/lib/public-asset";

export function HeroSection() {
  return (
    <section className="hero" id="home">
      <div className="hero-media" aria-hidden="true">
        <Image
          className="hero__photo"
          src={publicAsset("/market-mantra-hero-final.jpg")}
          alt=""
          fill
          priority
          sizes="(max-width: 860px) 100vw, 65vw"
        />
      </div>
      <div className="hero-inner page-shell">
        <div className="hero-copy">
          <span className="hero-kicker">STOCK MARKET EDUCATION &amp; TRAINING INSTITUTE</span>
          <h1>
            Learn Stock Market
            <br />
            <span>Build Your Financial Future</span>
          </h1>
          <p className="hero-lead">
            Market Mantra WealthOrbit Pvt. Ltd. is a premier stock market
            education and training institute, empowering individuals with
            practical knowledge, expert guidance and real-time market insights.
          </p>
          <div className="hero-pillars">
            <div>
              <span>
                <BookOpenCheck size={19} />
              </span>
              <b>
                Expert
                <br />
                Faculty
              </b>
            </div>
            <div>
              <span>
                <LineChart size={19} />
              </span>
              <b>
                Practical
                <br />
                Training
              </b>
            </div>
            <div>
              <span>
                <UsersRound size={19} />
              </span>
              <b>
                Lifetime
                <br />
                Mentorship
              </b>
            </div>
            <div>
              <span>
                <Award size={19} />
              </span>
              <b>
                Recognized
                <br />
                Certification
              </b>
            </div>
          </div>
          <div className="hero-actions">
            <Button asChild size="lg">
              <a href="#courses">
                Explore Our Courses <ArrowRight size={17} />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#enquire">Admission Now</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
