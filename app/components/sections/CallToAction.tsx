'use client';

import { siteConfig } from '../../config/site.config';

const CallToAction = () => {
  const { ctaText } = siteConfig.finalCTA;

  const handleScroll = () => {
    const element = document.getElementById('finalcta');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="w-full py-8">
      <div className="max-w-3xl mx-auto text-center">
        <button
          onClick={handleScroll}
          className="px-8 py-3 bg-blue-600 text-white rounded-lg text-lg font-medium hover:bg-blue-700 transition-colors"
        >
          {ctaText}
        </button>
      </div>
    </div>
  );
};

export default CallToAction;
