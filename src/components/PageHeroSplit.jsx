/**
 * Two-column page hero: label + heading (left), description (right).
 * Stacks vertically on mobile.
 */
export default function PageHeroSplit({ eyebrow, title, description, titleId }) {
  return (
    <section className="page-hero page-hero--split" aria-labelledby={titleId}>
      <div className="container page-hero__split">
        <div className="page-hero__lead">
          {eyebrow ? <span className="page-hero__eyebrow">{eyebrow}</span> : null}
          <h1 id={titleId}>{title}</h1>
        </div>
        <div className="page-hero__copy">
          <p>{description}</p>
        </div>
      </div>
    </section>
  );
}
