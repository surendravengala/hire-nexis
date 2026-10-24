import { useId } from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';

export default function CTASection({
  title = 'Ready to Build Your Next Great Team?',
  description = "Let's discuss your hiring needs and find the right staffing solution for your organization.",
  primaryLabel = 'Talk to Our Team',
  primaryTo = '/contact',
  secondaryLabel = 'Explore Services',
  secondaryTo = '/services',
  fullBleed = false,
}) {
  const reduceMotion = useReducedMotion();
  const headingId = useId();

  const content = (
    <>
      <div>
        <h2 id={headingId}>{title}</h2>
        <p>{description}</p>
      </div>
      <div className="btn-group">
        <Link to={primaryTo} className="btn btn--light">
          {primaryLabel}
        </Link>
        {secondaryLabel ? (
          <Link to={secondaryTo} className="btn btn--ghost-light">
            {secondaryLabel}
          </Link>
        ) : null}
      </div>
    </>
  );

  return (
    <motion.section
      className={fullBleed ? 'cta-band cta-band--full section' : 'section'}
      initial={reduceMotion ? false : { opacity: 0, y: 16 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45 }}
      aria-labelledby={headingId}
    >
      {fullBleed ? (
        <div className="container">{content}</div>
      ) : (
        <div className="container">
          <div className="cta-band">{content}</div>
        </div>
      )}
    </motion.section>
  );
}
