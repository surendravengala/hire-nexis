import { Link } from 'react-router-dom';
import PageMeta from '../components/PageMeta';
import PageHeroSplit from '../components/PageHeroSplit';
import { pageMeta, siteConfig } from '../config/siteData';

export default function TermsAndConditions() {
  return (
    <>
      <PageMeta {...pageMeta.terms} />

      <PageHeroSplit
        eyebrow="Legal"
        title="Terms and Conditions"
        titleId="terms-hero-heading"
        description="These terms explain how you may use the Hire Nexis website and related online information. They are a professional draft intended for legal and operational review before publication."
      />

      <article className="section legal-doc">
        <div className="container legal-doc__content">
          <p className="legal-doc__updated">
            Last updated: {siteConfig.legal.lastUpdated}
          </p>
          <p className="legal-doc__note">
            This document is a starting draft for Hire Nexis. It should be reviewed against the
            company&apos;s actual practices and applicable law before publication.
          </p>

          <section>
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing or using this website, you agree to these Terms and Conditions. If you
              do not agree, please discontinue use of the website. If you use the website on behalf
              of an organization, you represent that you are authorized to accept these terms for
              that organization.
            </p>
          </section>

          <section>
            <h2>2. Website Purpose and Permitted Use</h2>
            <p>
              This website provides information about Hire Nexis staffing, recruitment, and
              workforce-related services and offers channels for business inquiries. You may browse
              publicly available content for lawful, informational purposes.
            </p>
            <p>You agree not to:</p>
            <ul>
              <li>Use the website for unlawful, fraudulent, or harmful purposes</li>
              <li>Attempt to disrupt, probe, or compromise website security or availability</li>
              <li>Misrepresent your identity or affiliation when submitting inquiries</li>
              <li>Copy, scrape, or reuse website content except as permitted by law or written consent</li>
            </ul>
          </section>

          <section>
            <h2>3. Recruitment and Staffing Service Descriptions</h2>
            <p>
              Descriptions of contract staffing, permanent staffing, contract-to-hire, RPO, and
              related offerings on this website are informational. They do not automatically create
              a client engagement, placement guarantee, employment relationship, or service contract.
              Formal engagements, if any, are governed by separate written agreements between Hire
              Nexis and the relevant party.
            </p>
          </section>

          <section>
            <h2>4. Candidate and Employer Responsibilities</h2>
            <p>
              Employers and hiring managers who contact Hire Nexis are responsible for providing
              accurate role requirements and for complying with applicable employment and
              non-discrimination laws in their hiring decisions.
            </p>
            <p>
              Candidates and professionals who submit information are responsible for ensuring that
              the details they provide are accurate and that they have the right to share any
              materials submitted.
            </p>
          </section>

          <section>
            <h2>5. Accuracy of Submitted Information</h2>
            <p>
              You agree that information submitted through forms, email, or other inquiry channels
              will be truthful to the best of your knowledge. Hire Nexis may decline to act on
              incomplete, inaccurate, or inappropriate submissions.
            </p>
          </section>

          <section>
            <h2>6. Intellectual Property</h2>
            <p>
              Unless otherwise noted, website text, layout, graphics, logos, and other materials are
              owned by Hire Nexis or used under license. You may not reproduce, distribute, modify,
              or create derivative works from website materials without prior written permission,
              except for limited personal viewing or as otherwise allowed by applicable law.
            </p>
          </section>

          <section>
            <h2>7. Third-Party Links and Services</h2>
            <p>
              The website may link to third-party platforms such as LinkedIn, Instagram, YouTube, or
              email services. Those services are operated independently. Hire Nexis is not
              responsible for their content, availability, or terms. Your use of third-party
              services is subject to their own policies.
            </p>
          </section>

          <section>
            <h2>8. Website Availability and Disclaimers</h2>
            <p>
              The website is provided on an &quot;as available&quot; basis. While we aim to keep
              information current and the site accessible, we do not warrant that content will be
              uninterrupted, error-free, or complete at all times. Website content may change
              without notice.
            </p>
            <p>
              Nothing on this website constitutes legal, financial, or professional advice beyond
              general information about Hire Nexis services.
            </p>
          </section>

          <section>
            <h2>9. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by applicable law, Hire Nexis and its team will not be
              liable for indirect, incidental, special, consequential, or punitive damages, or for
              loss of profits, data, or business opportunities arising from your use of, or
              inability to use, this website.
            </p>
            <p>
              Nothing in these terms excludes or limits liability that cannot be excluded or limited
              under applicable law. If a limitation is held unenforceable, the remaining provisions
              continue in effect.
            </p>
          </section>

          <section>
            <h2>10. Changes to These Terms</h2>
            <p>
              We may update these Terms and Conditions periodically. The &quot;Last updated&quot;
              date will be revised when changes are published. Continued use of the website after
              updates constitutes acceptance of the revised terms to the extent permitted by law.
            </p>
          </section>

          <section>
            <h2>11. Governing Law and Jurisdiction</h2>
            <p>
              These terms are intended to be governed by the laws of{' '}
              <strong>[CONFIGURE: governing jurisdiction]</strong>, without regard to conflict-of-law
              principles, except where mandatory local consumer or privacy laws require otherwise.
              Courts in <strong>[CONFIGURE: venue / forum]</strong> are intended as the venue for
              disputes arising from these terms, subject to applicable law.
            </p>
          </section>

          <section>
            <h2>12. Contact Information</h2>
            <p>
              Questions about these Terms and Conditions may be directed to{' '}
              <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>
              {siteConfig.contact.phone ? <> or {siteConfig.contact.phone}</> : null}.
            </p>
            <p>
              You may also use the <Link to="/contact">Contact Us</Link> page.
            </p>
          </section>
        </div>
      </article>
    </>
  );
}
