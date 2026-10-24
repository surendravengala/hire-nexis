import { Link } from 'react-router-dom';
import PageMeta from '../components/PageMeta';
import { pageMeta } from '../config/siteData';

export default function NotFound() {
  return (
    <>
      <PageMeta {...pageMeta.notFound} />
      <section className="page not-found" aria-labelledby="not-found-heading">
        <div className="container">
          <p className="page-hero__eyebrow">404</p>
          <h1 id="not-found-heading">Page Not Found</h1>
          <p>
            The page you are looking for does not exist or may have moved. Use the navigation or
            return home to continue exploring Hire Nexis.
          </p>
          <div className="btn-group" style={{ justifyContent: 'center', marginTop: '1.5rem' }}>
            <Link to="/" className="btn btn--primary">
              Back to Home
            </Link>
            <Link to="/contact" className="btn btn--secondary">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
