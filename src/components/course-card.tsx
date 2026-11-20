import { ArrowRight, Clock3, Sparkles } from "@/components/icons";
import { Button } from "@/components/ui/button";
import type { Course } from "@/data/site-content";

function CourseArtwork({ course }: { course: Course }) {
  return (
    <div
      className={"course-art course-art--" + course.theme}
      aria-hidden="true"
    >
      <div className="course-art__glow" />
      <div className="course-art__tag">MARKET MANTRA · LEARNING SERIES</div>
      <div className="course-art__chart-label">
        <span>Market movement</span>
        <b>+08.42%</b>
      </div>
      <div className="course-art__bars">
        {[31, 47, 40, 62, 51, 72, 59, 81, 68, 94, 76, 105].map(
          (height, index) => (
            <span
              key={height}
              style={{ height }}
              className={index % 4 === 2 ? "is-muted" : undefined}
            />
          ),
        )}
      </div>
      <svg
        className="course-art__trend"
        viewBox="0 0 300 100"
        preserveAspectRatio="none"
      >
        <path
          d="M0 82 C24 75 29 61 49 68 S81 58 98 49 S130 57 149 43 S184 38 201 48 S234 22 254 29 S281 15 300 12"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
        />
      </svg>
      <div className="course-art__watermark">
        {course.theme === "gold" ? "₹" : "↗"}
      </div>
    </div>
  );
}

export function CourseCard({ course }: { course: Course }) {
  return (
    <article className="course-card">
      <CourseArtwork course={course} />
      <div className="course-card__body">
        <div className="course-card__eyebrow">
          <span>COURSE {course.number}</span>
          <span className="course-rating">
            <Sparkles size={12} /> Practical
          </span>
        </div>
        <h3>{course.title}</h3>
        <p className="course-card__subtitle">{course.subtitle}</p>
        <div className="course-meta">
          <span>
            <Clock3 size={15} /> {course.duration}
          </span>
          <b>{course.price}</b>
        </div>
        <div className="course-modules">
          <b>What you’ll explore</b>
          <ul>
            {course.modules.map((module) => (
              <li key={module}>
                <span />
                {module}
              </li>
            ))}
          </ul>
        </div>
        <Button asChild className="course-enroll">
          <a href="#enquire">
            Enquire about this course <ArrowRight size={15} />
          </a>
        </Button>
      </div>
    </article>
  );
}
