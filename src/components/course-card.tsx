import { ArrowRight, Clock3 } from "@/components/icons";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import type { Course } from "@/data/site-content";
import { publicAsset } from "@/lib/public-asset";

const courseImages: Record<string, string> = {
  "01": "/course-fundamentals.jpg",
  "02": "/course-complete-guide.jpg",
  "03": "/course-advanced-markets.jpg",
};

function CourseArtwork({ course }: { course: Course }) {
  return (
    <div className="course-art" aria-hidden="true">
      <div className="course-art__photo">
        <Image
          src={publicAsset(courseImages[course.number])}
          alt=""
          fill
          sizes="(max-width: 580px) 42vw, (max-width: 860px) 38vw, 14vw"
        />
      </div>
      <div className="course-art__info">
        <span className="course-art__tag">COURSE {Number(course.number)}</span>
        <h3>{course.title}</h3>
        <div className="course-art__meta">
          <span><Clock3 size={13} /> {course.duration}</span>
          <b>{course.price}</b>
        </div>
      </div>
    </div>
  );
}

export function CourseCard({ course }: { course: Course }) {
  return (
    <article className="course-card">
      <CourseArtwork course={course} />
      <div className="course-card__body">
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
