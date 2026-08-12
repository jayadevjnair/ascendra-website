import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onApplyClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onApplyClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Courses', href: '#courses' },
    { name: 'Learning Modes', href: '#modes' },
    { name: 'Placements', href: '#placements' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-inner">
        {/* Brand Logo */}
        <a href="#home" className="brand-logo" onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}>
          <img
            src="/ASCENDRA%20LOGO%20PDF-page-1-Photoroom.png"
            alt="ASCENDRA Logo"
            style={{ height: '76px', width: 'auto', objectFit: 'contain' }}
          />
        </a>

        {/* Desktop Menu */}
        <nav>
          <ul className="nav-menu">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="nav-link"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right CTA Actions */}
        <div className="nav-actions">
          <a href="tel:+919999999999" className="nav-phone-link" title="Call Admission Helpline">
            <Phone size={15} />
            <span>0481 999 9999</span>
          </a>

          <button
            className="btn btn-primary btn-sm"
            onClick={onApplyClick}
            id="nav-apply-btn"
          >
            <span>Apply Now</span>
            <ArrowUpRight size={16} />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            id="mobile-menu-toggle"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="mobile-drawer-link"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
            >
              {link.name}
            </a>
          ))}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '10px' }}>
            <a href="tel:+919497088222" className="btn btn-secondary btn-sm" style={{ width: '100%' }}>
              <Phone size={16} />
              <span>Call Helpline: +91 94970 88222</span>
            </a>
            <button
              className="btn btn-primary"
              style={{ width: '100%' }}
              onClick={() => {
                setMobileMenuOpen(false);
                onApplyClick();
              }}
            >
              <span>Apply for 2026 Batch</span>
              <ArrowUpRight size={18} />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
