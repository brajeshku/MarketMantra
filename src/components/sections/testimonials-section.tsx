import { SectionHeading } from "@/components/section-heading";
import Image from "next/image";
import { publicAsset } from "@/lib/public-asset";

export function TestimonialsSection() {
  return (
    <section className="testimonials-section section-pad" id="stories">
      <div className="page-shell">
        <div className="testimonials-heading">
          <SectionHeading
            eyebrow="STUDENT STORIES"
            title={
              <>
                Learning makes a <span>difference.</span>
              </>
            }
          >
            The most meaningful progress starts with the right guidance and a
            willingness to learn.
          </SectionHeading>
          <div className="review-score">
            <span>★★★★★</span>
            <b>Built around student growth</b>
            <small>Experiences vary. Trading and investing carry risk.</small>
          </div>
        </div>

        <div className="testimonial-grid">
          <article className="testimonial-card">
            <div className="testimonial-top">
              <Image className="avatar" src={publicAsset("/student-rohit.jpg")} alt="" width={66} height={66} />
              <span>
                <b>Rohit Sharma</b>
                <small>Student · Ranchi</small>
              </span>
              <span className="quote-mark">“</span>
            </div>
            <p>
              “The course gave me a clearer direction and helped me understand
              the basics with more confidence.”
            </p>
            <div className="testimonial-stars">★★★★★</div>
          </article>

          <article className="testimonial-card">
            <div className="testimonial-top">
              <Image className="avatar" src={publicAsset("/student-sneha.jpg")} alt="" width={66} height={66} />
              <span>
                <b>Sneha Kumari</b>
                <small>Student · Ranchi</small>
              </span>
              <span className="quote-mark">“</span>
            </div>
            <p>
              “The trainers are supportive and explain concepts in a simple
              way. The practical examples really helped.”
            </p>
            <div className="testimonial-stars">★★★★★</div>
          </article>

          <article className="testimonial-card">
            <div className="testimonial-top">
              <Image className="avatar" src={publicAsset("/student-amit.jpg")} alt="" width={66} height={66} />
              <span>
                <b>Amit Verma</b>
                <small>Student · Ranchi</small>
              </span>
              <span className="quote-mark">“</span>
            </div>
            <p>
              “A welcoming learning experience with helpful guidance and an
              emphasis on understanding the market.”
            </p>
            <div className="testimonial-stars">★★★★★</div>
          </article>
        </div>
        <p className="testimonial-note">
          Student quotations shown as prototype copy. Replace with approved,
          verified testimonials before publishing.
        </p>
      </div>
    </section>
  );
}
