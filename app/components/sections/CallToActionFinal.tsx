'use client';

import { siteConfig } from '../../config/site.config';
import { linksConfig } from '../../config/links.config';
import { trackEvent } from '../../lib/analytics';
import { motion } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';

const CallToActionFinal = () => {
  const { headline, subheadline, ctaText, trialText } = siteConfig.finalCTA;

  const handlePrimaryClick = () => {
    trackEvent({
      action: 'click',
      category: 'FinalCTA',
      label: 'primary',
    });
  };

  return (
    <section
      id="finalcta"
      className="w-full px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24 lg:py-32 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0F3555] to-[#0B1D2A] z-0"></div>

      {/* Animated accent shapes - Adjusted for mobile */}
      <motion.div
        className="absolute top-10 sm:top-20 left-5 sm:left-10 w-48 sm:w-64 h-48 sm:h-64 bg-[#35C3FF]/5 rounded-full blur-3xl z-0"
        animate={{
          x: [0, 30, 0],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />

      <motion.div
        className="absolute bottom-5 sm:bottom-10 right-5 sm:right-10 w-60 sm:w-80 h-60 sm:h-80 bg-[#35C3FF]/5 rounded-full blur-3xl z-0"
        animate={{
          x: [0, -40, 0],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="bg-gradient-to-b from-[#1C1E1F] to-[#0B1D2A] rounded-xl sm:rounded-3xl shadow-2xl overflow-hidden border border-[#35C3FF]/20 p-6 sm:p-8 md:p-12 lg:p-16">
          <motion.div
            className="text-left sm:text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-[#35C3FF]/10 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-6 sm:mb-8">
              <Zap className="h-6 w-6 sm:h-8 sm:w-8 text-[#35C3FF]" />
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              {headline}
            </h2>

            <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-[#F6F8FA]/70 leading-relaxed">
              {subheadline}
            </p>

            <div className="mt-8 sm:mt-10">
              <a
                href={linksConfig.external.getDonepagez}
                onClick={handlePrimaryClick}
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base sm:text-lg font-semibold text-white bg-gradient-to-r from-[#35C3FF] to-[#0077FF] rounded-xl hover:shadow-lg hover:shadow-[#35C3FF]/20 transition-all duration-300 transform hover:-translate-y-1"
              >
                {ctaText}
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <p className="mt-4 text-[#F6F8FA]/60 text-sm sm:text-base text-center">
                {trialText}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionFinal;
