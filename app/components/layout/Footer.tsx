'use client';

import { siteConfig } from '../../config/site.config';
import { linksConfig } from '../../config/links.config';
import Logo from '../shared/Logo';

const Footer = () => {
  const { companyText, copyright } = siteConfig.footer;

  const legalLinks = [
    { href: linksConfig.external.privacy, text: 'Privacy Policy' },
    { href: linksConfig.external.terms, text: 'Terms of Service' },
  ];

  return (
    <footer className="w-full px-4 py-12 sm:px-6 md:px-8 bg-[#0B1D2A] text-[#F6F8FA]/70 relative overflow-hidden">
      {/* Background gradient accent */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#35C3FF] to-[#0077FF]"></div>
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-[#35C3FF]/5 to-transparent rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Company Info with Logo */}
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <Logo className="mb-4 mx-auto md:mx-0" />
            <p className="text-sm max-w-md">{companyText}</p>
          </div>

          {/* Social + Legal Links */}
          <div className="flex flex-col items-center md:items-end space-y-6">
            {/* X (formerly Twitter) Button */}
            <a
              href={linksConfig.external.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center"
              aria-label="X (formerly Twitter)"
            >
              <div className="relative overflow-hidden">
                <div className="px-5 py-2 bg-gradient-to-r from-[#35C3FF] to-[#0077FF] rounded-lg flex items-center group-hover:scale-105 transition-transform duration-300">
                  <span className="text-sm font-bold text-white">
                    Follow @0xlog1k
                  </span>
                </div>
                <div className="absolute -inset-[2px] bg-gradient-to-r from-[#4AB3FF] to-[#35C3FF] rounded-lg blur-sm opacity-60 -z-10 group-hover:opacity-100 transition-opacity"></div>
              </div>
            </a>

            {/* Legal Links */}
            <div className="flex space-x-6 text-xs">
              {legalLinks.map(({ href, text }) => (
                <a
                  key={href}
                  href={href}
                  className="hover:text-[#35C3FF] transition-colors duration-200"
                >
                  {text}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-[#35C3FF]/10 text-center md:text-right">
          <p className="text-xs">{copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
