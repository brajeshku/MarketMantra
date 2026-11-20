import { ArrowRight, Check, GraduationCap } from "@/components/icons";
import { CourseCard } from "@/components/course-card";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { courses } from "@/data/site-content";

export function CoursesSection() {
  return (
    <section className="courses-section section-pad" id="courses">
      <div className="page-shell">
        <div className="courses-heading-row">
          <SectionHeading
            eyebrow="OUR COURSES"
            title={
              <>
                Structured learning for{" "}
                <span>real market experience</span>
              </>
            }
          >
            Choose a learning path that suits your goals, from market
            fundamentals to advanced concepts.
          </SectionHeading>
          <a className="text-link" href="#enquire">
            View All Courses <ArrowRight size={15} />
          </a>
        </div>

        <div className="course-grid">
          {courses.map((course) => (
            <CourseCard key={course.number} course={course} />
          ))}
        </div>

        <div className="bundle-bar">
          <div className="bundle-title">
            <span className="bundle-cap">
              <GraduationCap size={25} />
            </span>
            <span>
              <small>ALL THREE COURSES</small>
              <strong>One complete learning path</strong>
            </span>
          </div>
          <div className="bundle-price">
            <small>Bundle offer</small>
            <strong>₹24,999</strong>
            <del>₹44,997</del>
          </div>
          <div className="bundle-perks">
            <span>
              <Check size={15} /> Structured progression
            </span>
            <span>
              <Check size={15} /> Mentor support
            </span>
            <span>
              <Check size={15} /> Limited cohort
            </span>
          </div>
          <Button asChild variant="light">
            <a href="#enquire">
              Ask about the bundle <ArrowRight size={15} />
            </a>
          </Button>
        </div>
        <p className="course-disclaimer">
          Course availability, fees and curriculum are subject to confirmation
          by Market Mantra.
        </p>
      </div>
    </section>
  );
}
