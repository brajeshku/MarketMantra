import { ArrowRight } from "@/components/icons";
import { BrandMark } from "@/components/brand-mark";
import { contactDetails } from "@/data/site-content";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="page-shell footer-main">
        <div className="footer-brand">
          <BrandMark compact />
          <p>
            Learn the market with clarity, practice and a thoughtful approach
            to risk.
          </p>
          <div className="social-links">
            <a href="#stories" aria-label="Instagram">
              ig
            </a>
            <a href="#stories" aria-label="Facebook">
              f
            </a>
            <a href="#stories" aria-label="YouTube">
              ▶
            </a>
            <a href="#stories" aria-label="LinkedIn">
              in
            </a>
          </div>
        </div>

        <div className="footer-column">
          <b>Explore</b>
          <a href="#about">About us</a>
          <a href="#courses">Courses</a>
          <a href="#approach">Our approach</a>
          <a href="#stories">Student stories</a>
        </div>

        <div className="footer-column">
          <b>Get in touch</b>
          <a href={contactDetails.primaryPhoneHref}>
            {contactDetails.primaryPhone}
          </a>
          <a href={contactDetails.secondaryPhoneHref}>
            {contactDetails.secondaryPhone}
          </a>
          <a href={contactDetails.emailHref}>{contactDetails.email}</a>
          <span>{contactDetails.location}</span>
        </div>

        <div className="footer-column footer-news">
          <b>Stay curious</b>
          <p>
            Get in touch to learn about upcoming batches and course details.
          </p>
          <a className="footer-enquire" href="#enquire">
            Talk to a counsellor <ArrowRight size={15} />
          </a>
        </div>
      </div>

      <div className="page-shell footer-bottom">
        <span>© 2026 Market Mantra WealthOrbit. All rights reserved.</span>
        <span>
          <a href="#enquire">Terms</a>
          <a href="#enquire">Privacy</a>
          <a href="#enquire">Disclaimer</a>
        </span>
      </div>
      <div className="page-shell footer-disclaimer">
        Educational content only. Market information is illustrative in this
        prototype and is not investment advice. Securities market investments
        are subject to market risks. Review all relevant documents before
        investing.
      </div>
    </footer>
  );
}
