'use client';

import { siteConfig } from '../../config/site.config';
import { motion } from 'framer-motion';

const SocialProof = () => {
  const { headline, subheadline, stats } = siteConfig.socialProof;

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
        duration: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="w-full px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24 lg:py-28 bg-[#F6F8FA] relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#35C3FF] to-[#0077FF]"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-left sm:text-center mb-12 sm:mb-16">
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0F3555] mb-3 sm:mb-4 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {headline}
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg text-[#0F3555]/80 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {subheadline}
          </motion.p>
        </div>

        {/* Stats Grid - Improved mobile layout */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white p-5 sm:p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl border border-[#35C3FF]/10 text-center transform transition-all duration-300 hover:-translate-y-1 flex flex-col items-center justify-center min-h-[180px] sm:min-h-[200px]"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 rounded-full bg-gradient-to-br from-[#35C3FF]/10 to-[#0077FF]/20 flex items-center justify-center">
                <span className="text-[#0077FF] text-lg sm:text-xl font-bold">
                  {index + 1}
                </span>
              </div>
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#35C3FF] to-[#0077FF] mb-2 sm:mb-3">
                {stat.value}
              </p>
              <p className="text-xs sm:text-sm font-medium text-[#0F3555]/70 uppercase tracking-wide max-w-[180px] mx-auto">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProof;
