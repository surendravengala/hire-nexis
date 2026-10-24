import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { getIcon } from './icons';

export default function ServiceCard({ service }) {
  const reduceMotion = useReducedMotion();
  const Icon = getIcon(service.icon);

  return (
    <motion.article
      className="card service-card"
      whileHover={reduceMotion ? undefined : { y: -4 }}
      transition={{ duration: 0.25 }}
    >
      <div className="icon-badge" aria-hidden="true">
        <Icon size={22} strokeWidth={1.75} />
      </div>
      <h3>{service.title}</h3>
      <p>{service.summary}</p>
      <Link to={service.path} className="text-link">
        Learn More <ArrowRight size={16} aria-hidden="true" />
      </Link>
    </motion.article>
  );
}
