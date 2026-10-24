

import { useState } from 'react';

import { Clock3, Mail, MapPin, Phone } from 'lucide-react';

import PageMeta from '../components/PageMeta';

import PageHeroSplit from '../components/PageHeroSplit';

import AnimatedSection from '../components/AnimatedSection';

import {

  pageMeta,

  serviceInterestOptions,

  siteConfig,

} from '../config/siteData';

const GOOGLE_SCRIPT_URL =

  'https://script.google.com/macros/s/AKfycbxCr_kZDxJfvL6huAUcxkERMY6SjkqOXZ9wRvmDIzArSX0PAAJbg7iu2Hrl2lt6jzK__Q/exec';

const initialForm = {

  fullName: '',

  email: '',

  phone: '',

  company: '',

  service: '',

  message: '',

};

function validate(form) {

  const errors = {};

  if (!form.fullName.trim()) {

    errors.fullName = 'Please enter your full name.';

  }

  if (!form.email.trim()) {

    errors.email = 'Please enter your business email.';

  } else if (

    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())

  ) {

    errors.email = 'Please enter a valid email address.';

  }

  if (!form.phone.trim()) {

    errors.phone = 'Please enter your phone number.';

  }

  if (!form.company.trim()) {

    errors.company = 'Please enter your company name.';

  }

  if (!form.service) {

    errors.service = 'Please select a service.';

  }

  if (!form.message.trim()) {

    errors.message =

      'Please include a short message about your hiring needs.';

  } else if (form.message.trim().length < 10) {

    errors.message =

      'Please provide a bit more detail (at least 10 characters).';

  }

  return errors;

}

export default function Contact() {

  const [form, setForm] = useState(initialForm);

  const [errors, setErrors] = useState({});

  const [status, setStatus] = useState('idle');

  const handleChange = (event) => {

    const { name, value } = event.target;

    setForm((prev) => ({

      ...prev,

      [name]: value,

    }));

    if (errors[name]) {

      setErrors((prev) => ({

        ...prev,

        [name]: undefined,

      }));

    }

  };

  const handleSubmit = async (event) => {

    event.preventDefault();

    const nextErrors = validate(form);

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {

      setStatus('error');

      return;

    }

    setStatus('submitting');

    try {

      const payload = {

        fullName: form.fullName.trim(),

        email: form.email.trim(),

        phone: form.phone.trim(),

        company: form.company.trim(),

        service: form.service,

        message: form.message.trim(),

      };

      await fetch(GOOGLE_SCRIPT_URL, {

        method: 'POST',

        mode: 'no-cors',

        headers: {

          'Content-Type': 'text/plain;charset=utf-8',

        },

        body: JSON.stringify(payload),

      });

      // With no-cors, the response is opaque.

      // This does not confirm that the sheet was updated.

      setStatus('success');

      setForm(initialForm);

      setErrors({});

    } catch (error) {

      console.error('Contact form submission error:', error);

      setStatus('error');

    }

  };

  return (

    <>

      <PageMeta {...pageMeta.contact} />

      <PageHeroSplit

        eyebrow="Contact Us"

        title="Let's Start a Conversation"

        titleId="contact-hero-heading"

        description="Share your hiring requirements and we'll help you explore the right staffing solution for your organization."

      />

      <AnimatedSection

        className="section"

        aria-labelledby="contact-form-heading"

      >

        <div className="container contact-layout">

          <div>

            <h2 id="contact-form-heading">

              Contact Information

            </h2>

            <p>

              Prefer email or phone? Use the details below, or

              send a message through the form.

            </p>

            <div

              className="contact-cards"

              style={{ marginTop: '1.5rem' }}

            >

              <article className="card contact-card">

                <div className="icon-badge" aria-hidden="true">

                  <Mail size={20} />

                </div>

                <div>

                  <h3>Email</h3>

                  <a

                    href={`mailto:${siteConfig.contact.email}`}
                  >

                    {siteConfig.contact.email}

                  </a>

                </div>

              </article>

              <article className="card contact-card">

                <div className="icon-badge" aria-hidden="true">

                  <Phone size={20} />

                </div>

                <div>

                  <h3>Phone</h3>

                  <a href={siteConfig.contact.phoneHref}>

                    {siteConfig.contact.phone}

                  </a>

                </div>

              </article>

              <article className="card contact-card">

                <div className="icon-badge" aria-hidden="true">

                  <MapPin size={20} />

                </div>

                <div>

                  <h3>Office</h3>

                  <p>

                    {siteConfig.contact.address}

                    <br />

                    {siteConfig.contact.city}

                  </p>

                </div>

              </article>

              <article className="card contact-card">

                <div className="icon-badge" aria-hidden="true">

                  <Clock3 size={20} />

                </div>

                <div>

                  <h3>Hours</h3>

                  <p>{siteConfig.contact.hours}</p>

                </div>

              </article>

            </div>

          </div>

          <form

            className="contact-form"

            onSubmit={handleSubmit}

            noValidate

          >

            <h2>Send a Message</h2>

            <p className="form-note">

              Share your hiring requirements using the form

              below. Our team will review your enquiry and get

              back to you.

            </p>

            <div

              className="form-grid"

              style={{ marginTop: '1.25rem' }}

            >

              <div className="form-field">

                <label htmlFor="fullName">Full Name</label>

                <input

                  id="fullName"

                  name="fullName"

                  autoComplete="name"

                  value={form.fullName}

                  onChange={handleChange}

                  aria-invalid={Boolean(errors.fullName)}

                  aria-describedby={

                    errors.fullName ? 'fullName-error' : undefined

                  }

                  required

                />

                {errors.fullName && (

                  <span

                    id="fullName-error"

                    className="field-error"

                  >

                    {errors.fullName}

                  </span>

                )}

              </div>

              <div className="form-field">

                <label htmlFor="email">Business Email</label>

                <input

                  id="email"

                  name="email"

                  type="email"

                  autoComplete="email"

                  value={form.email}

                  onChange={handleChange}

                  aria-invalid={Boolean(errors.email)}

                  aria-describedby={

                    errors.email ? 'email-error' : undefined

                  }

                  required

                />

                {errors.email && (

                  <span

                    id="email-error"

                    className="field-error"

                  >

                    {errors.email}

                  </span>

                )}

              </div>

              <div className="form-field">

                <label htmlFor="phone">Phone Number</label>

                <input

                  id="phone"

                  name="phone"

                  type="tel"

                  autoComplete="tel"

                  value={form.phone}

                  onChange={handleChange}

                  aria-invalid={Boolean(errors.phone)}

                  aria-describedby={

                    errors.phone ? 'phone-error' : undefined

                  }

                  required

                />

                {errors.phone && (

                  <span

                    id="phone-error"

                    className="field-error"

                  >

                    {errors.phone}

                  </span>

                )}

              </div>

              <div className="form-field">

                <label htmlFor="company">Company Name</label>

                <input

                  id="company"

                  name="company"

                  autoComplete="organization"

                  value={form.company}

                  onChange={handleChange}

                  aria-invalid={Boolean(errors.company)}

                  aria-describedby={

                    errors.company ? 'company-error' : undefined

                  }

                  required

                />

                {errors.company && (

                  <span

                    id="company-error"

                    className="field-error"

                  >

                    {errors.company}

                  </span>

                )}

              </div>

              <div className="form-field form-field--full">

                <label htmlFor="service">

                  Service Interested In

                </label>

                <select

                  id="service"

                  name="service"

                  value={form.service}

                  onChange={handleChange}

                  aria-invalid={Boolean(errors.service)}

                  aria-describedby={

                    errors.service ? 'service-error' : undefined

                  }

                  required

                >

                  <option value="">Select a service</option>

                  {serviceInterestOptions.map((option) => (

                    <option key={option} value={option}>

                      {option}

                    </option>

                  ))}

                </select>

                {errors.service && (

                  <span

                    id="service-error"

                    className="field-error"

                  >

                    {errors.service}

                  </span>

                )}

              </div>

              <div className="form-field form-field--full">

                <label htmlFor="message">Message</label>

                <textarea

                  id="message"

                  name="message"

                  value={form.message}

                  onChange={handleChange}

                  aria-invalid={Boolean(errors.message)}

                  aria-describedby={

                    errors.message ? 'message-error' : undefined

                  }

                  required

                />

                {errors.message && (

                  <span

                    id="message-error"

                    className="field-error"

                  >

                    {errors.message}

                  </span>

                )}

              </div>

            </div>

            <button

              type="submit"

              className="btn btn--primary"

              style={{

                marginTop: '1.25rem',

                width: '100%',

              }}

              disabled={status === 'submitting'}

            >

              {status === 'submitting'

                ? 'Sending…'

                : 'Submit Message'}

            </button>

            {status === 'success' && (

              <div

                className="form-status form-status--success"

                role="status"

              >

                Thank you! Your message has been submitted.

                Our team will review your enquiry and get back

                to you shortly.

              </div>

            )}

            {status === 'error' && (

              <div

                className="form-status form-status--success"

                role="alert"

                style={{

                  background: '#fdecea',

                  color: '#b42318',

                  borderColor: '#f3c6c2',

                }}

              >

                Something went wrong while submitting your

                message. Please try again.

              </div>

            )}

          </form>

        </div>

      </AnimatedSection>

    </>

  );

}
