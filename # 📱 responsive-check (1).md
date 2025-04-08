\# 📱 responsive-check.md  
\#\#\# \*Final Responsive QA Pass — Mobile First, Pixel-Perfect, Performance-Locked\*  
\*\*System Phase:\*\* Step 10  
\*\*Read After:\*\* \`ui-styling.md\`  
\*\*Read Before:\*\* \[Manual Save \+ Reset\]

\---

\#\# 🧠 WHY YOU’RE READING THIS

You’ve styled the UI (\`ui-styling.md\`)  
You’ve locked layout, copy, and brand tone.

Now it's time to \*\*validate the full experience across real-world screens\*\*.

\> This is your last pass before the UI is archived.  
\> No tweaks later. No guessing. One pass. Ship it clean.

\---

\#\# ⚔️ MISSION

\> Over 60% of traffic is mobile.  
\> Your dev founder users care about clarity, speed, and execution confidence.

This doc ensures:  
\- Scroll never breaks  
\- Spacing always works  
\- Every screen reads clean and converts fast

\---  
—  
\#\# ⚠️ COMMON MISTAKES TO CATCH

\- ❌ Centered text wrapping on mobile  
\- ❌ 2-column grids with zero spacing on tablet  
\- ❌ CTAs that fall below scroll line  
\- ❌ Empty visual gaps on iPad  
\- ❌ Footer weirdness on ultrawide

—

\#\# ✅ CORE RESPONSIVE PRINCIPLES

\- ✅ Mobile-first always — start at 320px  
\- ✅ Tailwind only — no custom media queries  
\- ✅ No horizontal scroll — anywhere, ever  
\- ✅ Layouts must \*\*stack cleanly\*\* at all breakpoints  
\- ✅ Buttons must be tap-friendly on thumbs  
\- ✅ Visual hierarchy must stay intact when compressed

\---

\#\# 📏 RESPONSIVE DEVICE CHECKLIST

Verify each range manually using DevTools or emulators.

\---

\#\#\# 1\. \*\*Small Mobile (320–375px)\*\*  
\- Devices: iPhone SE, Pixel 4a, iPhone 12 Mini  
\- \[ \] Button/text wrapping  
\- \[ \] Layout stack order  
\- \[ \] No horizontal scroll  
\- \[ \] Headline readability  
\- \[ \] Padding \+ margins aren’t cramped

\---

\#\#\# 2\. \*\*Regular Mobile (375–414px)\*\*  
\- Devices: iPhone 12–14, Pixel 5, Galaxy S20  
\- \[ \] Cards and CTA blocks scale cleanly  
\- \[ \] Section contrast holds  
\- \[ \] Nav items (if visible) aren’t clipped

\---

\#\#\# 3\. \*\*Large Mobile / Small Tablets (430–600px)\*\*  
\- Devices: Galaxy Fold (folded), iPad Mini portrait  
\- \[ \] Grid/card layout doesn’t collapse weirdly  
\- \[ \] Padding doesn’t feel bloated  
\- \[ \] Visual density feels deliberate

\---

\#\#\# 4\. \*\*Tablet (768–834px)\*\*  
\- Devices: iPad portrait, Kindle  
\- \[ \] 2-column layouts balance properly  
\- \[ \] Section scale feels natural  
\- \[ \] Typography scales without overflow

\---

\#\#\# 5\. \*\*Tablet Landscape / Small Laptops (1024–1280px)\*\*  
\- Devices: iPad landscape, MacBook Air  
\- \[ \] Navigation mode correct (hamburger vs inline)  
\- \[ \] Columns align — no stretched gaps  
\- \[ \] Footer doesn’t float or disappear

\---

\#\#\# 6\. \*\*Desktop (1440px+)\*\*  
\- Devices: MacBook Pro, ultrawide displays  
\- \[ \] Intentional whitespace, not dead space  
\- \[ \] Layout doesn’t feel empty  
\- \[ \] Visual hierarchy still leads the eye  
\- \[ \] CTAs don’t drift out of sight

\---

\#\# 🧪 PERFORMANCE CHECKLIST

After layout checks, confirm system speed and visual integrity:

\- \[ \] Page loads fast on simulated 3G/4G  
\- \[ \] Lighthouse score (mobile): 90+  
\- \[ \] No layout shift (CLS \= 0\)  
\- \[ \] No unused Tailwind classes  
\- \[ \] Fonts load fast — system-first unless specified  
\- \[ \] No added animations unless approved (Tailwind / Framer Motion only)  
\- \[ \] Only Lucide \+ shadcn/ui components
