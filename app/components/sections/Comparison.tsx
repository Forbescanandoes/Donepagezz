'use client';

import { siteConfig } from '../../config/site.config';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

const Comparison = () => {
  const { headline, subheadline, comparisonPoints, bottomLine } =
    siteConfig.comparison;

  return (
    <section className="w-full px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24 lg:py-32 bg-[#F6F8FA]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-left sm:text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0F3555] mb-3 sm:mb-4 leading-tight">
            {headline}
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-[#0F3555]/70 max-w-3xl mx-auto leading-relaxed">
            {subheadline}
          </p>
        </motion.div>

        {/* Comparison Table for larger screens */}
        <motion.div
          className="hidden lg:block rounded-xl overflow-hidden shadow-lg border border-[#35C3FF]/10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="py-6 px-8 text-left bg-[#0B1D2A] text-white text-lg font-medium"></th>
                <th className="py-6 px-8 text-center bg-gradient-to-r from-[#35C3FF] to-[#0077FF] text-white text-lg font-medium">
                  <div className="flex flex-col items-center">
                    <span className="text-xs uppercase tracking-wider mb-1 opacity-80">
                      Our Approach
                    </span>
                    <span className="text-xl font-bold">DonePagez</span>
                  </div>
                </th>
                <th className="py-6 px-8 text-center bg-[#1C1E1F] text-white text-lg font-medium">
                  <div className="flex flex-col items-center">
                    <span className="text-xs uppercase tracking-wider mb-1 opacity-80">
                      Traditional Approach
                    </span>
                    <span className="text-xl font-bold">Visual Editors</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonPoints.map((point, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? 'bg-white' : 'bg-[#F6F8FA]'}
                >
                  <td className="py-6 px-8 font-medium text-[#0F3555]">
                    {point.title}
                  </td>
                  <td className="py-6 px-8 text-center">
                    <div className="flex items-center justify-center">
                      <div className="flex items-center justify-center text-[#0077FF] font-medium">
                        <Check className="mr-2 h-5 w-5" />
                        <span>{point.donepagez}</span>
                      </div>
                    </div>
                  </td>
                  <td className="py-6 px-8 text-center">
                    <div className="flex items-center justify-center">
                      <div className="flex items-center justify-center text-[#0F3555]/70">
                        <X className="mr-2 h-5 w-5 text-red-500" />
                        <span>{point.builders}</span>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
              <tr className="bg-[#0B1D2A]/5">
                <td className="py-6 px-8 font-bold text-[#0F3555]">
                  {bottomLine.title}
                </td>
                <td className="py-6 px-8 text-center">
                  <div className="flex items-center justify-center text-[#0077FF] font-medium">
                    <Check className="mr-2 h-5 w-5" />
                    <span>{bottomLine.donepagez.description}</span>
                  </div>
                </td>
                <td className="py-6 px-8 text-center text-[#0F3555]/70">
                  <div className="flex items-center justify-center">
                    <X className="mr-2 h-5 w-5 text-red-500" />
                    <span>{bottomLine.builders.description}</span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </motion.div>

        {/* Card-based comparison for mobile/tablet - Improved layout */}
        <div className="lg:hidden space-y-4 sm:space-y-6">
          {comparisonPoints.map((point, index) => (
            <motion.div
              key={index}
              className="bg-white p-5 sm:p-6 rounded-xl shadow-md border border-[#35C3FF]/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <h3 className="font-semibold text-[#0F3555] text-base sm:text-lg mb-4 pb-2 border-b border-[#35C3FF]/10">
                {point.title}
              </h3>
              <div className="space-y-4">
                <div className="flex flex-col">
                  <span className="text-xs sm:text-sm font-medium text-[#0077FF] uppercase tracking-wide mb-2">
                    Our Approach
                  </span>
                  <div className="bg-[#35C3FF]/10 text-[#0077FF] py-2.5 px-4 rounded-lg inline-block text-sm sm:text-base">
                    {point.donepagez}
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs sm:text-sm font-medium text-[#0F3555]/70 uppercase tracking-wide mb-2">
                    Traditional Approach
                  </span>
                  <div className="text-[#0F3555]/70 py-2.5 px-4 text-sm sm:text-base">
                    {point.builders}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          <motion.div
            className="bg-gradient-to-r from-[#0B1D2A] to-[#0F3555] p-5 sm:p-6 rounded-xl shadow-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.6 }}
          >
            <h3 className="font-bold text-white text-base sm:text-lg mb-4">
              {bottomLine.title}
            </h3>
            <div className="space-y-3 sm:space-y-4">
              <div className="bg-white/10 p-4 rounded-lg">
                <div className="flex items-center text-white mb-2">
                  <Check className="h-4 w-4 mr-2 text-[#35C3FF] flex-shrink-0" />
                  <span className="font-medium text-sm sm:text-base">
                    {bottomLine.donepagez.label}
                  </span>
                </div>
                <p className="text-white/80 text-xs sm:text-sm leading-relaxed">
                  {bottomLine.donepagez.description}
                </p>
              </div>
              <div className="bg-white/5 p-4 rounded-lg">
                <div className="flex items-center text-white/90 mb-2">
                  <X className="h-4 w-4 mr-2 text-red-400 flex-shrink-0" />
                  <span className="font-medium text-sm sm:text-base">
                    {bottomLine.builders.label}
                  </span>
                </div>
                <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
                  {bottomLine.builders.description}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
