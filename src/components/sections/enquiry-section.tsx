import { Mail, Phone } from "@/components/icons";
import { ContactForm } from "@/components/contact-form";
import { contactDetails } from "@/data/site-content";

export function EnquirySection() {
  return (
    <section className="cta-section" id="enquire">
      <div className="page-shell cta-layout">
        <div className="cta-copy">
          <span className="eyebrow eyebrow--bright">
            YOUR LEARNING JOURNEY STARTS HERE
          </span>
          <h2>
            Take the first step
            <br />
            <span>towards financial confidence.</span>
          </h2>
          <p>
            Tell us what you want to learn. Our team can help you find the right
            course path.
          </p>
          <div className="cta-contact">
            <a href={contactDetails.primaryPhoneHref}>
              <Phone size={17} /> {contactDetails.primaryPhone}
            </a>
            <a href={contactDetails.emailHref}>
              <Mail size={17} /> Send us an email
            </a>
          </div>
        </div>

        <div className="cta-form-wrap">
          <div className="cta-form-heading">
            <span>
              <Mail size={17} />
            </span>
            <div>
              <b>Request a call back</b>
              <small>Share a few details and we’ll guide you.</small>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
