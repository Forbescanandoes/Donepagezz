\# 🎨 ui-styling.md  
\#\#\# \*Styling the UI with Speed, Brand, and Variation—Without Breaking the System\*  
\*\*System Phase:\*\* Step 9  
\*\*Read After:\*\* \`copywriting-guide.md\`  
\*\*Read Before:\*\* \`cro-manual.md\`

\---

\#\# 🧠 WHY YOU’RE READING THIS

You now have:  
\- A locked layout (\`layout-design.md\`)  
\- Final copy and config (\`siteConfig.ts\`)  
\- Structure, tone, and scroll rhythm

Now it's time to visually style the UI — but \*\*this is not decoration\*\*.

You are here to:  
\> Make this landing page look and feel clean, modern, fast, and unique — without breaking the system or bloating the codebase.

\---

\#\# ⚙️ TECH STACK CONSTRAINTS

\*\*STRICTLY USE ONLY:\*\*  
\- ✅ TypeScript (Next.js App Router)  
\- ✅ Tailwind CSS  
\- ✅ \`@shadcn/ui\`  
\- ✅ Lucide icons  
\- ✅ Framer Motion (only from \`lib/animations.ts\`)

\> ❌ No raw CSS or scoped modules  
\> ❌ No unapproved Tailwind plugins  
\> ❌ No custom animation logic inside components  
\> ❌ No third-party UI kits  
\> ❌ No inline hardcoded styling

\*\*Design decisions must NEVER:\*\*  
\- Add dependencies  
\- Slow down loading  
\- Break Tailwind’s utility structure  
\- Require JS for layout  
\- Introduce bloat into section components

\> \*\*Speed is sacred.\*\* Pages must load near-instantly, even on 3G.

\---

\#\# 🔁 RESET YOUR STYLE BRAIN

\> Before styling: forget the last UI.

Every build must feel:  
\- Visually fresh  
\- Structurally clean  
\- Branded with restraint  
\- Scroll-optimized  
\- Emotionally aligned with the copy \+ layout

\> ⚠️ Never carry over button styles, spacing tricks, or color schemes from the last UI.

\---

\#\# 🧩 STYLING SYSTEM OVERVIEW

You are styling:  
\- Tailwind utility classes only  
\- shadcn/ui props and theming  
\- Visual rhythm between sections  
\- Visual hierarchy of content  
\- Reusable motion effects via \`lib/animations.ts\`  
\- Backgrounds, icons, contrast zones (all inline utility-class based)

\---

\#\# 🧠 HOW TO THINK ABOUT STYLING

Before touching a Tailwind class:

\#\#\# Ask yourself:  
\- What \*\*energy\*\* does this layout convey? (e.g. lean, premium, gritty, open)  
\- What’s the \*\*emotion\*\* of the copy? (confident, excited, honest, urgent)  
\- What kind of \*\*founder\*\* is this page speaking to?  
\- Does this feel like a \*\*MVP\*\*, \*\*growth product\*\*, or \*\*scaling SaaS\*\*?  
\- Should the scroll feel \*\*calm and clean\*\* or \*\*high-energy and sharp\*\*?

This will dictate:  
\- Font sizing  
\- Button styling  
\- CTA weight  
\- Section padding  
\- Color \+ dark/light bias

\---

\#\# 🎨 TACTICAL SECTION VARIATION

Style every section with CRO intent and layout function in mind:

\#\#\# Hero  
\- Highest contrast and largest font scale  
\- CTA must be instantly visible  
\- Consider subtle Framer Motion entry from \`lib/animations.ts\`  
\- Mobile-first spacing \= no wasted space

\#\#\# Features  
\- Use contrast or color separation to segment  
\- Lucide icons must serve clear purpose (not decoration)  
\- Watch for cramped spacing on stacked rows

\#\#\# Social Proof  
\- Neutral color zone (gray bg or border)  
\- Style for believability, not hype  
\- Use minimalist testimonials or clean stat rows

\#\#\# Pricing  
\- Use \*\*card contrast, tier tags, and spacing\*\* to emphasize value  
\- Consider bold buttons \+ hover scale for clarity  
\- Visual weight must lead to most valuable tier

\#\#\# FAQ  
\- Use shadcn accordion  
\- Keep font size readable  
\- Style for friendliness and clarity, not flash

\#\#\# Final CTA  
\- More intense than Hero  
\- Inverted contrast, bolder button  
\- Can use subtle motion reveal or CTA pulse (if justified)

\---

\#\# 🎛 ANIMATION STRATEGY

\> Animation is polish — not core UX.

\- ✅ Use Tailwind hover/fade/scale for micro interactions  
\- ✅ Use Framer Motion only via \`lib/animations.ts\`  
\- ✅ Animate on scroll or load — never loop, bounce, or distract  
\- ✅ Respect \`prefers-reduced-motion\` via \`useAnimationConfig.ts\`  
\- ❌ Do not create custom motion logic  
\- ❌ Do not over-animate — 1–2 variants per page max

\---

\#\# 📏 SPACING \+ RESPONSIVENESS RULES

\#\#\# General  
\- Use Tailwind spacing scale only (\`px-\*\`, \`py-\*\`, \`gap-\*\`)  
\- Use \`max-w-screen-md\` / \`lg\` / \`xl\` for inner block limits  
\- Stack vertically on mobile  
\- Buttons must use \`min-w\`, \`py\`, and \`rounded-\*\` based on priority  
\- Typography: clear hierarchy between h1 → h3 → body

\#\#\# Breakpoints  
| Breakpoint | Required? | Notes |  
|-------------------|-----------|-----------------------------------------|  
| \`sm\` (640px) | ✅ | Core mobile experience (start here) |  
| \`md\` (768px) | ✅ | Tablet portrait & small laptops |  
| \`lg\` (1024px) | ✅ | Mid-sized desktops |  
| \`xl\` (1280px) | ✅ | Wide layout structure |  
| \`2xl\` (1536px) | Optional | Only adjust here if visual gap demands |

\> Final pass occurs in \`responsive-check.md\`

\---

\#\# 🚫 DO NOT VIOLATE

\- ❌ No component modifications for style  
\- ❌ No motion outside \`lib/animations.ts\`  
\- ❌ No shadow bloat, color overload, or conflicting contrasts  
\- ❌ No third-party animation packages  
\- ❌ No global Tailwind config changes unless critical and approved

\---

\#\# ✅ FINAL OUTPUT REQUIREMENTS

Before you move on:  
\- \[ \] Each section has unique, clean visual tone  
\- \[ \] CTA buttons feel branded, clickable, and urgent  
\- \[ \] Fonts, spacing, and icons match layout rhythm  
\- \[ \] Page feels like a brand — not a generic UI kit  
\- \[ \] Tailwind \+ shadcn only — no bloat, no overrides  
\- \[ \] Animations are subtle, meaningful, and performant  
\- \[ \] Page loads instantly and scrolls naturally

\---

\#\# 🔁 NEXT STEP

\> Proceed to: \`cro-manual.md\`  
\> You’ll now validate whether your structure and styling actually convert.

\*\*You’re no longer styling a UI.  
You’re styling momentum.\*\*
