interface ScrollOptions {
  offset?: number;
  behavior?: ScrollBehavior;
  alignToTop?: boolean;
}

/**
 * Smoothly scrolls to a section while accounting for the navbar height
 * @param id - The ID of the element to scroll to
 * @param options - Optional configuration for scrolling behavior
 */
export const scrollToSection = (id: string, options: ScrollOptions = {}) => {
  const { offset = 0, behavior = 'smooth', alignToTop = true } = options;

  const element = document.getElementById(id);
  const navbar = document.querySelector('nav');

  if (!element) {
    console.warn(`Element with id "${id}" not found`);
    return;
  }

  // Calculate navbar height (if it exists)
  const navbarHeight = navbar?.offsetHeight || 0;

  // Get element position
  const elementPosition = element.getBoundingClientRect().top + window.scrollY;

  // Calculate final scroll position
  const scrollPosition = alignToTop
    ? elementPosition - navbarHeight - offset
    : elementPosition + element.offsetHeight - window.innerHeight + offset;

  window.scrollTo({
    top: scrollPosition,
    behavior: behavior,
  });
};

/**
 * Handles smooth scrolling for anchor links
 * @param e - Click event
 * @param sectionId - ID of the target section
 * @param options - Optional scroll configuration
 */
export const handleSmoothScroll = (
  e: React.MouseEvent<HTMLAnchorElement>,
  sectionId: string,
  options?: ScrollOptions
) => {
  e.preventDefault();
  scrollToSection(sectionId, options);
};

/**
 * Checks if an element is fully in viewport
 * @param element - The element to check
 * @param offset - Optional offset from the edges of the viewport
 */
export const isInViewport = (element: HTMLElement, offset = 0): boolean => {
  const rect = element.getBoundingClientRect();
  const navbar = document.querySelector('nav');
  const navbarHeight = navbar?.offsetHeight || 0;

  return (
    rect.top >= navbarHeight + offset &&
    rect.left >= offset &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) - offset &&
    rect.right <=
      (window.innerWidth || document.documentElement.clientWidth) - offset
  );
};

/**
 * Scrolls to the top of the page smoothly
 */
export const scrollToTop = (behavior: ScrollBehavior = 'smooth') => {
  window.scrollTo({
    top: 0,
    behavior: behavior,
  });
};
