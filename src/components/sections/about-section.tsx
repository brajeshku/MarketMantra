import {
  ArrowRight,
  CircleHelp,
  GraduationCap,
  ShieldCheck,
  Sparkles,
  UsersRound,
} from "@/components/icons";
import Image from "next/image";

export function AboutSection() {
  return (
    <section className="about-section" id="about">
      <div className="page-shell about-layout">
        <div className="about-picture">
          <Image
            src="/marketmantra-classroom.jpg"
            alt="Market Mantra classroom prepared for stock market training"
            fill
            sizes="(max-width: 860px) 100vw, 32vw"
          />
          <span className="about-picture__label">
            <span className="pulse-dot" /> A place to learn and grow
          </span>
        </div>

        <div className="about-copy">
          <span className="eyebrow eyebrow--bright">ABOUT MARKET MANTRA</span>
          <h2>
            More than market knowledge.
            <br />
            <span>A foundation for life.</span>
          </h2>
          <p>
            Market Mantra WealthOrbit is here to make financial market learning
            practical and approachable. We bring concepts, guided practice and
            mentorship together in one supportive learning environment.
          </p>
          <div className="about-mission-row">
            <div>
              <span>
                <Sparkles size={19} />
              </span>
              <b>Our vision</b>
              <small>Financial confidence through learning</small>
            </div>
            <div>
              <span>
                <UsersRound size={19} />
              </span>
              <b>Our mission</b>
              <small>Educate · Empower · Build</small>
            </div>
          </div>
          <a className="text-link text-link--bright" href="#enquire">
            Meet the team <ArrowRight size={15} />
          </a>
        </div>

        <div className="about-stats">
          <div>
            <span>
              <GraduationCap size={20} />
            </span>
            <strong>Learn</strong>
            <small>At every level</small>
          </div>
          <div>
            <span>
              <UsersRound size={20} />
            </span>
            <strong>Mentorship</strong>
            <small>Guidance along the way</small>
          </div>
          <div>
            <span>
              <ShieldCheck size={20} />
            </span>
            <strong>Practical</strong>
            <small>Risk-aware learning</small>
          </div>
          <div>
            <span>
              <CircleHelp size={20} />
            </span>
            <strong>For life</strong>
            <small>Stay curious, keep growing</small>
          </div>
        </div>
      </div>
    </section>
  );
}
