export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  as: Tag = 'h2',
  id,
}) {
  return (
    <div
      className={`section-heading${align === 'center' ? ' section-heading--center' : ''}`}
    >
      {eyebrow ? <span className="section-heading__eyebrow">{eyebrow}</span> : null}
      <Tag id={id}>{title}</Tag>
      {description ? <p>{description}</p> : null}
    </div>
  );
}
