"use client";

import { type FormEvent, type ReactNode, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  BookOpenCheck,
  ChartCandlestick,
  Check,
  ChevronDown,
  CircleHelp,
  Clock3,
  GraduationCap,
  HandCoins,
  LineChart,
  Mail,
  Menu,
  Phone,
  Play,
  ShieldCheck,
  Sparkles,
  UsersRound,
  X,
} from "@/components/icons";
import { BrandMark } from "@/components/brand-mark";
import { MarketIllustration } from "@/components/market-illustration";
import { Button } from "@/components/ui/button";

const courses = [
  {
    number: "01",
    title: "Fundamental & Technical Insights",
    subtitle: "Build a stronger investing foundation",
    duration: "45 days",
    price: "₹9,999",
    theme: "blue",
    modules: ["Introduction to the stock market", "Trading mechanism & terminology", "Market factors and indices", "Fundamental analysis basics"],
  },
  {
    number: "02",
    title: "A Complete Guide to Stock Market",
    subtitle: "From your first chart to a clear process",
    duration: "60 days",
    price: "₹14,999",
    theme: "cyan",
    modules: ["How markets work", "Factors that move stock prices", "Fundamental analysis & valuation", "Chart reading essentials"],
  },
  {
    number: "03",
    title: "Advanced Equity, Commodity & Forex",
    subtitle: "Expand your market knowledge",
    duration: "70 days",
    price: "₹19,999",
    theme: "gold",
    modules: ["Equity and commodity foundations", "Derivatives and risk concepts", "Options terminology", "Portfolio construction principles"],
  },
];

const indices = [
  { name: "NIFTY 50", value: "24,415.25", change: "+0.59%", positive: true },
  { name: "SENSEX", value: "80,220.12", change: "+0.63%", positive: true },
  { name: "BANK NIFTY", value: "52,376.40", change: "+0.62%", positive: true },
];

function CourseArtwork({ theme }: { theme: string }) {
  return (
    <div className={`course-art course-art--${theme}`} aria-hidden="true">
      <div className="course-art__glow" />
      <div className="course-art__tag">MARKET MANTRA · LEARNING SERIES</div>
      <div className="course-art__chart-label"><span>Market movement</span><b>+08.42%</b></div>
      <div className="course-art__bars">
        {[31, 47, 40, 62, 51, 72, 59, 81, 68, 94, 76, 105].map((height, index) => (
          <span key={index} style={{ height }} className={index % 4 === 2 ? "is-muted" : ""} />
        ))}
      </div>
      <svg className="course-art__trend" viewBox="0 0 300 100" preserveAspectRatio="none">
        <path d="M0 82 C24 75 29 61 49 68 S81 58 98 49 S130 57 149 43 S184 38 201 48 S234 22 254 29 S281 15 300 12" fill="none" stroke="currentColor" strokeWidth="3" />
      </svg>
      <div className="course-art__watermark">{theme === "gold" ? "₹" : "↗"}</div>
    </div>
  );
}

function SectionHeading({ eyebrow, title, children, light = false }: { eyebrow: string; title: ReactNode; children?: ReactNode; light?: boolean }) {
  return (
    <div className={`section-heading${light ? " section-heading--light" : ""}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {children && <p>{children}</p>}
    </div>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [
    ["Home", "#home"],
    ["About us", "#about"],
    ["Courses", "#courses"],
    ["Our approach", "#approach"],
    ["Stories", "#stories"],
    ["Contact", "#enquire"],
  ];

  return (
    <header className="site-header">
      <div className="header-inner page-shell">
        <BrandMark />
        <nav className={`main-nav${menuOpen ? " main-nav--open" : ""}`} aria-label="Main navigation">
          {links.map(([label, href], index) => (
            <a key={href} href={href} className={index === 0 ? "is-current" : ""} onClick={() => setMenuOpen(false)}>
              {label}{label === "Courses" && <ChevronDown size={13} />}
            </a>
          ))}
          <a className="mobile-nav-cta" href="#enquire" onClick={() => setMenuOpen(false)}>Enquire now <ArrowRight size={15} /></a>
        </nav>
        <div className="header-actions">
          <a className="header-phone" href="tel:+919155518117" aria-label="Call Market Mantra">
            <span className="header-phone__icon"><Phone size={16} /></span>
            <span><b>+91 91555 18117</b><b>+91 91555 28117</b></span>
          </a>
          <Button asChild size="sm" className="header-cta"><a href="#enquire">Enquire now <ArrowRight size={15} /></a></Button>
        </div>
        <button className="menu-toggle" type="button" aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} onClick={() => setMenuOpen((value) => !value)}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </header>
  );
}

function CourseCard({ course }: { course: (typeof courses)[number] }) {
  return (
    <article className="course-card">
      <CourseArtwork theme={course.theme} />
      <div className="course-card__body">
        <div className="course-card__eyebrow"><span>COURSE {course.number}</span><span className="course-rating"><Sparkles size={12} /> Practical</span></div>
        <h3>{course.title}</h3>
        <p className="course-card__subtitle">{course.subtitle}</p>
        <div className="course-meta">
          <span><Clock3 size={15} /> {course.duration}</span>
          <b>{course.price}</b>
        </div>
        <div className="course-modules">
          <b>What you’ll explore</b>
          <ul>{course.modules.map((module) => <li key={module}><span />{module}</li>)}</ul>
        </div>
        <Button asChild className="course-enroll"><a href="#enquire">Enquire about this course <ArrowRight size={15} /></a></Button>
      </div>
    </article>
  );
}

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <label>Full name<input name="name" placeholder="Your name" autoComplete="name" required /></label>
        <label>Phone / WhatsApp<input name="phone" type="tel" placeholder="+91" autoComplete="tel" required /></label>
        <label>City<input name="city" placeholder="Your city" autoComplete="address-level2" /></label>
        <label>Interested in<select name="course" defaultValue=""><option value="" disabled>Select a course</option><option>Fundamental &amp; Technical Insights</option><option>Complete Guide to Stock Market</option><option>Advanced Equity, Commodity &amp; Forex</option><option>All three courses</option></select></label>
      </div>
      <Button type="submit" size="lg" className="form-submit">Request a call back <ArrowRight size={16} /></Button>
      <p className="form-note">Demo form only — your details are not sent or stored.</p>
      {submitted && <p className="form-success" role="status"><Check size={16} /> Form preview submitted. Connect a backend to receive enquiries.</p>}
    </form>
  );
}

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <section className="hero" id="home">
          <div className="hero__backdrop" />
          <div className="hero-inner page-shell">
            <div className="hero-copy">
              <span className="hero-kicker"><i /> STOCK MARKET EDUCATION &amp; TRAINING INSTITUTE</span>
              <h1>Learn the market.<br /><span>Build your future.</span></h1>
              <p className="hero-lead">Build practical market knowledge with expert guidance, structured learning and real-world context—at your pace.</p>
              <div className="hero-pillars">
                <div><span><BookOpenCheck size={19} /></span><b>Expert-led<br />learning</b></div>
                <div><span><LineChart size={19} /></span><b>Practical<br />training</b></div>
                <div><span><UsersRound size={19} /></span><b>Personal<br />mentorship</b></div>
                <div><span><Award size={19} /></span><b>Career-ready<br />skills</b></div>
              </div>
              <div className="hero-actions">
                <Button asChild size="lg"><a href="#courses">Explore our courses <ArrowRight size={17} /></a></Button>
                <Button asChild variant="outline" size="lg"><a href="#enquire">Admission enquiry</a></Button>
              </div>
              <div className="hero-assurance"><ShieldCheck size={15} /> Education first. Risk awareness always.</div>
            </div>
            <div className="hero-art-wrap"><MarketIllustration /></div>
          </div>
          <div className="hero-bottomline page-shell"><span>LEARN</span><span className="line" /><span>ANALYZE</span><span className="line" /><span>GROW</span><ArrowUpRight size={17} /></div>
        </section>

        <section className="market-strip" aria-label="Illustrative market index values">
          <div className="market-strip__inner page-shell">
            {indices.map((index) => (
              <div className="index-item" key={index.name}>
                <span className="index-icon"><ChartCandlestick size={20} /></span>
                <span className="index-data"><small>{index.name}</small><strong>{index.value}</strong></span>
                <span className="index-change"><ArrowUpRight size={14} />{index.change}</span>
              </div>
            ))}
            <div className="market-strip__note"><span className="pulse-dot" /><span><b>Learn with context</b><small>Illustrative sample values · not live data</small></span></div>
          </div>
        </section>

        <section className="courses-section section-pad" id="courses">
          <div className="page-shell">
            <div className="courses-heading-row">
              <SectionHeading eyebrow="OUR COURSES" title={<>Structured learning for <span>real market experience</span></>}>
                Choose a learning path that suits your goals, from market fundamentals to advanced concepts.
              </SectionHeading>
              <a className="text-link" href="#enquire">Find your course <ArrowRight size={15} /></a>
            </div>
            <div className="course-grid">{courses.map((course) => <CourseCard key={course.number} course={course} />)}</div>
            <div className="bundle-bar">
              <div className="bundle-title"><span className="bundle-cap"><GraduationCap size={25} /></span><span><small>ALL THREE COURSES</small><strong>One complete learning path</strong></span></div>
              <div className="bundle-price"><small>Bundle offer</small><strong>₹24,999</strong><del>₹44,997</del></div>
              <div className="bundle-perks"><span><Check size={15} /> Structured progression</span><span><Check size={15} /> Mentor support</span><span><Check size={15} /> Limited cohort</span></div>
              <Button asChild variant="light"><a href="#enquire">Ask about the bundle <ArrowRight size={15} /></a></Button>
            </div>
            <p className="course-disclaimer">Course availability, fees and curriculum are subject to confirmation by Market Mantra.</p>
          </div>
        </section>

        <section className="approach-section section-pad" id="approach">
          <div className="page-shell approach-layout">
            <div className="approach-copy">
              <SectionHeading eyebrow="WHY MARKET MANTRA?" title={<>Build a process.<br /><span>Grow with confidence.</span></>}>
                Learn to think critically about markets, understand risk and make informed decisions for yourself.
              </SectionHeading>
              <div className="approach-benefits">
                <div><span><ChartCandlestick size={20} /></span><b>Market concepts<br />made clear</b></div>
                <div><span><LineChart size={20} /></span><b>Analysis from<br />the ground up</b></div>
                <div><span><UsersRound size={20} /></span><b>Personalised<br />mentorship</b></div>
                <div><span><HandCoins size={20} /></span><b>Risk-aware<br />learning</b></div>
              </div>
              <a className="text-link text-link--dark" href="#about">Discover our approach <ArrowRight size={15} /></a>
            </div>
            <div className="practice-panel">
              <div className="practice-panel__image">
                <div className="practice-screen">
                  <span className="practice-screen__dots"><i /><i /><i /></span>
                  <div className="practice-screen__chart">
                    {[25, 40, 31, 51, 44, 68, 57, 76, 64, 95, 83].map((height, index) => <span key={index} style={{ height }} />)}
                  </div>
                  <svg viewBox="0 0 280 95" preserveAspectRatio="none"><path d="M0 74 C30 67 29 59 51 65 S83 49 101 52 S135 26 158 42 S184 34 202 38 S231 21 249 26 S268 14 280 10" fill="none" stroke="#57d9fc" strokeWidth="2.5" /></svg>
                </div>
                <span className="practice-panel__badge"><Play size={15} fill="currentColor" /> Learn by doing</span>
              </div>
              <div className="practice-panel__caption"><span><small>THE MARKET MANTRA METHOD</small><b>Practical knowledge for real-world decisions.</b></span><span className="practice-arrow"><ArrowUpRight size={21} /></span></div>
            </div>
          </div>
        </section>

        <section className="about-section" id="about">
          <div className="page-shell about-layout">
            <div className="about-picture">
              <div className="classroom-illustration">
                <div className="classroom-illustration__window"><span /><span /><span /></div>
                <div className="classroom-illustration__board"><span className="board-logo">M<span>↗</span></span><b>MARKET MANTRA</b><small>Learn with Edge</small><div className="board-chart"><i /><i /><i /><i /><i /><i /><i /></div></div>
                <div className="classroom-illustration__desk"><i /><i /><i /></div>
                <div className="classroom-illustration__plant"><i /><i /><i /><b /></div>
              </div>
              <span className="about-picture__label"><span className="pulse-dot" /> A place to learn and grow</span>
            </div>
            <div className="about-copy">
              <span className="eyebrow eyebrow--bright">ABOUT MARKET MANTRA</span>
              <h2>More than market knowledge.<br /><span>A foundation for life.</span></h2>
              <p>Market Mantra WealthOrbit is here to make financial market learning practical and approachable. We bring concepts, guided practice and mentorship together in one supportive learning environment.</p>
              <div className="about-mission-row">
                <div><span><Sparkles size={19} /></span><b>Our vision</b><small>Financial confidence through learning</small></div>
                <div><span><UsersRound size={19} /></span><b>Our mission</b><small>Educate · Empower · Build</small></div>
              </div>
              <a className="text-link text-link--bright" href="#enquire">Meet the team <ArrowRight size={15} /></a>
            </div>
            <div className="about-stats">
              <div><span><GraduationCap size={20} /></span><strong>Learn</strong><small>At every level</small></div>
              <div><span><UsersRound size={20} /></span><strong>Mentorship</strong><small>Guidance along the way</small></div>
              <div><span><ShieldCheck size={20} /></span><strong>Practical</strong><small>Risk-aware learning</small></div>
              <div><span><CircleHelp size={20} /></span><strong>For life</strong><small>Stay curious, keep growing</small></div>
            </div>
          </div>
        </section>

        <section className="testimonials-section section-pad" id="stories">
          <div className="page-shell">
            <div className="testimonials-heading">
              <SectionHeading eyebrow="STUDENT STORIES" title={<>Learning makes a <span>difference.</span></>}>
                The most meaningful progress starts with the right guidance and a willingness to learn.
              </SectionHeading>
              <div className="review-score"><span>★★★★★</span><b>Built around student growth</b><small>Experiences vary. Trading and investing carry risk.</small></div>
            </div>
            <div className="testimonial-grid">
              <article className="testimonial-card"><div className="testimonial-top"><span className="avatar avatar--one">RS</span><span><b>Rohit Sharma</b><small>Student · Ranchi</small></span><span className="quote-mark">“</span></div><p>“The course gave me a clearer direction and helped me understand the basics with more confidence.”</p><div className="testimonial-stars">★★★★★</div></article>
              <article className="testimonial-card"><div className="testimonial-top"><span className="avatar avatar--two">SK</span><span><b>Sneha Kumari</b><small>Student · Ranchi</small></span><span className="quote-mark">“</span></div><p>“The trainers are supportive and explain concepts in a simple way. The practical examples really helped.”</p><div className="testimonial-stars">★★★★★</div></article>
              <article className="testimonial-card"><div className="testimonial-top"><span className="avatar avatar--three">AV</span><span><b>Amit Verma</b><small>Student · Ranchi</small></span><span className="quote-mark">“</span></div><p>“A welcoming learning experience with helpful guidance and an emphasis on understanding the market.”</p><div className="testimonial-stars">★★★★★</div></article>
            </div>
            <p className="testimonial-note">Student quotations shown as prototype copy. Replace with approved, verified testimonials before publishing.</p>
          </div>
        </section>

        <section className="cta-section" id="enquire">
          <div className="page-shell cta-layout">
            <div className="cta-copy"><span className="eyebrow eyebrow--bright">YOUR LEARNING JOURNEY STARTS HERE</span><h2>Take the first step<br /><span>towards financial confidence.</span></h2><p>Tell us what you want to learn. Our team can help you find the right course path.</p><div className="cta-contact"><a href="tel:+919155518117"><Phone size={17} /> +91 91555 18117</a><a href="mailto:marketmantrawealthorbit@gmail.com"><Mail size={17} /> Send us an email</a></div></div>
            <div className="cta-form-wrap"><div className="cta-form-heading"><span><Mail size={17} /></span><div><b>Request a call back</b><small>Share a few details and we’ll guide you.</small></div></div><ContactForm /></div>
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <div className="page-shell footer-main">
          <div className="footer-brand"><BrandMark /><p>Learn the market with clarity, practice and a thoughtful approach to risk.</p><div className="social-links"><a href="#stories" aria-label="Instagram">ig</a><a href="#stories" aria-label="Facebook">f</a><a href="#stories" aria-label="YouTube">▶</a><a href="#stories" aria-label="LinkedIn">in</a></div></div>
          <div className="footer-column"><b>Explore</b><a href="#about">About us</a><a href="#courses">Courses</a><a href="#approach">Our approach</a><a href="#stories">Student stories</a></div>
          <div className="footer-column"><b>Get in touch</b><a href="tel:+919155518117">+91 91555 18117</a><a href="tel:+919155528117">+91 91555 28117</a><a href="mailto:marketmantrawealthorbit@gmail.com">marketmantrawealthorbit@gmail.com</a><span>Ranchi, Jharkhand, India</span></div>
          <div className="footer-column footer-news"><b>Stay curious</b><p>Get in touch to learn about upcoming batches and course details.</p><a className="footer-enquire" href="#enquire">Talk to a counsellor <ArrowRight size={15} /></a></div>
        </div>
        <div className="page-shell footer-bottom"><span>© 2026 Market Mantra WealthOrbit. All rights reserved.</span><span><a href="#enquire">Terms</a><a href="#enquire">Privacy</a><a href="#enquire">Disclaimer</a></span></div>
        <div className="page-shell footer-disclaimer">Educational content only. Market information is illustrative in this prototype and is not investment advice. Securities market investments are subject to market risks. Review all relevant documents before investing.</div>
      </footer>
    </>
  );
}
