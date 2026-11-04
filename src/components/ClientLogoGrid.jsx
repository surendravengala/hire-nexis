import { clientLogos } from '../config/clients';

/**
 * Client / partner logo strip.
 * Default: seamless horizontal marquee.
 * Pass variant="grid" for a static layout if needed.
 */
export default function ClientLogoGrid({
  className,
  labelledBy,
  variant = 'marquee',
}) {
  // Always render the full registered list — no slice/limit/filter
  const logos = clientLogos;

  if (!logos.length) {
    return (
      <p className="clients-empty">
        Add partner logos to <code>src/assets/clients/</code> and list them in{' '}
        <code>src/config/clients.js</code>.
      </p>
    );
  }

  if (variant === 'grid') {
    return (
      <ul
        className={className || 'clients-grid'}
        aria-labelledby={labelledBy}
      >
        {logos.map((client) => (
          <li key={client.id} className="client-logo-card">
            <img
              src={client.src}
              alt={`${client.name} logo`}
              loading="lazy"
              width={160}
              height={72}
            />
          </li>
        ))}
      </ul>
    );
  }

  // Duplicate sequence so translateX(-50%) loops without a visible jump
  const sequence = [...logos, ...logos];

  return (
    <div
      className={className || 'logo-marquee'}
      aria-labelledby={labelledBy}
      role="region"
      aria-label="Partner company logos"
    >
      <div className="logo-marquee__viewport">
        <ul className="logo-marquee__track">
          {sequence.map((client, index) => {
            const isDuplicate = index >= logos.length;
            return (
              <li
                key={`${client.id}-${index}`}
                className="logo-marquee__item"
                aria-hidden={isDuplicate ? true : undefined}
              >
                <img
                  src={client.src}
                  alt={isDuplicate ? '' : `${client.name} logo`}
                  loading={isDuplicate ? 'eager' : 'lazy'}
                  decoding="async"
                  width={220}
                  height={100}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
