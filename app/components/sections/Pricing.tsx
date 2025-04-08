'use client';

import { siteConfig } from '../../config/site.config';
import { linksConfig } from '../../config/links.config';
import { trackEvent } from '../../lib/analytics';
import { Check, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const Pricing = () => {
  const { headline, subheadline, plans } = siteConfig.pricing;
  const [founderPlan] = plans;

  const handlePlanClick = (planName: string) => {
    trackEvent({
      action: 'select_plan',
      category: 'Pricing',
      label: planName,
    });
  };

  return (
    <section className="w-full px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24 lg:py-32 bg-[#0B1D2A] relative overflow-hidden">
      {/* Background decoration - Adjusted for mobile */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0077FF] to-[#35C3FF]"></div>
      <div className="absolute top-20 sm:top-40 -right-20 sm:-right-40 w-60 sm:w-80 h-60 sm:h-80 bg-[#0077FF]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 sm:bottom-40 -left-20 sm:-left-40 w-60 sm:w-80 h-60 sm:h-80 bg-[#35C3FF]/5 rounded-full blur-3xl"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          className="text-left sm:text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 leading-tight">
            {headline}
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-[#F6F8FA]/70 max-w-3xl mx-auto leading-relaxed">
            {subheadline}
          </p>
        </motion.div>

        {/* Featured Plan - Improved mobile layout */}
        <motion.div
          className="bg-gradient-to-b from-[#1C1E1F] to-[#0F3555] rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden max-w-4xl mx-auto border border-[#35C3FF]/20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            ease: 'easeOut',
          }}
        >
          <div className="p-6 sm:p-8 md:p-12">
            <div className="flex flex-col md:flex-row justify-between md:items-center">
              <div>
                <div className="flex items-center">
                  <Zap className="h-5 w-5 sm:h-6 sm:w-6 text-[#35C3FF] mr-2" />
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                    {founderPlan.name}
                  </h3>
                </div>
                <p className="text-[#35C3FF] mt-2 text-base sm:text-lg">
                  {founderPlan.audience}
                </p>
              </div>
              <div className="mt-6 md:mt-0 md:text-right bg-[#0B1D2A]/40 py-3 sm:py-4 px-4 sm:px-6 rounded-lg sm:rounded-xl">
                <span className="text-[#F6F8FA] text-lg sm:text-xl font-semibold">
                  {founderPlan.period}
                </span>
              </div>
            </div>

            <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 gap-x-8 sm:gap-x-12 gap-y-4 sm:gap-y-5">
              {founderPlan.features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="shrink-0 rounded-full bg-[#35C3FF]/10 p-1">
                    <Check className="h-4 w-4 sm:h-5 sm:w-5 text-[#35C3FF]" />
                  </div>
                  <span className="ml-3 text-[#F6F8FA]/90 text-sm sm:text-base">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 sm:mt-12">
              <a
                href={linksConfig.external.getDonepagez}
                onClick={() => handlePlanClick(founderPlan.name)}
                className="w-full py-4 px-6 bg-gradient-to-r from-[#35C3FF] to-[#0077FF] text-white font-semibold rounded-lg sm:rounded-xl hover:shadow-lg hover:shadow-[#35C3FF]/20 text-center inline-block transition-all duration-300 transform hover:-translate-y-1 text-base sm:text-lg"
              >
                {founderPlan.button}
              </a>
            </div>
          </div>
        </motion.div>

        {/* Additional trust elements - Improved mobile layout */}
        <motion.div
          className="mt-8 sm:mt-12 flex flex-col sm:flex-row justify-center items-center sm:items-start gap-4 sm:gap-8 text-[#F6F8FA]/40 text-xs sm:text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="flex items-center">
            <span className="h-4 w-4 sm:h-5 sm:w-5 mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </span>
            <span>Secure Payment</span>
          </div>
          <div className="flex items-center">
            <span className="h-4 w-4 sm:h-5 sm:w-5 mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
            <span>Instant Access</span>
          </div>
          <div className="flex items-center">
            <span className="h-4 w-4 sm:h-5 sm:w-5 mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </span>
            <span>Money-Back Guarantee</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
