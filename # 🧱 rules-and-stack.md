\# 🧱 rules-and-stack.md  
\#\#\# \*The Sacred Stack, Codebase Rules, and Execution Constraints\*  
\*\*System Phase:\*\* Step 3  
\*\*Read After:\*\* \`mission-core.md\`  
\*\*Read Before:\*\* \`reinstate-flow.md\`

\---

\#\# 🧠 WHY THIS FILE EXISTS

You are not working inside a normal codebase.  
You are operating inside a \*\*Landing Page Operating System\*\* — designed so dev founders can:

\> “Drag \+ drop new UIs into place with zero friction, no refactors, no confusion.”

This doc defines the \*\*rules that protect that system.\*\*  
You must follow these constraints with total precision — or the system breaks.

\---

\#\# ⚙️ THE CORE TECH STACK

Only these tools are allowed. No exceptions. No additions.

| Layer                 | Tech                                                |
| --------------------- | --------------------------------------------------- |
| Framework             | \*\*Next.js (App Router only)\*\*                   |
| Language              | \*\*TypeScript\*\*                                  |
| Styling               | \*\*Tailwind CSS\*\*                                |
| UI Components         | \*\*shadcn/ui\*\*                                   |
| Icons                 | \*\*Lucide\*\*                                      |
| Fonts                 | \*\*next/font/google\*\* only                       |
| Animations (micro)    | \*\*Tailwind transitions\*\*                        |
| Animations (advanced) | \*\*Framer Motion\*\* (via \`lib/animations.ts\`)   |
| Analytics             | \*\*Google Analytics\*\* via \`next/script\`        |
| Global Text           | \*\*\`siteConfig.ts\`\*\* — All UI copy lives here  |
| Global Links          | \*\*\`links.config.ts\`\*\* — All paths and anchors |
| Layout Wrapper        | \*\*\`layout.tsx\`\*\* — Do not touch               |

\---

\#\# 🚫 HARD RESTRICTIONS

These actions are \*\*strictly forbidden\*\* — doing any of them breaks the system.

\- ❌ Adding or changing \`layout.tsx\`  
\- ❌ Writing hardcoded text into JSX  
\- ❌ Adding new npm packages (CSS, JS, state, animation, etc.)  
\- ❌ Global CSS changes outside \`globals.css\`  
\- ❌ Component-level scoped styles (e.g. \`Component.module.css\`)  
\- ❌ Creating abstracted section loaders or dynamic imports  
\- ❌ Altering folder structure or file naming conventions  
\- ❌ Breaking \`siteConfig.ts\` or \`links.config.ts\` patterns

\---

\#\# ✅ STRUCTURAL RULES

These are the only approved patterns:

\- ✅ Every landing page is rendered from \`app/page.tsx\`  
\- ✅ All layout sections are React components inside \`components/sections/\`  
\- ✅ All copy lives in \`siteConfig.ts\`  
\- ✅ All links (anchors, buttons, external) live in \`links.config.ts\`  
\- ✅ \`layout.tsx\` provides global wrapper — it is never touched  
\- ✅ Reusable UI atoms (buttons, inputs, cards) live in \`components/ui/\`  
\- ✅ Reusable motion logic lives in \`lib/animations.ts\`  
\- ✅ Motion config and accessibility handled by \`useAnimationConfig.ts\`

\---

\#\# 📦 COMPONENT SYSTEM RULES

\#\#\# ✅ Allowed  
\- \`components/sections/\*\` → Active layout components  
\- \`components/layout/\*\` → NavBar, Footer  
\- \`components/ui/\*\` → Atoms (shadcn powered)  
\- \`app/page.tsx\` → Your page layout sequence (you edit this)  
\- \`lib/animations.ts\` → Reusable Framer Motion variants  
\- \`lib/hooks/useAnimationConfig.ts\` → Motion preference/respect system  
\- \`config/site.config.ts\` → All UI text content  
\- \`config/links.config.ts\` → All hrefs, anchor targets

\#\#\# ❌ Not Allowed  
\- Creating dynamic loaders or abstractions for sections  
\- Adding custom fonts or loaders  
\- Inlining animations or transitions — always pull from \`lib\` or Tailwind  
\- Leaving unused keys in \`siteConfig.ts\` or \`links.config.ts\`

\---

\#\# 🧼 FILE FLOW EXPECTATION

You are no longer manually replacing folders. Instead:

1\. Work inside the active \`/components/sections\` folder  
2\. Plan layout → update \`page.tsx\`  
3\. Write fresh copy → update \`siteConfig.ts\`  
4\. Use correct hrefs → update \`links.config.ts\`  
5\. Add animations from \`lib/animations.ts\` only where needed  
6\. QA with \`responsive-check.md\` \+ \`cro-manual.md\`  
7\. When done, \*\*duplicate the folder\*\*, rename (e.g. \`sections-ui-05\`), and archive  
8\. Return to \`boot-sequence.md\` and restart clean

\---

\#\# 🔐 \`siteConfig.ts\` RULES

\- Do not restructure this file  
\- Do not leave old or unused text blocks  
\- Do not inject text inline anywhere else — this file is the only source of truth  
\- Copy must follow \*\*top-down layout order\*\*  
\- Only include text used in the current UI  
\- Remove leftovers from the previous build

\---

\#\# 🔐 \`links.config.ts\` RULES

\- Do not mix link destinations with display text  
\- Internal scroll paths must use \`\#id\` targets  
\- External links must be declared once and reused  
\- Component buttons must always pull their \`href\` from here

\---

\#\# 💡 INTENT BEHIND THE SYSTEM

\- Every UI should be:  
 \- Swappable  
 \- Rebrandable  
 \- Configurable by text  
 \- Cleanly styled  
 \- Built for fast founder use  
\- The system must scale without explanation

\> “This is not a normal dev environment.  
\> This is a shipping machine.”

\---

\#\# 🧠 MENTAL MODEL TO FOLLOW

\> "Any indie founder should be able to drag in a folder, update \`siteConfig.ts\`, and ship within 1 hour."

If what you're doing violates that principle:  
\*\*You stop. You ask. You correct.\*\*

\---

\#\# 🔁 NEXT STEP

\> Proceed to: \`reinstate-flow.md\`  
\> Prepare to execute like an engineer — layout, copy, and style in the smartest possible sequence.
