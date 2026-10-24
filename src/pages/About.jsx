import { Link } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';
import PageMeta from '../components/PageMeta';
import PageHeroSplit from '../components/PageHeroSplit';
import SectionHeading from '../components/SectionHeading';
import CTASection from '../components/CTASection';
import AnimatedSection from '../components/AnimatedSection';
import { images, pageMeta, values } from '../config/siteData';

export default function About() {
  return (
    <>
      <PageMeta {...pageMeta.about} />

      <PageHeroSplit
        eyebrow="About Us"
        title="About Hire Nexis"
        titleId="about-hero-heading"
        description="Hire Nexis is a staffing and recruitment partner focused on connecting organizations with qualified professionals through flexible, quality-driven workforce solutions."
      />

      <AnimatedSection className="section" aria-labelledby="who-heading">
        <div className="container grid-2">
          <div>
            <SectionHeading title="Who We Are" as="h2" />
            <p id="who-heading" className="sr-only">
              Who We Are
            </p>
            <p>
              We support businesses that need reliable hiring partners—whether they are filling
              project roles, building permanent teams, evaluating talent through contract-to-hire,
              or scaling recruitment operations with RPO support.
            </p>
            <p>
              Our approach is practical and collaborative. We take time to understand role
              requirements, team dynamics, and business priorities so every search is grounded in
              clarity rather than volume.
            </p>
          </div>
          <div className="media-frame">
            <img
              src={images.about}
              alt="Professionals collaborating around a conference table"
              width={800}
              height={600}
              loading="lazy"
            />
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section section--soft" aria-labelledby="mission-heading">
        <div className="container grid-2 split-reverse">
          <div className="media-frame">
            <img
              src={images.mission}
              alt="Team planning session with notes and laptops"
              width={800}
              height={600}
              loading="lazy"
            />
          </div>
          <div>
            <SectionHeading title="Our Mission" as="h2" />
            <p id="mission-heading" className="sr-only">
              Our Mission
            </p>
            <p>
              Help organizations connect with the right talent by delivering thoughtful staffing
              and recruitment support that respects both business goals and candidate experience.
            </p>
            <SectionHeading title="Our Vision" as="h2" />
            <p>
              Build meaningful connections between businesses and professionals—creating teams that
              perform well and partnerships that endure.
            </p>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section" aria-labelledby="values-heading">
        <div className="container">
          <SectionHeading
            title="Our Core Values"
            description="The principles that guide how we work with clients and candidates."
            align="center"
          />
          <h2 id="values-heading" className="sr-only">
            Our Core Values
          </h2>
          <div className="values-grid">
            {values.map((value) => (
              <article key={value.title} className="card">
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section section--soft" aria-labelledby="work-with-us-heading">
        <div className="container grid-2">
          <div>
            <SectionHeading title="Why Work With Us" as="h2" />
            <p id="work-with-us-heading" className="sr-only">
              Why Work With Us
            </p>
            <p>
              Hire Nexis is designed around a service approach that emphasizes listening first,
              recommending the right engagement model, and staying involved through the hiring
              journey.
            </p>
            <ul className="list-check" style={{ marginTop: '1.25rem' }}>
              <li>
                <CheckCircle2 size={18} aria-hidden="true" />
                <span>Clear communication from intake through candidate presentation</span>
              </li>
              <li>
                <CheckCircle2 size={18} aria-hidden="true" />
                <span>Flexible models that adapt as your hiring needs change</span>
              </li>
              <li>
                <CheckCircle2 size={18} aria-hidden="true" />
                <span>Focus on role fit, professionalism, and partnership quality</span>
              </li>
            </ul>
            <div style={{ marginTop: '1.5rem' }}>
              <Link to="/contact" className="btn btn--primary">
                Connect With Our Team
              </Link>
            </div>
          </div>
          <div className="media-frame">
            <img
              src={images.team}
              alt="Diverse professional team celebrating collaboration"
              width={800}
              height={600}
              loading="lazy"
            />
          </div>
        </div>
      </AnimatedSection>

      <CTASection
        title="Let’s build your next team together"
        description="Share your hiring goals and we’ll help you explore the staffing approach that fits."
        primaryLabel="Get in Touch"
        secondaryLabel="View Services"
      />
    </>
  );
}
