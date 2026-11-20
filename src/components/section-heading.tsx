import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  children?: ReactNode;
  light?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  children,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={"section-heading" + (light ? " section-heading--light" : "")}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {children ? <p>{children}</p> : null}
    </div>
  );
}
