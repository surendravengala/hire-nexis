import { Link } from 'react-router-dom';
import PageMeta from '../components/PageMeta';
import PageHeroSplit from '../components/PageHeroSplit';
import { pageMeta, siteConfig } from '../config/siteData';

export default function PrivacyPolicy() {
  return (
    <>
      <PageMeta {...pageMeta.privacy} />

      <PageHeroSplit
        eyebrow=""
        title="Privacy Policy"
        titleId="privacy-hero-heading"
        description="This policy explains how Hire Nexis handles personal information submitted through this website and related recruitment inquiries. It is a professional draft for publication review."
      />

      <article className="section legal-doc">
        <div className="container legal-doc__content">
          

          <section>
            <h2>1. Introduction and Scope</h2>
            <p>
              Hire Nexis (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) provides staffing,
              recruitment, and workforce-related information through this website. This Privacy
              Policy describes how we may collect, use, store, and share personal information in
              connection with website visits, contact inquiries, and recruitment-related
              communications.
            </p>
            <p>
              This policy applies to information collected through this website and related
              inquiry channels described here. It does not automatically apply to third-party
              websites or services that we do not control.
            </p>
          </section>

          <section>
            <h2>2. Information Collected Through Contact Forms and Inquiries</h2>
            <p>
              When you submit the website contact form or otherwise send us an inquiry, you may
              provide information such as your name, business email address, phone number, company
              name, service interest, and message content. That information is used to respond to
              your request and to discuss potential staffing or recruitment needs.
            </p>
            <p>
              At present, the public website contact form is designed for frontend validation and
              demonstration. Until a connected form service or backend is configured, submissions
              may not be stored or delivered automatically. When a delivery method is connected,
              inquiry data will be handled in line with this policy and operational controls then
              in place.
            </p>
          </section>

          <section>
            <h2>3. Candidate Information</h2>
            <p>
              If you share a résumé, curriculum vitae, professional history, skills summary, or
              similar materials with Hire Nexis for recruitment purposes, we may process that
              information to evaluate role fit, communicate with you about opportunities, and
              support placement discussions with prospective employers where appropriate.
            </p>
            <p>
              Please avoid submitting sensitive personal information unless it is necessary for a
              specific recruitment process and you are comfortable providing it.
            </p>
          </section>

          <section>
            <h2>4. How Information Is Used</h2>
            <p>Depending on the context of your interaction, we may use personal information to:</p>
            <ul>
              <li>Respond to contact and hiring inquiries</li>
              <li>Discuss staffing models and service options</li>
              <li>Support recruitment and candidate evaluation processes</li>
              <li>Maintain business records related to inquiries and engagements</li>
              <li>Improve website content and communication practices over time</li>
              <li>Comply with legal or regulatory obligations where applicable</li>
            </ul>
          </section>

          <section>
            <h2>5. Legal Bases for Processing</h2>
            <p>
              Where data-protection laws require a legal basis, we may rely on one or more of the
              following, depending on the activity and jurisdiction: consent; steps taken at your
              request prior to entering into a contract; legitimate interests in operating a
              staffing and recruitment business and responding to inquiries; and compliance with
              legal obligations. The applicable basis may vary by location and processing purpose.
            </p>
          </section>

          <section>
            <h2>6. Sharing Information</h2>
            <p>We may share personal information with:</p>
            <ul>
              <li>
                Prospective employer clients, when relevant to a recruitment or staffing discussion
                and consistent with the purpose for which the information was provided
              </li>
              <li>
                Service providers that support website hosting, communications, or business
                operations, subject to appropriate contractual or operational safeguards
              </li>
              <li>
                Professional advisors or authorities when required by law or to protect legal rights
              </li>
            </ul>
            <p>
              We do not sell personal information as a standalone commercial product. Any future
              changes to sharing practices will be reflected in an updated version of this policy.
            </p>
          </section>

          <section>
            <h2>7. Data Retention</h2>
            <p>
              We intend to retain personal information only for as long as reasonably necessary for
              the purposes described in this policy, including responding to inquiries, supporting
              recruitment processes, maintaining business records, and meeting legal requirements.
            </p>
            <p>
              Specific retention periods may vary by record type and applicable requirements.
              [CONFIGURE: confirm Hire Nexis retention schedules before publication.]
            </p>
          </section>

          <section>
            <h2>8. Cookies and Website Analytics</h2>
            <p>
              This frontend website may rely on standard browser and hosting behaviors to deliver
              pages. Unless and until Hire Nexis enables analytics, advertising, or cookie-based
              tracking tools, this policy does not claim that such tools are in active use.
            </p>
            <p>
              If analytics or similar technologies are introduced later, this section should be
              updated to describe the tools used, the data collected, and available choices.
            </p>
          </section>

          <section>
            <h2>9. Data Security</h2>
            <p>
              Hire Nexis aims to apply reasonable administrative and technical safeguards
              appropriate to the nature of information handled through its website and business
              communications. No method of transmission or storage is completely secure, and we
              cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2>10. Privacy Rights and Requests</h2>
            <p>
              Depending on your location, you may have rights to request access to, correction of,
              deletion of, or restrictions on certain personal information, or to object to certain
              processing. To make a privacy-related request, contact us using the details below. We
              may need to verify your identity before responding.
            </p>
          </section>

          <section>
            <h2>11. Third-Party Links</h2>
            <p>
              This website may contain links to third-party websites or services, including social
              media platforms. Those destinations have their own privacy practices, and Hire Nexis
              is not responsible for their content or data handling.
            </p>
          </section>

          <section>
            <h2>12. Updates to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. The &quot;Last updated&quot; date
              at the top of this page will change when a revision is published. Continued use of
              the website after an update constitutes awareness of the revised policy to the extent
              permitted by applicable law.
            </p>
          </section>

          <section>
            <h2>13. Contact Details for Privacy Inquiries</h2>
            <p>
              For privacy questions or requests, contact Hire Nexis at{' '}
              <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>
              {siteConfig.contact.phone ? (
                <>
                  {' '}
                  or {siteConfig.contact.phone}
                </>
              ) : null}
              .
            </p>
            <p>
              You may also reach us through the{' '}
              <Link to="/contact">Contact Us</Link> page.
            </p>
          </section>
        </div>
      </article>
    </>
  );
}
