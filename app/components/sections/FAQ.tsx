'use client';

import { useState } from 'react';
import { siteConfig } from '../../config/site.config';
import { linksConfig } from '../../config/links.config';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { headline, subheadline, questions } = siteConfig.faq;

  return (
    <section
      id="faq-section"
      className="w-full px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24 lg:py-32 bg-[#F6F8FA]"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-left sm:text-center mb-10 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0F3555] leading-tight">
            {headline}
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-[#0F3555]/70 max-w-2xl mx-auto leading-relaxed">
            {subheadline}
          </p>
        </motion.div>

        <motion.div
          className="space-y-3 sm:space-y-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {questions.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg sm:rounded-xl shadow-md border border-[#35C3FF]/10 overflow-hidden"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
            >
              <button
                className="w-full px-5 sm:px-8 py-4 sm:py-5 text-left flex justify-between items-center gap-4"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-[#0F3555] text-base sm:text-lg leading-snug">
                  {item.question}
                </span>
                <span className="flex-shrink-0">
                  <ChevronDown
                    className={`h-5 w-5 text-[#0077FF] transition-transform duration-300 ${openIndex === index ? 'transform rotate-180' : ''}`}
                  />
                </span>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 sm:px-8 pb-5 sm:pb-6 text-[#0F3555]/70 border-t border-[#35C3FF]/10 pt-3 sm:pt-4 text-sm sm:text-base leading-relaxed">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional contact info */}
        <motion.div
          className="mt-10 sm:mt-16 text-left sm:text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-[#0F3555]/70 text-sm sm:text-base">
            Still have questions?{' '}
            <a
              href={linksConfig.external.contact}
              className="text-[#0077FF] font-medium hover:underline"
            >
              Get in touch
            </a>{' '}
            with our team.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
