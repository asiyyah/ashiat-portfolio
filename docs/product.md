# Product Specification — Portfolio Website

## 1. Purpose

This document is the single source of truth for the portfolio website.

It defines the product vision, design principles, architecture, engineering conventions, content structure, and implementation requirements.

The goal is to ensure that any coding agent produces a consistent result without making assumptions or introducing conflicting patterns.

If implementation decisions conflict with this specification, the agent should stop, explain the conflict, and propose an alternative instead of silently changing the architecture.

---

## 2. Agent Instructions

### General Rules

- Treat this document as the definitive project specification.
- Do not introduce alternative design systems, frameworks, state management libraries, or architectural patterns unless explicitly approved.
- When uncertainty exists, prefer consistency with this document over introducing a new approach.
- If a requirement cannot be implemented exactly as specified, explain why before proceeding.

### Development Workflow

- Build the project in the phases defined later in this specification.
- At the end of each phase:
  - Run `tsc --noEmit`
  - Run the linter
  - Run `next build`
- Do not continue while the project contains errors.
- Every phase should end in a deployable state.

### Dependencies

- Keep dependencies intentionally small.
- Do not install additional packages unless they provide meaningful functional value.
- Ask before adding packages outside the approved stack.
- Avoid solving simple problems by introducing libraries.

### Code Style

Assume the maintainer has:

- Basic HTML
- CSS
- JavaScript
- React
- TypeScript
- Experience building two Next.js applications

Write code that is:

- Easy to understand
- Well organised
- Well commented where appropriate
- Idiomatic
- Easy to extend

Avoid clever abstractions that reduce readability.

Optimise for long-term maintainability over short-term convenience.

---

## 3. Product Vision

This portfolio is not a marketing landing page.

It is not a developer portfolio.

It is not a template.

It is a carefully crafted digital product that represents the designer's approach to solving complex business problems.

The website should demonstrate maturity through clarity, composition, typography, interaction, and thoughtful presentation—not decoration.

Visitors should immediately recognise that this is someone who designs products businesses can trust.

---

## 4. About the Designer

The designer specialises in:

- Enterprise SaaS
- B2B Products
- B2C Products
- Fintech
- Compliance Platforms
- Revenue Management Systems
- Data-heavy Dashboards
- Design Systems
- Complex Product Workflows

The designer also builds with AI assistance and has practical experience with:

- HTML
- CSS
- JavaScript
- TypeScript
- React
- Next.js
- Framer

This should strengthen credibility rather than redefine the designer as a frontend engineer.

The portfolio should consistently communicate the following hierarchy:

Product Designer → Systems Thinker → AI-first Design Engineer

Never invert this hierarchy.

---

## 5. Primary Goal

After spending less than one minute on the website, visitors should feel:

- This designer understands complex products.
- This designer makes difficult systems feel intuitive.
- This designer thinks strategically.
- This designer understands implementation.
- I'd trust this person with our product.

The website should communicate these ideas through the work itself rather than through claims.

---

## 6. Design Philosophy

The website should be memorable because of:

- Composition
- Typography
- Layout
- Rhythm
- Spacing
- Storytelling
- Restraint

It should never rely on visual gimmicks.

Every design decision must support communication.

Every interaction must have a purpose.

Every element should earn its place.

The experience should feel calm, confident, elegant and intentional.

---

## 7. Brand Personality

The overall personality of the website should be:

- Elegant
- Editorial
- Minimal
- Sophisticated
- Architectural
- Quiet
- Confident
- Modern
- Timeless
- Professional

Avoid playful or overly expressive aesthetics.

The work should remain the primary visual focus.

---

## 8. Design Principles

The website should be:

- Visual-first
- Easy to scan
- Easy to navigate
- Lightweight
- Fast
- Accessible
- Consistent

Visitors should understand each section within a few seconds.

Typography, imagery, spacing and layout should communicate more than lengthy paragraphs.

Use concise copy.

Avoid unnecessary explanation.

---

## 9. Things to Avoid

Do not use:

- Beige backgrounds
- AI-style glowing gradients
- Decorative blobs
- Glassmorphism as the primary aesthetic
- Emoji
- Random illustrations
- Overly colourful palettes
- Excessive animations
- Decorative icons without purpose
- Walls of text
- Generic AI-generated layouts
- Generic designer portfolio hero sections
- Template-style feature grids

The portfolio should feel original because of its composition—not because it follows current visual trends.

---

## 10. Visual Direction

The visual language should feel inspired by thoughtfully designed software and editorial design rather than marketing websites.

Use:

- Large, intentional whitespace
- Strong typography hierarchy
- Consistent grid alignment
- Balanced asymmetry where appropriate
- Clear visual rhythm
- Refined spacing
- Restrained motion
- High-quality imagery

The interface should feel premium without appearing luxurious for its own sake.

---

## 11. Colour System

The interface should primarily use a monochromatic palette.

Primary colours:

- Black
- White
- Charcoal
- Neutral Greys

Choose one accent colour.

Use the accent sparingly.

Accent colour should be reserved for:

- Active navigation
- Interactive states
- Focus rings
- Important actions

Never use colour as decoration.

---

## 12. Typography

Typography is one of the primary design elements.

Use a refined serif paired with a modern sans-serif.

Hierarchy should be created through:

- Scale
- Weight
- Rhythm
- Alignment
- Spacing

Avoid relying on colour differences to establish hierarchy.

Typography should feel calm, readable and editorial.

---

## 13. Information Architecture

The website should remain intentionally small.

Every page must have a clear purpose.

Avoid adding pages simply to list more information.

```text
/
├── Home
├── Work
│   ├── Product Design
│   └── Code Projects
├── Playground
├── About
└── Contact
```

The experience should feel cohesive, with each page naturally leading to the next.

---

## 14. Navigation

The navigation should remain visible throughout the browsing experience.

### Behaviour

- Sticky navigation
- Initially transparent while the hero is visible
- Transition to a subtle solid background after scrolling
- Smooth transition between states
- Never obscure content
- Lightweight and visually unobtrusive

### Desktop

Navigation items:

- Home
- Work
- Playground
- About
- Contact

Right side:

- Theme Toggle
- Primary CTA ("Let's Talk" or similar)

Current page should always be clearly indicated.

### Mobile

Use a clean slide-down or full-screen navigation.

Requirements:

- Accessible
- Keyboard navigable
- Easy to dismiss
- Smooth transition
- Preserve visual hierarchy

Avoid complicated animated menus.

---

## 15. Grid System

The entire website should be built on one consistent layout system.

### Desktop

- 12-column responsive grid.

### Tablet

- Adapted multi-column layout.

### Mobile

- Single-column layout with carefully considered spacing.

The grid should control:

- Alignment
- Rhythm
- Spacing
- Content width
- Visual consistency

Do not create different layout systems for different pages.

---

## 16. Spacing System

Whitespace is one of the primary design tools.

Every section should breathe.

Spacing should follow a consistent scale throughout the application.

Maintain consistency across:

- page padding
- section spacing
- card spacing
- typography spacing
- grid gaps

Avoid visually crowded layouts.

---

## 17. Home Page

The homepage should introduce the designer through work rather than self-promotion.

It should answer:

- Who is this?
- What do they design?
- Why should I continue scrolling?

### Section 1 — Hero

Simple.

Confident.

Minimal.

Large typography.

Avoid excessive marketing copy.

Suggested hierarchy:

Product Designer

Designing enterprise software,
fintech products and intelligent
digital systems.

Supporting sentence:

A concise statement describing the ability to bridge product thinking, UX and implementation.

Primary CTA:

View Work

Secondary CTA:

Get in Touch

The hero should establish confidence through restraint.

### Section 2 — Featured Work

Immediately showcase selected projects.

Avoid making users search for your best work.

Display:

- 3–4 featured projects.

Mix:

- Enterprise
- SaaS
- Fintech

Project previews should emphasise visuals first.

### Section 3 — Areas of Expertise

Do not present this as a wall of skill badges.

Instead display elegant categories.

Examples:

- Enterprise SaaS
- Fintech
- Compliance
- Design Systems
- Complex Workflows
- Data Visualization
- AI-assisted Development

Each category should be concise.

### Section 4 — Selected Impact

Communicate experience through meaningful metrics.

Examples:

- Years designing products
- Enterprise platforms delivered
- Projects shipped
- Complex workflows designed

Focus on quality over quantity.

Present these visually.

### Section 5 — About Preview

One short paragraph.

Professional portrait.

Link to About page.

This section should create curiosity rather than tell the entire story.

### Section 6 — Contact CTA

Simple closing section.

Minimal copy.

Strong CTA.

---

## 18. Work Page

This is the centerpiece of the website.

Everything else supports this page.

The Work page should feel curated rather than exhaustive.

### Layout

- Large editorial heading.
- Short introduction.
- Tab navigation.
- Product Design
- Code Projects

Tabs should transition smoothly.

State should remain local.

No global state management.

---

## 19. Product Design

This tab showcases professional design work.

Each project card should communicate:

- Cover Image
- Project Name
- Industry
- Role
- Short Summary
- Outcome

Project imagery should dominate the layout.

Avoid text-heavy previews.

Cards should encourage exploration.

### Case Study Structure

Every case study follows the same structure.

- Overview
- Challenge
- Approach
- Process
- Solution
- Impact
- Reflection

Keep concise.

Support with visuals.

### Case Study Design Principles

- Images should carry most of the narrative.
- Text should support the visuals.
- Avoid essays.
- Avoid documenting every design activity.
- Focus on decisions.

---

## 20. Code Projects

This section demonstrates implementation ability.

It should never compete visually with Product Design.

Present projects in a more structured format.

Each project includes:

- Preview
- Description
- Stack
- AI tools used
- Live Demo
- Repository
- Technical highlights

Avoid making this feel like GitHub.

Maintain the same visual language used throughout the portfolio.

---

## 21. Playground

The Playground is not another portfolio.

It is a curated collection of design exploration.

Think:

- A designer's canvas.
- A sketchbook.
- A collection of ideas.

### Purpose

- Show creativity.
- Experimentation.
- Visual thinking.

Without requiring full case studies.

### Content Examples

- UI concepts
- Dashboard explorations
- Typography studies
- Component explorations
- Interaction concepts
- Visual experiments
- Unreleased ideas

### Layout

- Responsive gallery.
- Inspired by a design canvas.
- Grid-based
- Carefully curated
- Different card sizes to create rhythm
- Organised composition
- Consistent spacing

The layout should encourage browsing.

### Playground Card

Each card includes:

- Cover image
- Title
- Category
- Optional short caption

### Hover Behaviour

- Subtle image zoom.
- Border transition.
- Cursor feedback.
- Soft elevation.
- No exaggerated motion.

### Opening a Playground Item

Each item may open:

- Lightbox
- Dedicated detail page

Maintain the same minimalist visual language.

---

## 22. About Page

The About page should feel editorial.

Not autobiographical.

Keep copy concise.

### Sections

- Introduction
- Career Timeline
- Design Philosophy
- Working Style
- Tools & Stack
- Professional Portrait

### Timeline

Present visually.

Avoid long paragraphs.

Highlight meaningful milestones.

### Design Philosophy

Explain:

- How problems are approached.
- How systems thinking influences decisions.
- How collaboration works.
- How AI supports the workflow.

Keep practical.

Avoid buzzwords.

### Tools & Stack

Present tools by category:

- Design
- Development
- AI
- Productivity

Do not create a wall of logos.

Each category should feel clean and intentional.

---

## 23. Contact Page

Simple.

Professional.

Minimal.

Include:

- Email
- LinkedIn
- GitHub
- Resume
- Optional scheduling link

The goal is to make contacting the designer effortless.

---

## 24. Footer

Minimal.

Include:

- Navigation
- Social links
- Copyright
- Short personal signature

Avoid oversized footers.

---

## 25. Theme Switching

Support:

- Light Mode
- Dark Mode

Requirements:

- Persist user preference.
- Transition smoothly.
- No flash of incorrect theme.
- Maintain accessibility in both themes.
- The monochromatic design system should remain consistent regardless of theme.

---

## 26. Design System & Implementation

## 27. Design System

The website should be built on a reusable design system rather than page-specific styles.

Every visual element should derive from the same design language to ensure consistency and maintainability.

The design system should prioritise simplicity, clarity, and reuse over excessive flexibility.

---

## 28. Design Tokens

Use CSS variables for all design tokens.

Avoid hardcoded values where practical.

### Colour Tokens

Create semantic tokens rather than naming tokens after colours.

Example:

- `--background`
- `--foreground`
- `--surface`
- `--surface-hover`
- `--border`
- `--muted`
- `--accent`
- `--accent-foreground`

This allows future palette adjustments without refactoring components.

### Typography Tokens

Define consistent typography scales.

Examples:

- Display
- Heading 1
- Heading 2
- Heading 3
- Body Large
- Body
- Small
- Caption

Spacing between typography should remain consistent throughout the application.

### Spacing Tokens

Use a consistent spacing scale.

Do not introduce arbitrary spacing values.

Spacing should remain predictable across:

- Sections
- Cards
- Navigation
- Layout containers
- Forms
- Galleries

### Radius Tokens

Use restrained border radii.

Avoid exaggerated rounded corners.

The visual language should feel refined rather than playful.

### Shadow Tokens

Use subtle shadows.

Prefer borders before shadows.

Shadows should communicate elevation rather than decoration.

---

## 29. Components

Every component should have a single responsibility.

Components should remain composable.

Avoid highly configurable "do everything" components.

Prefer composition over configuration.

### Layout Components

Create reusable primitives.

Examples:

- Container
- Section
- Grid
- Stack
- Cluster
- Divider

These should become the building blocks of every page.

### Navigation Components

Create:

- Navbar
- Mobile Navigation
- Navigation Item
- Theme Toggle
- Primary CTA

### Typography Components

Examples:

- Display
- Heading
- Subheading
- Body
- Caption
- Metric

Maintain typography consistency across every page.

### Content Components

Examples:

- Project Card
- Featured Project
- Playground Card
- Metric Card
- Timeline
- Section Header
- Tag
- Image Gallery
- Callout

### Interactive Components

Examples:

- Button
- Tabs
- Accordion (if needed)
- Lightbox
- Theme Toggle

Avoid unnecessary components.

---

## 30. Motion System

Motion should improve usability.

Never animate simply because it looks impressive.

### Motion Principles

Motion should communicate:

- hierarchy
- focus
- continuity
- feedback

Avoid decorative movement.

### Motion Examples

Use subtle animation for:

- Navigation transitions
- Hover states
- Tab transitions
- Image reveals
- Section reveals
- Gallery interactions
- Page transitions

### Reduced Motion

Respect:

- `prefers-reduced-motion`

Disable or simplify:

- scroll reveals
- parallax
- image movement
- transition durations

Accessibility takes priority.

---

## 31. Responsive Behaviour

Responsive design is not simply stacking desktop layouts.

Each breakpoint should be intentionally designed.

### Desktop

- Primary experience.
- Use the full grid system.
- Take advantage of whitespace.

### Tablet

- Recompose layouts where appropriate.
- Avoid awkward half-desktop layouts.

### Mobile

- Optimise for readability.
- Reduce visual complexity.
- Navigation should remain intuitive.
- Cards should scale naturally.
- Typography should remain comfortable.

---

## 32. Content Architecture

Content should never be hardcoded into page components.

Projects should be data-driven.

### Folder Structure

```text
content/
    design/
        project-name/
            index.mdx
            cover.webp
            gallery/
    code/
        project-name/
            index.mdx
            cover.webp
            screenshots/
```

Every project should be self-contained.

### Adding New Projects

Adding a project should require only:

- creating a new folder
- adding assets
- writing the MDX file

The website should automatically discover and render new projects.

No existing page should require modification.

---

## 33. Case Study Content Model

Every design project should support:

- title
- slug
- industry
- role
- duration
- year
- summary
- challenge
- approach
- solution
- impact
- reflection
- coverImage
- gallery

### Code Project Model

- title
- slug
- summary
- stack
- repository
- liveDemo
- aiTools
- technicalHighlights
- coverImage
- gallery

Use strict TypeScript interfaces.

No `any`.

---

## 34. Technology Stack

### Framework

- Next.js 15 (App Router)

### UI

- React 19

### Language

- TypeScript (strict mode)

### Styling

- Tailwind CSS v4
- CSS Variables

### Animation

- Motion (Framer Motion)

### Content

- MDX

### Fonts

- `next/font`

### Images

- `next/image`

### Deployment

- Vercel

### Analytics (optional)

- Vercel Analytics
- Plausible

### Testing

- Vitest
- Playwright

### Linting

- ESLint
- Prettier

### Do Not Introduce

Do not use:

- Redux
- Zustand
- Context for global UI state
- CSS-in-JS
- MUI
- Chakra
- Bootstrap
- Large animation libraries
- A headless CMS

The project should remain lightweight.

---

## 35. Folder Structure

```text
app/
components/
    layout/
    navigation/
    work/
    playground/
    about/
    contact/
    ui/
    motion/
content/
lib/
hooks/
styles/
public/
types/
```

Organise by feature where appropriate.

Avoid deeply nested folders.

---

## 36. Server Component Strategy

Server Components should be the default.

Only use Client Components when browser interactivity is required.

### Server Components

Examples:

- Navigation layout
- Project cards
- Case studies
- Page layouts
- Content rendering

### Client Components

Examples:

- Theme toggle
- Tab switcher
- Navigation scroll state
- Mobile navigation
- Motion wrappers
- Lightbox
- Any browser API usage

Avoid unnecessary `use client` directives.

---

## 37. Composition Principles

Prefer composition over configuration.

Good:

```tsx
<Section>
  <Container>
    <ProjectGrid />
  </Container>
</Section>
```

Avoid giant configurable components with numerous variant props.

Build reusable primitives.

---

## 38. State Management

State should remain local.

Examples:

- Work tabs
- Theme
- Navigation
- Gallery

No global state solution is required.

Avoid prop drilling by keeping state close to where it is used.

---

## 39. Loading & Streaming

Use `loading.tsx` for:

- `/work/[slug]`

Loading states should match the design language.

Avoid generic grey shimmer placeholders.

Skeletons should:

- use thin lines
- subtle pulse animation
- match the final layout

Use:

- `next/image` with `priority`

Only for above-the-fold imagery.

Everything else should lazy load.

Wrap client-only visual components in:

- `<Suspense>`

Where appropriate.

Use dynamic imports only when necessary.

---

## 40. Performance

Optimise for:

- Fast initial load
- Excellent Lighthouse scores
- Minimal JavaScript
- Image optimisation
- Code splitting
- Font optimisation
- Lazy loading
- Bundle size awareness

Avoid unnecessary client-side rendering.

---

## 41. Caching & Rendering Strategy

The portfolio is a static-first website.

There is no per-request data fetching in the base implementation.

### Default rendering strategy

- Static Site Generation (SSG)
- Build pages at compile time
- Optimise for fast initial loads
- Minimise runtime JavaScript

### Static Generation

The following routes should be statically generated:

- `/`
- `/work`
- `/work/[slug]`
- `/playground`
- `/about`
- `/contact`

Generate all project pages using:

- `generateStaticParams()`

Project slugs should be generated from the content source.

No manual slug list should exist.

### Future CMS Support

The architecture should support introducing a CMS later without major refactoring.

However:

- Do not build CMS-specific abstractions today.
- If a CMS is introduced later, content loading should be replaceable while the UI remains unchanged.

### Dynamic Functionality

The only acceptable dynamic feature in the base architecture is an optional contact form.

If implemented:

- `app/api/contact/route.ts`

Requirements:

- Server-side validation
- Typed request body
- Graceful error handling
- Spam protection appropriate for a portfolio
- Environment variables for secrets
- No secrets committed to source control

Do not over-engineer with queues, Redis, or complex infrastructure.

---

## 42. SEO & Metadata

SEO should be implemented from the beginning.

Use the Next.js Metadata API.

Every page should provide:

- Title
- Description
- Canonical URL
- Open Graph metadata
- Twitter metadata

### Dynamic Metadata

Each project page should generate metadata from its content.

Metadata should never be duplicated manually.

### Open Graph Images

Generate dynamic Open Graph images using:

- `opengraph-image.tsx`

Each project should display:

- Project title
- Cover image
- Brand styling

Avoid generic placeholder images.

### Sitemap

Generate automatically.

Never maintain a manual list.

The sitemap should use the same project source used to render the Work page.

### Robots

Provide a generated:

- `robots.ts`

Using Next.js conventions.

### Semantic HTML

Use semantic elements throughout.

Examples:

- `<main>`
- `<nav>`
- `<section>`
- `<article>`
- `<header>`
- `<footer>`

Maintain proper heading hierarchy.

One `<h1>` per page.

Do not skip heading levels.

---

## 43. Accessibility

Accessibility is a core product requirement.

It is not an enhancement.

The website should meet WCAG AA standards.

### Keyboard Navigation

Everything interactive must be accessible via keyboard.

Examples:

- Navigation
- Tabs
- Theme switch
- Mobile menu
- Playground items
- Project cards
- Links
- Buttons

### Focus States

Never remove focus outlines.

Instead:

- Create a custom focus style using the design system.

Requirements:

- Thin accent-coloured ring
- Consistent across all interactive components
- Clearly visible
- Fits the visual language

### Contrast

Verify all colour combinations.

Particular attention should be given to:

- Muted text
- Borders
- Dark mode
- Secondary labels

Every text element should meet WCAG AA.

### Images

Every image requires meaningful alternative text.

Describe the interface or content.

Do not use placeholder text such as:

- Image
- Screenshot
- Project Image

### Motion Accessibility

Respect:

- `prefers-reduced-motion`

Reduce:

- scroll animations
- hover movement
- transitions
- motion-heavy interactions

Maintain usability without animation.

### ARIA

Implement ARIA only where appropriate.

Examples:

- Work tab switcher:
  - `role="tablist"`
  - `role="tab"`
  - `role="tabpanel"`
  - `aria-selected`

Avoid unnecessary ARIA where semantic HTML already provides meaning.

---

## 44. Code Quality

The project should feel like production software.

### TypeScript

- Use strict mode.
- Avoid `any`.
- If unavoidable, document why.

### Component Responsibilities

Each component should have one responsibility.

Separate:

- Data loading
- Business logic
- Presentation

Avoid combining all three in one component.

### Utilities

Shared logic belongs in:

- `/lib`

Examples:

- Sorting
- Filtering
- Slug generation
- Date formatting
- Content utilities

Keep utilities pure.

### Comments

Comment why, not what.

Avoid obvious comments.

Good:

```ts
// Use IntersectionObserver instead of scroll events
// to minimise layout thrashing.
```

Avoid:

```ts
// Increment counter
counter++;
```

### Dead Code

The final codebase should contain:

- No commented-out blocks
- No unused imports
- No unused components
- No abandoned experiments

Leave the repository clean.

---

## 45. Testing Strategy

Testing should remain lightweight and practical.

### Unit Tests (Vitest)

Test pure utilities only.

Examples:

- Project sorting
- Content filtering
- Slug generation
- Date formatting

Avoid unnecessary component testing.

### Smoke Tests (Playwright)

Cover critical user journeys.

Minimum tests:

- Homepage loads
- Navigation works
- Theme switching works
- Work tabs switch correctly
- Case study page renders
- Playground loads
- Mobile navigation opens and closes
- Contact page loads

Keep the suite fast and maintainable.

---

## 46. Maintainability

Assume this portfolio will continue evolving for years.

The architecture should make it easy to:

- Add new case studies
- Add new Playground items
- Add new pages
- Update branding
- Expand the design system

Avoid tightly coupling layouts to specific content.

Prefer reusable, content-driven patterns.

The portfolio should scale naturally without requiring structural refactoring.

---

## 47. Build Phases

Develop the project in the following order.

Do not skip phases.

Each phase should end with:

- `tsc --noEmit`
- `next build`
- `ESLint`
- A working, deployable application

### Phase 1 — Foundation

- Initialise Next.js
- Configure TypeScript
- Configure Tailwind
- Configure fonts
- Configure design tokens
- Create folder structure
- Base layout

### Phase 2 — Content Layer

Create:

- Type definitions
- Content loader
- Project models
- Placeholder content

### Phase 3 — UI Foundations

Build reusable primitives.

Examples:

- Container
- Section
- Button
- Typography
- Grid
- Tags

### Phase 4 — Static Pages

Implement:

- Hero
- About
- Contact
- Footer
- Home layout

Responsive across all breakpoints.

### Phase 5 — Work Section

Build:

- Tabs
- Project cards
- Project grids
- Content integration

### Phase 6 — Case Studies

Implement:

- Dynamic routes
- Case study layout
- Image galleries
- Loading skeletons

### Phase 7 — Playground

Implement:

- Responsive gallery
- Hover interactions
- Detail views or lightbox

### Phase 8 — Motion

Apply:

- Scroll reveals
- Hover transitions
- Page transitions
- Reduced-motion support

Motion should enhance, not dominate.

### Phase 9 — SEO

Implement:

- Metadata
- Sitemap
- Robots
- Open Graph images
- Structured metadata

### Phase 10 — Accessibility

Audit:

- Keyboard navigation
- Focus states
- Colour contrast
- ARIA
- Semantic HTML

### Phase 11 — Testing

Run:

- Vitest
- Playwright smoke tests

Resolve all failures.

### Phase 12 — Performance

Audit:

- Lighthouse
- Bundle size
- Images
- Fonts
- JavaScript

Target:

- Performance: ≥95
- Accessibility: 100
- Best Practices: 100
- SEO: 100

### Phase 13 — Deployment

- Deploy to Vercel.
- Verify production behaviour.

---

## 48. Deployment Checklist

Before launch:

- Repository connected to Vercel
- Next.js framework detected
- HTTPS enabled
- Custom domain configured (if applicable)
- Environment variables configured (if required)
- Image configuration verified
- Analytics enabled (optional)
- Production Lighthouse audit completed
- Open Graph images verified
- Metadata verified
- Mobile responsiveness verified
- Accessibility spot-check completed

Only consider the project complete after passing production verification.

---

## 49. Final Acceptance Criteria

The project is complete when it satisfies all of the following:

### Product

- Clearly communicates expertise in complex product design
- Presents work through visual storytelling rather than excessive text
- Distinguishes Product Design, Code Projects, and Playground without fragmentation
- Feels cohesive, intentional, and memorable

### Design

- Consistent design system across all pages
- Strong editorial typography
- Excellent spacing and visual rhythm
- Restrained, purposeful motion
- Cohesive monochromatic aesthetic with a single accent colour

### Engineering

- Clean, maintainable codebase
- Static-first architecture
- Strict TypeScript
- Feature-based organisation
- Reusable components
- Content-driven project management (MDX)
- Excellent performance
- Responsive across desktop, tablet, and mobile

### Quality

- Accessible (WCAG AA)
- Keyboard navigable
- SEO complete
- Smoke tests passing
- Production build passing
- Deployment verified

### Guiding Principle

The portfolio should be remembered for the quality of its thinking, the clarity of its presentation, and the craftsmanship of its execution—not for decorative effects or fleeting design trends. Every decision should reinforce the designer's ability to simplify complex systems into intuitive, elegant experiences.
