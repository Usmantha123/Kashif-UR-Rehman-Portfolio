# Kashif Ur Rehman — Full Stack Developer Portfolio

A modern, high-performance, recruiter-first developer portfolio for **Kashif Ur Rehman**, Full Stack Developer (2.5+ years experience) specializing in Node.js, Express.js, NestJS, React, MongoDB, MySQL, and Cloud Architectures.

---

## ⚡ High-Conversion Recruiter Architecture

The portfolio is designed specifically to pass the **5-second recruiter scan** and allow hiring managers to book an interview or reach out in **ONE click**:

1. **Outcome-Focused Hero**:
   - Immediate headline: `"Backend & Full Stack Developer | Node.js · NestJS · React"`.
   - Primary Glowing CTA: **"Schedule an Interview"** (connects to Calendly/Cal.com via `VITE_BOOKING_URL` with automatic fallback to `#contact`).
   - Secondary CTAs: **WhatsApp Me** (prefilled message), **Download CV** (with `PDF · Updated Nov 2024` badge), and **View Projects**.
   - Profile photo with gradient ring and automatic fallback to a stylish **"KUR"** initials monogram avatar.
   - **Quick Facts** glass stack: 2.5+ Years Exp, 10+ Projects, Stripe/TESS/CyberSource, AWS/Azure/GCP, NestJS/Node/React.
2. **Infinite Tech-Stack Marquee**:
   - Auto-scrolling logo strip (Node.js, NestJS, Express, React, MongoDB, MySQL, Stripe, AWS, Azure, GitHub, SonarQube), pausing on hover.
3. **"Why Hire Me" Strip**:
   - 4-card value proposition strictly from CV:
     - Production-Ready Backends (microservices + monolith)
     - Secure by Design (JWT, RBAC, SonarQube & Mend Bolt remediation)
     - Payments Expert (Stripe, TESS Payment, CyberSource, webhooks)
     - AI & Cloud Integrations (AI backend features, AWS/Azure/GCP)
4. **Sticky Conversion Elements**:
   - Desktop Navbar: Dual CTAs ("Book Interview" + "CV").
   - Mobile Sticky Bottom Bar: Fixed 1-click "Book Interview", "WhatsApp", and direct "Call".
   - Floating WhatsApp trigger on desktop with "Chat with Kashif" tooltip.
5. **Pre-Footer CTA Banner**:
   - *"Hiring a Backend / Full Stack Developer? Let's schedule a 15-minute call."*
6. **Projects Upgrade**:
   - Gradient top borders, hover lift, tech chips.
   - Structured `"Role · What I built · Tech"` overview.
   - Category badges (`AI Platform`, `Enterprise Mobility`, `Blockchain / PropTech`, `Healthcare System`) and country tags (`Qatar Client`).

---

## 📁 Project Structure

```text
kashif-Portfolio/
├── public/
│   ├── favicon.svg          # Custom vector favicon (KUR initials)
│   └── resume.pdf           # Downloadable CV placeholder (replace with your file)
├── src/
│   ├── assets/
│   │   └── profile.jpg      # Profile photo (with automatic fallback to initials avatar)
│   ├── components/
│   │   ├── About.jsx        # Bio and animated counter stats
│   │   ├── BackToTop.jsx    # Floating back-to-top button
│   │   ├── CallToActionBanner.jsx # Full-width high-converting pre-footer CTA
│   │   ├── Contact.jsx      # Quick contact channels + recruiter hiring form
│   │   ├── Education.jsx    # Academic degree card (Islamia College, CGPA 3.40)
│   │   ├── Experience.jsx   # Vertical career timeline (Veroke Pvt Ltd)
│   │   ├── Footer.jsx       # Semantic footer with links & copyright
│   │   ├── Hero.jsx         # Recruiter-first hero, quick facts & glowing CTAs
│   │   ├── Navbar.jsx       # Sticky header, Book Interview + CV buttons
│   │   ├── ProjectModal.jsx # Accessible dialog with focus trap & Esc close
│   │   ├── Projects.jsx     # Structured cards: Role · What I built · Tech
│   │   ├── SectionHeading.jsx # Reusable badges and section titles
│   │   ├── Skills.jsx       # Categorized skills without arbitrary bars
│   │   ├── StickyActions.jsx# Desktop WhatsApp button + Mobile bottom conversion bar
│   │   ├── TechMarquee.jsx  # Infinite auto-scrolling tech stack strip
│   │   ├── ThemeToggle.jsx  # Dark/Light mode button
│   │   ├── Toast.jsx        # Floating feedback alerts
│   │   └── WhyHireMe.jsx    # 4-card value proposition from CV
│   ├── data/
│   │   └── data.js          # CENTRAL REPOSITORY: all content lives here
│   ├── hooks/
│   │   ├── useCopyToClipboard.js # Clipboard utility with toast feedback
│   │   ├── useCountUp.js         # Smooth numeric counter on scroll
│   │   ├── useScrollSpy.js       # Active section detector on scroll
│   │   ├── useTheme.js           # Theme state with resilient localStorage
│   │   └── useTypingEffect.js    # Cycling typing effect
│   ├── utils/
│   │   └── analytics.js     # Conversion event tracking helper
│   ├── App.jsx              # Application root
│   ├── index.css            # Tailwind directives, animations & custom styles
│   └── main.jsx             # React entry point
├── .env.example             # Template for booking URL & form endpoints
├── index.html               # Semantic HTML5, JSON-LD Person schema & SEO
├── package.json             # Scripts & dependencies
├── postcss.config.js        # PostCSS configuration
├── tailwind.config.js       # Tailwind palette & typography
├── vite.config.js           # Vite build configuration
└── README.md
```

---

## 🛠️ Quick Start

### 1. Installation
```bash
npm install
```

### 2. Configure Environment Variables
Create a `.env` file in the root directory:
```bash
cp .env.example .env
```
Set your booking URL (Calendly, Cal.com, etc.):
```env
VITE_BOOKING_URL=https://calendly.com/your-username/15min
```
> **Note**: If `VITE_BOOKING_URL` is omitted, all "Book Interview" and "Schedule an Interview" buttons will smoothly scroll directly to the contact form on the page!

### 3. Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the site.

### 4. Production Build
```bash
npm run build
npm run preview
```

---

## ✍️ How to Edit Content (`src/data/data.js`)

All personal information, experiences, projects, skills, education, and links are decoupled from UI logic in **`src/data/data.js`**:

- **Update Personal Details & Roles**:
  Edit `personalData` in `src/data/data.js` (name, headline, tagline, email, phone, location, LinkedIn link).
- **Update Projects**:
  Add or modify objects in `projectsData`.
  - `role`: Role title on project (e.g., Lead Backend Developer).
  - `whatIBuilt`: Punchy outcome summary for recruiters.
  - `category`: Category badge (e.g., AI Platform, Enterprise Mobility).
  - `clientLocation`: Location tag (e.g., Qatar Client).
  - `tags`: Technology tags displayed on each card.
  - `liveUrl` & `githubUrl`: If empty (`""`), buttons remain hidden automatically.
- **Update Experience**:
  Add or edit objects in `experienceData`.
- **Update Skills**:
  Add or edit items in `skillsData`.
- **Update Resume & Avatar**:
  - Replace `public/resume.pdf` with your real resume.
  - Replace `src/assets/profile.jpg` with your photo (if left empty or invalid, the stylish **KUR** initials monogram is shown automatically).

---

## 🌐 Deployment Instructions

### Vercel (Recommended)
1. Push your repository to GitHub.
2. Sign in to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import your repository.
4. Add environment variables if desired (`VITE_BOOKING_URL`, `VITE_FORMSPREE_ENDPOINT`).
5. Click **Deploy**.

### Netlify
1. Sign in to [Netlify](https://netlify.com) and import your repository.
2. Build command: `npm run build`, Publish directory: `dist`.
3. Set your environment variables in Netlify site settings.
4. Click **Deploy Site**.

### GitHub Pages
1. In `vite.config.js`, set `base: '/kashif-Portfolio/'` (matching your repo name).
2. Run `npm run build`.
3. Deploy the `dist` folder using `gh-pages` or GitHub Actions.

---

## ♿ Accessibility & SEO

- Structured Data (`JSON-LD Person Schema`) in `index.html`.
- Semantic HTML5 (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`).
- Full keyboard navigation with visible focus rings (`:focus-visible`).
- Project details modal traps focus and closes with `Esc`.
- Strict respect for `prefers-reduced-motion`.
- Lighthouse target: 90+ on Performance, Accessibility, and SEO.
