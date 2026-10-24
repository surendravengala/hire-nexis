import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import PageMeta from '../components/PageMeta';
import SectionHeading from '../components/SectionHeading';
import ServiceCard from '../components/ServiceCard';
import CTASection from '../components/CTASection';
import FAQAccordion from '../components/FAQAccordion';
import AnimatedSection from '../components/AnimatedSection';
import { getIcon } from '../components/icons';
import ClientLogoGrid from '../components/ClientLogoGrid';
import {
  faqs,
  images,
  industries,
  pageMeta,
  processSteps,
  services,
  whyChoose,
} from '../config/siteData';

export default function Home() {
  const reduceMotion = useReducedMotion();

  const stagger = {
    hidden: {},
    show: {
      transition: { staggerChildren: reduceMotion ? 0 : 0.1 },
    },
  };

  const fadeUp = {
    hidden: reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <>
      <PageMeta {...pageMeta.home} />

      <section className="hero page" aria-labelledby="home-hero-heading">
        <div className="container hero__grid">
          <motion.div
            className="hero__content"
            variants={stagger}
            initial="hidden"
            animate="show"
          >
            <motion.div className="hero__accent" variants={fadeUp} aria-hidden="true" />
            <motion.h1 id="home-hero-heading" variants={fadeUp}>
              Connecting Exceptional Talent with Extraordinary Opportunities
            </motion.h1>
            <motion.p variants={fadeUp}>
              Hire Nexis helps businesses build stronger teams through strategic staffing,
              recruitment, and workforce solutions tailored to their needs.
            </motion.p>
            <motion.div className="btn-group" variants={fadeUp}>
              <Link to="/services" className="btn btn--primary">
                Explore Our Services
              </Link>
              <Link to="/contact" className="btn btn--secondary">
                Let&apos;s Talk
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero__media"
            initial={reduceMotion ? false : { opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: reduceMotion ? 0 : 0.15 }}
          >
            <div className="hero__deco hero__deco--tl" aria-hidden="true" />
            <div className="hero__deco hero__deco--br" aria-hidden="true" />
            <div className="media-frame">
              <img
                src={images.hero}
                alt="Business professionals collaborating in a modern office"
                width={900}
                height={720}
                fetchPriority="high"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <AnimatedSection className="stats-band" aria-labelledby="stats-heading">
        <div className="container">
          <h2 id="stats-heading" className="sr-only">
            Hire Nexis key statistics
          </h2>
          <ul className="stats-band__list">
            <li className="stats-band__item">
              <p className="stats-band__value">2,000+</p>
              <p className="stats-band__label">Students Placed</p>
            </li>
            <li className="stats-band__item">
              <p className="stats-band__value">500+</p>
              <p className="stats-band__label">Placed This Year</p>
            </li>
            <li className="stats-band__item">
              <p className="stats-band__value">3+</p>
              <p className="stats-band__label">Years of Excellence</p>
            </li>
          </ul>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section" aria-labelledby="intro-heading">
        <div className="container grid-2">
          <div>
            <SectionHeading
              eyebrow="About Hire Nexis"
              title="People First. Business Forward."
              as="h2"
            />
            <p id="intro-heading" className="sr-only">
              People First. Business Forward.
            </p>
            <p>
              Hire Nexis is a staffing partner that connects companies with qualified
              professionals across contract, permanent, and hybrid hiring models. We focus on
              clarity, quality, and long-term relationships—helping organizations grow with the
              right people at the right time.
            </p>
            <div className="value-pills">
              <div className="value-pill">
                <CheckCircle2 size={20} color="#1B4332" aria-hidden="true" />
                <div>
                  <strong>Quality Talent</strong>
                  <p>Thoughtful screening aligned to skills, experience, and role context.</p>
                </div>
              </div>
              <div className="value-pill">
                <CheckCircle2 size={20} color="#1B4332" aria-hidden="true" />
                <div>
                  <strong>Faster Hiring</strong>
                  <p>Structured processes that keep searches focused and momentum high.</p>
                </div>
              </div>
              <div className="value-pill">
                <CheckCircle2 size={20} color="#1B4332" aria-hidden="true" />
                <div>
                  <strong>Long-Term Partnerships</strong>
                  <p>Support designed around your goals, not one-off transactions.</p>
                </div>
              </div>
            </div>
            <Link to="/about" className="btn btn--primary">
              Learn More About Us
            </Link>
          </div>
          <div className="media-frame">
            <img
              src={images.intro}
              alt="Recruitment discussion between colleagues in a bright workspace"
              width={800}
              height={600}
              loading="lazy"
            />
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section section--soft" aria-labelledby="services-heading">
        <div className="container">
          <SectionHeading
            eyebrow="Our Services"
            title="Staffing Solutions Designed Around Your Business"
            description="From flexible contract support to end-to-end recruitment partnerships, choose the model that fits your hiring goals."
            align="center"
          />
          <h2 id="services-heading" className="sr-only">
            Staffing Solutions Designed Around Your Business
          </h2>
          <div className="grid-2 services-grid-home">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section" aria-labelledby="why-heading">
        <div className="container">
          <SectionHeading
            eyebrow="Why Hire Nexis"
            title="Why Choose Hire Nexis?"
            description="A practical, client-centered approach to staffing—built on quality, flexibility, and clear communication."
            align="center"
          />
          <h2 id="why-heading" className="sr-only">
            Why Choose Hire Nexis?
          </h2>
          <div className="grid-4">
            {whyChoose.map((item) => {
              const Icon = getIcon(item.icon);
              return (
                <article key={item.title} className="card feature-card">
                  <div className="icon-badge" aria-hidden="true">
                    <Icon size={22} strokeWidth={1.75} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section section--soft" aria-labelledby="industries-heading">
        <div className="container">
          <SectionHeading
            eyebrow="Industries"
            title="Industries We Serve"
            description="Proposed service categories that can be refined as Hire Nexis defines its specialization."
            align="center"
          />
          <h2 id="industries-heading" className="sr-only">
            Industries We Serve
          </h2>
          <div className="grid-3">
            {industries.map((industry) => {
              const Icon = getIcon(industry.icon);
              return (
                <article key={industry.id} className="card industry-card">
                  <div className="icon-badge" aria-hidden="true">
                    <Icon size={22} strokeWidth={1.75} />
                  </div>
                  <h3>{industry.title}</h3>
                </article>
              );
            })}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section" aria-labelledby="process-heading">
        <div className="container">
          <SectionHeading
            eyebrow="How We Work"
            title="Our Recruitment Process"
            description="A clear path from understanding your needs to supporting a successful hire."
            align="center"
          />
          <h2 id="process-heading" className="sr-only">
            Our Recruitment Process
          </h2>
          <ol className="timeline">
            {processSteps.map((step) => (
              <li key={step.step} className="timeline__item">
                <span className="timeline__marker" aria-hidden="true">
                  {step.step}
                </span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section section--soft" aria-labelledby="clients-preview-heading">
        <div className="container">
          <SectionHeading
            id="clients-preview-heading"
            eyebrow="Our Clients"
            title="Building Partnerships That Last"
            description="Organizations that trust Hire Nexis as a staffing and recruitment partner."
            align="center"
          />
          <ClientLogoGrid labelledBy="clients-preview-heading" />
          <div className="section-actions">
            <Link to="/clients" className="btn btn--primary">
              View Our Partners
            </Link>
          </div>
        </div>
      </AnimatedSection>

      <CTASection fullBleed />

      <AnimatedSection className="section" aria-labelledby="faq-heading">
        <div className="container">
          <SectionHeading
            eyebrow="FAQ"
            title="Frequently Asked Questions"
            description="Quick answers about Hire Nexis services and how engagement typically begins."
            align="center"
          />
          <h2 id="faq-heading" className="sr-only">
            Frequently Asked Questions
          </h2>
          <FAQAccordion items={faqs} />
        </div>
      </AnimatedSection>

      <section className="compact-cta" aria-labelledby="final-contact-heading">
        <div className="container">
          <h2 id="final-contact-heading">Have a hiring requirement to discuss?</h2>
          <p>
            Tell us about your roles, timelines, and preferred staffing model. Our team is ready
            to help you take the next step.
          </p>
          <Link to="/contact" className="btn btn--primary">
            Contact Us <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
