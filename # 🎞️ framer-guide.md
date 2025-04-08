\# 🎞️ framer-guide.md  
\#\#\# \*Motion Strategy for System-Based Landing Pages (Tailwind \+ Framer Only)\*  
\*\*System Phase:\*\* UI Enhancement Layer (Optional After Styling)  
\*\*Read After:\*\* \`ui-styling.md\`  
\*\*Used Sparingly:\*\* Only when justified by layout, scroll flow, or product tone

\---

\#\# 🧠 WHY YOU’RE READING THIS

Animations exist to:  
\- Increase clarity  
\- Reinforce emotion  
\- Smooth transitions  
\- Add polish that \*\*converts\*\* — not just “looks good”

You are not here to “animate for fun.”  
You are here to \*\*enhance scroll-based storytelling\*\*, but \*\*never break performance.\*\*

\---

\#\# 🧩 TOOLSET PERMISSION STRUCTURE

You may only use the following:

| Use Case                    | Tool          | Allowed |
| --------------------------- | ------------- | ------- |
| Hover states                | Tailwind only | ✅      |
| Button \+ micro transitions | Tailwind only | ✅      |
| Fade, slide, staggered      | Framer Motion | ✅      |
| Scroll-based reveals        | Framer Motion | ✅      |
| AnimatePresence / mounts    | Framer Motion | ✅      |
| Physics (spring/bounce)     | Framer Motion | ✅      |
| Global layout shifts        | Framer Motion | ✅      |
| Animations in nav/layout    | ❌ NEVER      | ❌      |
| Animations that slow load   | ❌ NEVER      | ❌      |
| Tailwind \+ Framer conflict | ❌ NEVER      | ❌      |

\---

\#\# ⚖️ WHEN TO USE TAILWIND VS FRAMER

\#\#\# ✅ Use \*\*Tailwind\*\* For:  
\- Hover states (\`hover:scale-105\`, \`hover:bg-opacity-70\`)  
\- Micro delays (\`transition-all\`, \`duration-300\`)  
\- Subtle visual feedback (link underlines, button states)  
\- Utility-first speed boosts that require zero JS

\> 💡 Tailwind \= UI Feedback  
\> 🛑 Never try to scroll-trigger or animate layout with it

\---

\#\#\# ✅ Use \*\*Framer Motion\*\* For:  
\- Hero or section \*\*fade/slide-in\*\* on page load  
\- Scroll-based \*\*reveal\*\* as user progresses  
\- \*\*Staggered\*\* animation of feature blocks or testimonials  
\- AnimatePresence for FAQ accordion open/close  
\- Smooth component entrance/exit during route transitions

\> 💡 Framer \= Motion Logic  
\> 🛑 Only use for \*\*sections\*\*, not layout or navigation

\---

\#\# ⚠️ HARD SYSTEM RULES

You must obey the following to preserve performance \+ plug-and-play:

\- ❌ Never animate NavBar, Footer, or \`layout.tsx\`  
\- ❌ Never animate across routes or pages  
\- ❌ Never import third-party animation libs (GSAP, etc)  
\- ❌ Never block load/render with motion  
\- ❌ Never animate copy-in — animate the container, never the text directly  
\- ❌ Never force animation if the layout is already high-impact

\---

\#\# ✅ ANIMATION ZONES (PERMITTED SECTIONS)

| Section           | Suggested Framer Use                      |
| ----------------- | ----------------------------------------- |
| Hero              | Fade \+ lift (opacity \+ y), once on load |
| Features          | Staggered entrance with slight slide      |
| Proof/Testimonial | Fade in with delay or stagger             |
| Pricing           | Pop or pulse for "Most Popular" card      |
| CTA Final         | Slide in or spring on load                |
| FAQ (shadcn)      | AnimatePresence on open/close (optional)  |

\---

\#\# 🎛️ FRAMER CONTROL CONFIG

Use prebuilt variants from:  
\`/lib/animations.ts\`  
And motion config from:  
\`/lib/hooks/useAnimationConfig.ts\`

These ensure:  
\- Reduced motion users get fallbacks  
\- Consistent easing/timing across all UIs  
\- You don’t reinvent animation logic every build

\> 🔐 DO NOT hardcode random Framer variants in component files  
\> 🔁 Always pull from shared config or variants only

\---

\#\# 💡 MOBILE \+ PERFORMANCE REQUIREMENTS

\- ✅ All motion must degrade gracefully on \`prefers-reduced-motion\`  
\- ✅ Page must load cleanly on 3G simulation  
\- ✅ Lighthouse perf score must stay 90+  
\- ✅ No layout shift (CLS) from animation jank  
\- ✅ Use Tailwind for feedback, Framer for entry

\---

\#\# ✅ FINAL PASS CHECKLIST

\- \[ \] All motion enhances understanding, not distracts  
\- \[ \] Only section-level content is animated  
\- \[ \] Tailwind handles hover and CTA feedback  
\- \[ \] Framer Motion is used cleanly \+ from config  
\- \[ \] Nothing slows render, paint, or scroll  
\- \[ \] Nav \+ Footer untouched  
\- \[ \] Mobile tested and fast

\---

\#\# 🔁 NEXT STEP

If you’ve added motion, re-run:  
\- \`responsive-check.md\`  
\- \`cro-manual.md\` (final persuasion polish pass)

\> If it doesn’t convert faster — kill the motion.  
\> Speed and clarity come first. Always.
