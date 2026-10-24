import { useEffect, useId, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';

export default function ServicesDropdown({ item, onNavigate }) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);
  const closeTimer = useRef(null);
  const menuId = useId();
  const location = useLocation();
  const reduceMotion = useReducedMotion();

  const isActive =
    location.pathname === item.path ||
    item.children?.some((child) => location.pathname === child.path);

  const clearCloseTimer = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const openMenu = () => {
    clearCloseTimer();
    setOpen(true);
  };

  const scheduleClose = () => {
    clearCloseTimer();
    closeTimer.current = setTimeout(() => setOpen(false), 120);
  };

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handlePointerDown = (event) => {
      if (!containerRef.current?.contains(event.target)) {
        setOpen(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
      clearCloseTimer();
    };
  }, []);

  return (
    <li
      className="nav-dropdown"
      ref={containerRef}
      onMouseEnter={openMenu}
      onMouseLeave={scheduleClose}
    >
      <button
        type="button"
        className={`desktop-nav__link${isActive ? ' is-active' : ''}`}
        aria-expanded={open}
        aria-haspopup="true"
        aria-controls={menuId}
        onClick={() => setOpen((prev) => !prev)}
        onFocus={openMenu}
      >
        {item.label}
        <ChevronDown size={16} aria-hidden="true" />
      </button>

      <AnimatePresence>
        {open ? (
          <motion.ul
            id={menuId}
            className="nav-dropdown__menu"
            role="menu"
            initial={reduceMotion ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: 6 }}
            transition={{ duration: 0.2 }}
            onMouseEnter={openMenu}
            onMouseLeave={scheduleClose}
          >
            <li role="none">
              <Link
                role="menuitem"
                to={item.path}
                className={location.pathname === item.path ? 'is-active' : undefined}
                onClick={() => {
                  setOpen(false);
                  onNavigate?.();
                }}
              >
                All Services
              </Link>
            </li>
            {item.children.map((child) => (
              <li key={child.path} role="none">
                <Link
                  role="menuitem"
                  to={child.path}
                  className={location.pathname === child.path ? 'is-active' : undefined}
                  onClick={() => {
                    setOpen(false);
                    onNavigate?.();
                  }}
                >
                  {child.label}
                </Link>
              </li>
            ))}
          </motion.ul>
        ) : null}
      </AnimatePresence>
    </li>
  );
}
