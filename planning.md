# Flooring Landing Page - Development Plan

## Project Overview

**Project Name:** Premium Flooring Landing Page  
**Timeline:** 8 weeks (MVP)  
**Tech Stack:** Next.js 14+, shadcn/ui, Tailwind CSS, Framer Motion  
**Team Size:** 2-4 developers  
**Design Reference:** Apple iPhone landing page

---

## Phase 1: Foundation & Setup (Week 1-2)

### Week 1: Project Setup

#### Tasks
- [ ] Initialize Next.js 14+ project with App Router
- [ ] Configure Tailwind CSS
- [ ] Install and configure shadcn/ui
- [ ] Install Framer Motion
- [ ] Set up project structure and folders
- [ ] Configure ESLint and Prettier
- [ ] Set up Git repository and branches
- [ ] Create design tokens in Tailwind config
- [ ] Set up environment variables
- [ ] Configure Next.js for image optimization

#### Folder Structure
```
/app
  /fonts
  /api (if needed)
  layout.tsx
  page.tsx
  globals.css
/components
  /ui (shadcn components)
  /sections
    /Hero
    /ProductShowcase
    /FeatureHighlights
    /ComparisonTable
    /Gallery
    /HowItWorks
    /Testimonials
    /CTA
  /layout
    /Header
    /Footer
  /common
    /Button
    /ColorSwatch
    /SectionWrapper
/lib
  /utils
  /constants
/public
  /images
  /icons
/types
/hooks
```

#### Deliverables
- Working Next.js app with Tailwind configured
- shadcn/ui installed and tested
- Project structure established
- Design system tokens configured

---

### Week 2: Core Layout Components

#### Tasks
- [ ] Create Header component (navigation)
  - Desktop navigation
  - Mobile hamburger menu
  - Sticky scroll behavior
  - Scroll-up/down hide/show logic
- [ ] Create Footer component
  - 4-column layout
  - Quick links
  - Newsletter signup form
  - Social media links
- [ ] Create Section Wrapper component
  - Full viewport height option
  - Padding and margin system
  - Background variants
- [ ] Create Button component (using shadcn)
  - Primary, secondary, outline variants
  - Sizes (sm, md, lg)
  - Loading states
- [ ] Set up global styles and typography
- [ ] Test responsive behavior on all breakpoints

#### Components to Build
1. `Header.tsx` - Main navigation
2. `Footer.tsx` - Site footer
3. `SectionWrapper.tsx` - Reusable section container
4. `Button.tsx` - Custom button variants
5. `MobileMenu.tsx` - Mobile navigation drawer

#### Deliverables
- Functional header with navigation
- Complete footer
- Reusable layout components
- Mobile-responsive design tested

---

## Phase 2: Product Sections (Week 3-4)

### Week 3: Hero & First Product Showcase

#### Tasks
- [ ] Build Hero section
  - Full-viewport height
  - Background image with overlay
  - Headline and subheadline
  - Dual CTAs
  - Scroll indicator animation
  - Parallax effect (desktop only)
- [ ] Build Hardwood product showcase
  - Split layout (image + content)
  - Product image component
  - Product name and tagline
  - Color swatch selector
  - Image switching on color selection
  - Scroll-triggered animations
- [ ] Create ColorSwatch component
  - Circle or rounded square variants
  - Active state styling
  - Hover effects
  - Click handlers

#### Components to Build
1. `Hero.tsx` - Hero section
2. `ProductShowcase.tsx` - Reusable product section
3. `ColorSwatch.tsx` - Color selector
4. `ProductImage.tsx` - Optimized image with Next/Image

#### Deliverables
- Complete hero section with animations
- One product showcase fully functional
- Color swatch interaction working
- Scroll animations implemented

---

### Week 4: Remaining Product Showcases

#### Tasks
- [ ] Build Luxury Vinyl showcase
- [ ] Build Engineered Wood showcase
- [ ] Build Laminate showcase
- [ ] Implement scroll-triggered fade-in animations
- [ ] Alternate layouts (left/right positioning)
- [ ] Optimize images for all products
- [ ] Test smooth scrolling between sections
- [ ] Implement lazy loading for images
- [ ] Add section navigation (optional)

#### Data Structure
```typescript
// Product data type
interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  colors: Color[];
  images: Record<string, string>;
  features: string[];
}

interface Color {
  id: string;
  name: string;
  hex: string;
  image: string;
}
```

#### Deliverables
- All 4 product showcases complete
- Smooth animations between sections
- All images optimized and lazy-loaded
- Responsive on all devices

---

## Phase 3: Content Sections (Week 5)

### Week 5: Features, Comparison, Process

#### Tasks
- [ ] Build Feature Highlights section
  - 3x2 grid layout (desktop)
  - 6 feature cards
  - Icons or emojis
  - Hover effects on cards
  - Stagger animation on scroll
- [ ] Build Comparison Table
  - Using shadcn Table component
  - 4 products comparison
  - Responsive horizontal scroll (mobile)
  - Sticky header row
  - Visual indicators (stars, checkmarks)
- [ ] Build How It Works section
  - 4-step process
  - Numbered circles
  - Step descriptions
  - Clean, centered layout
- [ ] Add micro-interactions
  - Button hover effects
  - Card lift effects
  - Smooth transitions

#### Components to Build
1. `FeatureCard.tsx` - Individual feature card
2. `FeatureGrid.tsx` - Features section
3. `ComparisonTable.tsx` - Product comparison
4. `ProcessStep.tsx` - Individual step
5. `HowItWorks.tsx` - Process section

#### Deliverables
- Feature highlights section complete
- Comparison table functional
- How It Works section complete
- All animations smooth and performant

---

## Phase 4: Interactive Features (Week 6)

### Week 6: Gallery, Forms, Modals

#### Tasks
- [ ] Build Inspiration Gallery
  - Grid layout (3 columns desktop, 1 mobile)
  - Filter tabs (Living, Kitchen, Bedroom, Bathroom)
  - Image cards with hover overlay
  - "Get This Look" CTA
  - Modal/dialog for image details
- [ ] Build Sample Request Form
  - Using shadcn Form component
  - Fields: Name, Email, Address, Product Selection
  - Validation with React Hook Form
  - Success state
  - Loading state
- [ ] Build Quote Request Form
  - Fields: Name, Email, Phone, Project Details, Square Footage
  - Multi-step form (optional)
  - Validation
  - Success state
- [ ] Build Testimonials section
  - Card-based layout
  - Star ratings
  - Customer photos (optional)
  - Carousel or grid
- [ ] Implement form submission logic
  - Connect to API endpoint
  - Handle errors
  - Show success messages

#### Components to Build
1. `Gallery.tsx` - Inspiration gallery
2. `GalleryFilter.tsx` - Filter tabs
3. `GalleryCard.tsx` - Individual image card
4. `SampleForm.tsx` - Sample request form
5. `QuoteForm.tsx` - Quote request form
6. `FormModal.tsx` - Modal wrapper for forms
7. `TestimonialCard.tsx` - Customer testimonial
8. `Testimonials.tsx` - Testimonials section

#### API Routes (if needed)
- `/api/sample-request` - Handle sample requests
- `/api/quote-request` - Handle quote requests
- `/api/newsletter` - Newsletter signup

#### Deliverables
- Gallery with filtering functional
- Sample request form working
- Quote request form working
- Forms validated and connected
- Testimonials section complete

---

## Phase 5: Polish & Optimization (Week 7-8)

### Week 7: Animations & Performance

#### Tasks
- [ ] Refine all scroll animations
  - Adjust timing and easing
  - Test on different scroll speeds
  - Ensure no jank or stuttering
- [ ] Implement advanced animations
  - Parallax effects (desktop)
  - Stagger animations
  - Reveal animations
- [ ] Performance optimization
  - Optimize images (WebP conversion)
  - Implement lazy loading everywhere
  - Code splitting
  - Bundle size analysis
  - Remove unused dependencies
- [ ] Add loading states
  - Page load skeleton
  - Image loading placeholders
  - Form submission loading
- [ ] Implement smooth scrolling
  - Anchor link smooth scroll
  - Scroll-to-section functionality
- [ ] Add micro-interactions
  - Button press effects
  - Link hover states
  - Card hover effects

#### Performance Targets
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Time to Interactive: < 3.5s
- Cumulative Layout Shift: < 0.1
- Lighthouse Score: 90+ (all metrics)

#### Deliverables
- All animations polished
- Page loads in < 2 seconds
- No layout shifts
- Lighthouse score 90+

---

### Week 8: Testing, SEO & Launch

#### Tasks
- [ ] Cross-browser testing
  - Chrome, Safari, Firefox, Edge
  - Desktop and mobile versions
- [ ] Device testing
  - iPhone (Safari)
  - Android (Chrome)
  - iPad (Safari)
  - Various desktop sizes
- [ ] Accessibility audit
  - Keyboard navigation
  - Screen reader testing
  - Color contrast check
  - ARIA labels
  - Focus states
- [ ] SEO optimization
  - Meta tags
  - Open Graph tags
  - Schema markup (Product, Organization)
  - Sitemap
  - robots.txt
  - Alt text for all images
- [ ] Performance testing
  - Lighthouse audit
  - WebPageTest
  - GTmetrix
  - Real device testing
- [ ] Bug fixes
  - Fix all discovered issues
  - Polish edge cases
  - Improve error handling
- [ ] Analytics setup
  - Google Analytics 4
  - Event tracking (CTA clicks, form submissions)
  - Scroll depth tracking
- [ ] Deployment preparation
  - Environment variables
  - Build optimization
  - CDN setup (Cloudinary)
  - Domain configuration

#### Testing Checklist
- [ ] All links work
- [ ] All forms submit correctly
- [ ] All animations are smooth
- [ ] No console errors
- [ ] Mobile responsive on all pages
- [ ] Images load correctly
- [ ] Color swatches work
- [ ] Navigation works
- [ ] Footer links work
- [ ] CTAs are functional
- [ ] Forms validate correctly
- [ ] Success/error states display

#### SEO Checklist
- [ ] Title tag optimized
- [ ] Meta description compelling
- [ ] OG tags for social sharing
- [ ] Schema markup implemented
- [ ] Alt text on all images
- [ ] Semantic HTML used
- [ ] Internal links added
- [ ] Sitemap generated
- [ ] robots.txt configured
- [ ] Page speed optimized

#### Deliverables
- Fully tested application
- SEO optimized
- Analytics tracking
- Ready for production deployment
- Documentation complete

---

## Technical Architecture

### Data Management

**Option 1: Static Data (Recommended for MVP)**
```typescript
// /lib/data/products.ts
export const products: Product[] = [
  {
    id: 'hardwood',
    name: 'Hardwood Flooring',
    tagline: 'Timeless elegance. Built to last.',
    // ... more data
  },
  // ... more products
];
```

**Option 2: CMS Integration (Future)**
- Sanity CMS or Contentful
- Dynamic product data
- Gallery image management
- Blog integration

### State Management

**Forms:** React Hook Form  
**UI State:** React useState/useContext  
**No need for:** Redux, Zustand (keep it simple)

### API Routes

```typescript
// /app/api/sample-request/route.ts
export async function POST(request: Request) {
  const body = await request.json();
  // Validate
  // Send email (Resend, SendGrid)
  // Store in database (optional)
  return Response.json({ success: true });
}
```

### Image Optimization

**Strategy:**
1. Next.js Image component for all images
2. Store images in Cloudinary
3. Use WebP format with JPEG fallback
4. Lazy load all below-fold images
5. Use blur placeholders

**Sizes:**
- Hero: 2880×1800 (original), 1920×1200 (desktop), 800×500 (mobile)
- Products: 1920×1080 (original), 1200×675 (desktop), 600×338 (mobile)
- Gallery: 1200×900 (original), 800×600 (desktop), 400×300 (mobile)

---

## Dependencies

### Core
```json
{
  "next": "^14.2.0",
  "react": "^18.3.0",
  "react-dom": "^18.3.0",
  "tailwindcss": "^3.4.0",
  "framer-motion": "^11.0.0"
}
```

### UI & Forms
```json
{
  "@radix-ui/react-*": "latest",
  "react-hook-form": "^7.51.0",
  "zod": "^3.22.0",
  "@hookform/resolvers": "^3.3.0",
  "class-variance-authority": "^0.7.0",
  "clsx": "^2.1.0",
  "tailwind-merge": "^2.2.0"
}
```

### Dev Dependencies
```json
{
  "typescript": "^5.4.0",
  "@types/react": "^18.3.0",
  "@types/node": "^20.12.0",
  "eslint": "^8.57.0",
  "prettier": "^3.2.0",
  "autoprefixer": "^10.4.19"
}
```

### Optional (Phase 2+)
```json
{
  "resend": "^3.2.0",
  "@vercel/analytics": "^1.2.0",
  "sharp": "^0.33.0"
}
```

---

## Environment Variables

```env
# .env.local
NEXT_PUBLIC_SITE_URL=https://yoursite.com
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Email (if using Resend)
RESEND_API_KEY=re_xxxxx

# Image CDN (if using Cloudinary)
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=xxxxx
CLOUDINARY_API_KEY=xxxxx
CLOUDINARY_API_SECRET=xxxxx
```

---

## Git Workflow

### Branch Strategy
- `main` - Production branch
- `develop` - Development branch
- `feature/*` - Feature branches
- `fix/*` - Bug fix branches

### Commit Convention
```
feat: Add product showcase component
fix: Resolve color swatch selection bug
style: Update button hover states
docs: Update README with setup instructions
refactor: Simplify form validation logic
perf: Optimize image loading
test: Add tests for form submission
```

### Pull Request Process
1. Create feature branch from `develop`
2. Make changes and commit
3. Open PR to `develop`
4. Code review
5. Merge after approval
6. Delete feature branch

---

## Testing Strategy

### Unit Testing (Optional for MVP)
- Test utility functions
- Test form validation logic
- Test data transformations

### Manual Testing (Required)
- Test all user flows
- Test on multiple devices
- Test all form submissions
- Test all interactive elements

### E2E Testing (Phase 2)
- Use Playwright or Cypress
- Test critical user journeys
- Automate regression testing

---

## Deployment Plan

### Hosting: Vercel (Recommended)

**Steps:**
1. Connect GitHub repository to Vercel
2. Configure environment variables
3. Set up custom domain
4. Enable automatic deployments
5. Configure redirects if needed

### CDN: Cloudinary (Images)

**Setup:**
1. Create Cloudinary account
2. Upload all images
3. Configure Next.js Image loader
4. Set up automatic optimization

### DNS Configuration
- Point domain to Vercel
- Set up SSL certificate
- Configure www redirect

### Post-Launch
- Monitor performance (Vercel Analytics)
- Track errors (Sentry - optional)
- Monitor uptime
- Set up backup strategy

---

## Success Metrics

### Performance KPIs
- Page load time: < 2 seconds
- Lighthouse score: 90+
- Zero console errors
- < 0.1 CLS score

### User Engagement KPIs
- Average time on page: > 2 minutes
- Scroll depth: 70%+ reach bottom
- Sample request conversion: 5-10%
- Quote request conversion: 2-5%
- Bounce rate: < 40%

### Technical KPIs
- Zero critical bugs
- 100% uptime
- Mobile traffic: 60%+ supported
- All CTAs functional

---

## Risk Management

### Potential Risks

| Risk | Impact | Mitigation |
|------|--------|------------|
| Scope creep | High | Strict phase separation, feature freeze |
| Performance issues | High | Early testing, optimization in Phase 5 |
| Design inconsistencies | Medium | Use design system, regular reviews |
| Browser compatibility | Medium | Test early and often |
| Timeline delays | Medium | Buffer time in each phase |
| Image optimization | Medium | Use Cloudinary, automated processing |
| Form spam | Low | Add honeypot, captcha (Phase 2) |

---

## Daily Workflow

### Morning Standup (15 min)
- What did I complete yesterday?
- What will I work on today?
- Any blockers?

### Development
- Focus on one task at a time
- Commit frequently
- Test on multiple devices
- Document complex logic

### End of Day
- Push code to feature branch
- Update task tracker
- Note any blockers for tomorrow

---

## Quality Checklist

Before marking any task complete:

- [ ] Code follows project conventions
- [ ] Component is responsive (mobile, tablet, desktop)
- [ ] No console errors or warnings
- [ ] TypeScript types are correct
- [ ] Accessibility considerations met
- [ ] Performance is acceptable
- [ ] Code is documented (if complex)
- [ ] Tested in Chrome and Safari
- [ ] Git commit message is clear

---

## Handoff Documentation

### For Future Developers

**Required Documentation:**
1. README.md with setup instructions
2. Component documentation (props, usage)
3. API documentation (if applicable)
4. Environment variables guide
5. Deployment guide
6. Troubleshooting guide

**Code Comments:**
- Explain "why" not "what"
- Document complex logic
- Note any workarounds or hacks
- Reference design decisions

---

## Post-Launch (Week 9+)

### Immediate Tasks
- Monitor analytics
- Track form submissions
- Watch for errors
- Gather user feedback

### Phase 2 Features (Future)
- Bank of inspiration images
- Virtual room visualizer
- Sample order tracking
- Live chat integration
- Blog/content section
- Customer testimonials portal
- Dealer locator map

### Maintenance
- Update dependencies monthly
- Review and fix bugs
- Optimize performance
- Add new products as needed
- Update content seasonally

---

## Resources & References

### Design References
- https://www.apple.com/iphone/
- https://www.apple.com/macbook-pro/
- https://www.airbnb.com/

### Technical Docs
- Next.js: https://nextjs.org/docs
- shadcn/ui: https://ui.shadcn.com/
- Tailwind CSS: https://tailwindcss.com/docs
- Framer Motion: https://www.framer.com/motion/

### Tools
- Figma (design)
- Lighthouse (performance)
- WebPageTest (testing)
- Cloudinary (images)
- Vercel (hosting)

---

**Document Version:** 1.0  
**Last Updated:** November 2025  
**Next Review:** After Phase 1 completion