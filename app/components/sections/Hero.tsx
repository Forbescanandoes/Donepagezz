'use client';

import { siteConfig } from '../../config/site.config';
import { linksConfig } from '../../config/links.config';
import { trackEvent } from '../../lib/analytics';
import { motion } from 'framer-motion';

export function Hero() {
  const {
    headline,
    subheadline,
    button,
    badgeText,
    secondaryButton,
    highlights,
  } = siteConfig.hero;

  const handlePrimaryClick = () => {
    trackEvent({
      action: 'click',
      category: 'Hero',
      label: 'primary',
    });
  };

  return (
    <section className="relative overflow-hidden w-full px-4 py-16 sm:py-20 md:py-24 lg:py-32 bg-[#0B1D2A] text-white">
      {/* Background elements - Adjusted for better mobile display */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B1D2A] to-[#0F3555] z-0" />

      {/* Animated gradient squares - Repositioned for mobile */}
      <motion.div
        className="absolute top-1/4 -left-12 sm:-left-24 w-48 sm:w-96 h-48 sm:h-96 bg-gradient-to-r from-[#35C3FF]/10 to-[#0077FF]/20 rounded-3xl z-0 blur-3xl"
        animate={{
          rotate: 360,
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />

      <motion.div
        className="absolute -bottom-16 sm:-bottom-32 -right-16 sm:-right-32 w-48 sm:w-96 h-48 sm:h-96 bg-gradient-to-r from-[#45B8AC]/10 to-[#4AB3FF]/10 rounded-full z-0 blur-3xl"
        animate={{
          rotate: -360,
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />

      {/* Hero content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="mx-auto max-w-4xl text-left sm:text-center">
          {/* Badge - Improved tap target size */}
          <motion.div
            className="inline-flex items-center mb-6 px-4 py-2 rounded-full bg-[#1C1E1F] border border-[#4AB3FF]/30 text-[#35C3FF] text-xs font-semibold tracking-wide uppercase"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {badgeText}
          </motion.div>

          {/* Main headline - Left aligned on mobile, centered on larger screens */}
          <motion.h1
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#35C3FF] to-[#0077FF]">
              {headline.split('.')[0]}.
            </span>
            {headline.includes('.') && (
              <span className="text-white"> {headline.split('.')[1]}</span>
            )}
          </motion.h1>

          {/* Subheadline - Improved readability on mobile */}
          <motion.p
            className="text-base sm:text-lg text-[#F6F8FA]/80 mb-8 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {subheadline}
          </motion.p>

          {/* CTA Buttons - Improved spacing and tap targets */}
          <motion.div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-start sm:justify-center items-stretch sm:items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <a
              href={linksConfig.external.getDonepagez}
              onClick={handlePrimaryClick}
              className="px-6 py-4 bg-gradient-to-r from-[#35C3FF] to-[#0077FF] text-white rounded-lg hover:shadow-lg hover:shadow-[#4AB3FF]/20 font-medium text-base tracking-wide transition-all duration-300 transform hover:translate-y-[-2px] text-center min-h-[56px] flex items-center justify-center"
            >
              {button}
            </a>
            <a
              href={linksConfig.nav.scroll.compare}
              className="px-6 py-4 border border-[#35C3FF]/30 text-[#F6F8FA] rounded-lg hover:bg-[#0F3555]/50 font-medium text-base tracking-wide transition-all duration-300 text-center min-h-[56px] flex items-center justify-center"
            >
              {secondaryButton.text}
            </a>
          </motion.div>

          {/* Features highlight - Improved mobile layout */}
          <motion.div
            className="mt-12 pt-8 border-t border-[#35C3FF]/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="flex flex-row flex-wrap justify-center gap-y-4 sm:gap-6 md:gap-8">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="flex items-center text-[#F6F8FA]/70 px-2 py-1.5 rounded-lg hover:bg-[#1C1E1F]/50 transition-colors"
                >
                  <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#4AB3FF] mr-3"></div>
                  <span className="text-sm font-medium">{highlight}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
