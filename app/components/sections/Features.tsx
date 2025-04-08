'use client';

import { siteConfig } from '../../config/site.config';
import { linksConfig } from '../../config/links.config';
import { FileText, Code, Database } from 'lucide-react';
import { motion } from 'framer-motion';

const Features = () => {
  const { headline, subheadline, featureItems } = siteConfig.features;

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  // Custom icons with brand colors - Responsive sizes
  const featureIcons = [
    <div
      key="markdown"
      className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-gradient-to-br from-[#35C3FF]/10 to-[#0077FF]/10 flex items-center justify-center"
    >
      <FileText className="h-6 w-6 sm:h-7 sm:w-7 text-[#0077FF]" />
    </div>,
    <div
      key="code"
      className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-gradient-to-br from-[#35C3FF]/10 to-[#0077FF]/10 flex items-center justify-center"
    >
      <Code className="h-6 w-6 sm:h-7 sm:w-7 text-[#0077FF]" />
    </div>,
    <div
      key="database"
      className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-gradient-to-br from-[#35C3FF]/10 to-[#0077FF]/10 flex items-center justify-center"
    >
      <Database className="h-6 w-6 sm:h-7 sm:w-7 text-[#0077FF]" />
    </div>,
  ];

  return (
    <section className="w-full px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24 lg:py-32 bg-[#0B1D2A] relative overflow-hidden">
      {/* Background elements - Adjusted for mobile */}
      <div className="absolute top-0 right-0 w-2/3 sm:w-1/3 h-1/3 bg-gradient-to-bl from-[#35C3FF]/5 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-2/3 sm:w-1/2 h-1/2 bg-gradient-to-tr from-[#0077FF]/5 to-transparent rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
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

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {featureItems.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="p-6 sm:p-8 bg-[#1C1E1F] rounded-xl border border-[#35C3FF]/10 hover:border-[#35C3FF]/30 hover:shadow-lg hover:shadow-[#35C3FF]/5 transition-all duration-300 transform hover:-translate-y-1 flex flex-col min-h-[280px] sm:min-h-[300px]"
            >
              <div className="mb-5 sm:mb-6">{featureIcons[index]}</div>
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-[#F6F8FA]/70 leading-relaxed flex-grow">
                {feature.description}
              </p>
              <div className="mt-5 sm:mt-6 h-1 w-12 bg-gradient-to-r from-[#35C3FF] to-[#0077FF] rounded-full"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* "Learn more" button - Improved tap target */}
        <motion.div
          className="mt-12 sm:mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <a
            href="#finalcta"
            onClick={e => {
              e.preventDefault();
              document
                .getElementById('finalcta')
                ?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-4 sm:py-3 text-[#35C3FF] hover:text-white border border-[#35C3FF]/30 hover:bg-[#35C3FF]/10 rounded-lg transition-all duration-300 text-base sm:text-sm font-medium"
          >
            <span>See the complete system</span>
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
