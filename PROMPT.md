# Portfolio Generation Prompt

Use the following prompt with an AI coding assistant (like Claude, GPT-4, or specialized agents) to regenerate this exact portfolio website.

---

### **AI Prompt: Professional Data Analyst & Automation Engineer Portfolio**

**Objective:** Build a high-performance, single-page professional portfolio using React 19, Vite, Tailwind CSS 4, and Framer Motion (motion/react). The site must feature smooth scrolling (Lenis), complex background animations, and a sophisticated dark-themed "glassmorphism" aesthetic.

#### **1. Technical Stack & Setup**
- **Framework:** React 19 + TypeScript + Vite.
- **Styling:** Tailwind CSS 4 (using `@theme` for variables).
- **Icons:** Lucide React.
- **Animations:** Framer Motion (for entrance reveals, magnetic buttons, and floating particles).
- **Smooth Scroll:** Lenis.
- **Font:** "Space Grotesk" (Google Fonts).

#### **2. Design System & Global Styles**
- **Colors:**
  - Background: `#0a0a0a`
  - Accent: `#78e2a0` (Emerald-ish Green)
  - Surface: `#141414` (Glass cards)
  - Border: `rgba(255, 255, 255, 0.1)`
- **UI Elements:**
  - `glass`: `bg-surface/80 backdrop-blur-md border border-border`.
  - `noise`: Subtle SVG noise overlay at 3% opacity.
  - `grid-pattern`: 30px radial dots at 5% opacity.
  - `text-gradient`: Gradient from `#78e2a0` to `emerald-400`.

#### **3. Core Component Logic**
- **BackgroundAnimation:** A fixed background with interactive mouse-following glow (desktop only), moving mesh gradients, animated grid lines, and floating particles.
- **MagneticButton:** A wrapper that uses `useSpring` to pull elements towards the cursor within a radius.
- **Reveal:** A scroll-triggered entrance animation using `whileInView` with a vertical slide and fade.
- **TypingText:** A typewriter effect for the hero "Mantras".
- **Navbar:** Sticky glass navbar with a progress bar at the top representing scroll depth.

#### **4. Content Structure (Centralized Data)**
**Identity:**
- **Name:** Aniket Kote
- **Role:** Data Analyst & Automation Engineer
- **Location:** India | UK
- **Contact:** aniket.kote080799@gmail.com | +91-9405492147

**Sections to Implement:**
1. **Hero:**
   - Heading: "Hey, I'm Aniket Kote" (Gradient name).
   - Tagline: "Automate. Analyze. Implement." (Typewritten).
   - Profile Image: Floating image with a rotated border and grayscale-to-color hover effect.
   - Links: Resume download, GitHub, and Email buttons.
2. **About:**
   - 3+ years experience, 20+ projects.
   - Stats grid showing years of exp, projects, tools, and specialization.
   - Location/Education card.
3. **Projects:**
   - Cards for: "NutriTag (Master's Project)", "Cleani-lyzer" (AI cleaning app), "EBITDA & Employee Allocation" (Power BI), and "Data Extractor for CA".
   - Each card needs tags, description, and GitHub/Demo links.
4. **Skills:**
   - Grid cards for: Python, Generative AI (RAG, LLMs), RPA (UiPath, Selenium), Data Analytics (Power BI), SQL, Automation (n8n), Prompt Engineering, and Fullstack AI.
5. **Experience:**
   - Timeline for: Consultant at Dextra Labs, Freelancer at Automan Solutions, GenAI Intern at IGT Solutions, and Data/RPA roles at CreoNexTech and Neebal Technologies.
6. **Education:**
   - MSc. Data Science (University of Greenwich) and B.E. Computer Science (SPPU).
7. **Contact:**
   - Large CTA: "Let's build something amazing together."
   - Cards for Email, Phone, and LinkedIn.

#### **5. Layout Instructions**
- Use a `max-w-7xl` container for all sections.
- Ensure all sections are wrapped in the `Reveal` component for consistent entrance animations.
- Implement mobile-first responsiveness (hide desktop-only background effects on small screens).
- Include a "Scroll to Top" button that appears after 400px of scrolling.

---
