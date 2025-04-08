'use client';

import { useState } from 'react';
import Logo from '../shared/Logo';
import { siteConfig } from '../../config/site.config';
import { linksConfig } from '../../config/links.config';

interface NavBarProps {
  className?: string;
}

const NavBar: React.FC<NavBarProps> = ({ className = '' }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Create a type-safe mapping from link labels to their href targets
  const navLinks = siteConfig.nav.links.map(label => {
    // Special case for "How It Works" to map to compare section
    if (label === 'How It Works') {
      return { href: linksConfig.nav.scroll.compare, label };
    }
    const key = label.toLowerCase() as keyof typeof linksConfig.nav.scroll;
    return { href: linksConfig.nav.scroll[key] || '#', label };
  });

  return (
    <>
      <nav
        className={`w-full px-4 py-3 sm:py-4 sm:px-6 md:px-8 fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-[#0B1D2A]/95 border-b border-[#35C3FF]/10 ${className}`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Logo className="flex-shrink-0 w-auto h-8 sm:h-10" size="medium" />

          {/* Mobile Menu Button - Improved tap target */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden inline-flex items-center justify-center p-3 -mr-2 text-white hover:bg-[#1C1E1F]/50 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`block w-full h-0.5 bg-[#35C3FF] transform transition-all duration-300 origin-top-right ${
                  isMenuOpen
                    ? 'rotate-45 translate-y-[0.5px] translate-x-[2px]'
                    : ''
                }`}
              />
              <span
                className={`block w-full h-0.5 bg-[#35C3FF] transition-opacity duration-300 ${
                  isMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block w-full h-0.5 bg-[#35C3FF] transform transition-all duration-300 origin-bottom-right ${
                  isMenuOpen
                    ? '-rotate-45 -translate-y-[0.5px] translate-x-[2px]'
                    : ''
                }`}
              />
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="text-[#F6F8FA]/80 hover:text-[#35C3FF] transition-colors duration-200 text-sm font-medium tracking-wide"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#finalcta"
              className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-[#35C3FF] to-[#0077FF] text-white font-medium text-sm tracking-wide hover:shadow-lg hover:shadow-[#4AB3FF]/20 transition-all duration-300 transform hover:translate-y-[-2px]"
            >
              {siteConfig.nav.button}
            </a>
          </div>
        </div>

        {/* Mobile Menu - Improved animation and spacing */}
        <div
          className={`
            md:hidden overflow-hidden transition-all duration-300 ease-in-out
            ${isMenuOpen ? 'max-h-[calc(100vh-4rem)] opacity-100' : 'max-h-0 opacity-0'}
          `}
        >
          <div className="px-2 py-4 space-y-1 bg-[#1C1E1F]/80 backdrop-blur-sm rounded-lg mt-2">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="block px-4 py-3 text-[#F6F8FA]/80 hover:text-[#35C3FF] hover:bg-[#0F3555]/50 rounded-lg transition-colors duration-200 text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="px-2 pt-2 pb-1">
              <a
                href="#finalcta"
                className="block w-full px-4 py-3 text-center bg-gradient-to-r from-[#35C3FF] to-[#0077FF] text-white font-medium rounded-lg hover:shadow-lg hover:shadow-[#4AB3FF]/20 transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {siteConfig.nav.button}
              </a>
            </div>
          </div>
        </div>
      </nav>
      {/* Spacer to prevent content overlap */}
      <div className="h-14 sm:h-16" aria-hidden="true" />
    </>
  );
};

export default NavBar;
