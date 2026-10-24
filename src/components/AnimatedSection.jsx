import { motion, useReducedMotion } from 'framer-motion';

export default function AnimatedSection({
  children,
  className = '',
  delay = 0,
  as = 'section',
  ...props
}) {
  const reduceMotion = useReducedMotion();
  const Tag = motion[as] || motion.section;

  return (
    <Tag
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45, delay }}
      {...props}
    >
      {children}
    </Tag>
  );
}
