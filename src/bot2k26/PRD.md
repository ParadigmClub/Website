# BOT 2K26 Branch Website PRD

## Project summary
Build a desktop-first branch website for **BOT 2K26 (Battle of Titans 2026)**, the annual tech fest by **Paradigm, the tech club of Mayoor School, Noida**. The site must feel minimal, sharp, dark, and structured, with strong visual hierarchy, restrained motion, and a grid-led layout that remains configurable as new events are added later.

This PRD is written for AI coding agents and human developers. It prioritizes implementation clarity, low visual noise, lightweight code, and exact UI behavior over marketing language.

## Product goals
- Present BOT 2K26 as a premium inter-school annual tech fest microsite.
- Let users understand the event lineup quickly from the home page.
- Let users register for specific events through embedded Google Forms on-site.
- Let users access event resources, rulebooks, and FAQs through a utilitarian resources page.
- Showcase the organizing leads on a team page with clear hierarchy.
- Keep the implementation light, fast, configurable, and easy to extend.

## Core principles
- Simple, clean UI.
- Intuitive navigation.
- Strong use of negative space.
- Minimal visual clutter.
- Grid for all elements.
- Configurable structure for additional events.
- No AI-generated imagery, no AI-generated decorative assets, code only.
- Lightweight implementation; shortest correct path preferred.
- Avoid unnecessary abstraction and avoid nonessential comments.
- Any comments in code must be technical, sparse, and useful.

## Non-negotiable visual direction
- Theme: dark.
- Background color: `#121212`.
- Primary text color: `#FFFFFF`.
- Accent color: Paradigm green `#009E41`.
- Green is for accents, buttons, nav links, dividers, highlights, active states, and controlled glow effects.
- Text must never be green.
- No visible scrollbar.
- No overscroll beyond content ends.
- Desktop first. Mobile can follow later, but the system should not block future responsive work.

## Brand and asset rules
- Existing logo mark will be supplied manually in the IDE by the user.
- Do not recreate logos.
- Use an asset reference such as `./assets/logo.svg` for the top-left logo mark.
- Outdated wordmark must not be used.
- Footer must include Hack Club branding using Hack Club’s official hosted asset, plus Paradigm branding via local asset supplied by the user.

## Typography
### Font stack
All fonts must be open source and available on Google Fonts.

- Primary bold display font: **Montserrat Black**.
- Accent highlight font: **Playfair Display Italic**.
- Body and UI font: use **Montserrat** unless implementation needs a separate UI weight map from the same family.

### Heading behavior
- On the hero and other highlighted headings, use split typography.
- Example pattern: `BOT` in Montserrat Black and `2026` in Playfair Display Italic.
- The two lines should feel equal in visual importance; `2026` is not subordinate.
- The heading must read as two lines:
  - Line 1: `BOT`
  - Line 2: `2026`
- Supporting subtitle under the hero title: `Mayoor School, Noida's Annual Tech Fest`.
- Event dates are tentative and should be implemented as placeholders.

## Information architecture
Primary navigation must contain exactly these items:
- Home
- Register
- Resources
- Team

Footer must repeat nav links in list form.

## Page inventory
### Home
Purpose:
- Establish visual identity.
- Create a dramatic, scroll-led landing experience.
- Transition into the event grid.

Required structure:
1. **Hero section**
   - Full-screen first section.
   - No navbar initially.
   - Contains only logo mark, the BOT/2026 title treatment, and the subtitle.
   - Dark background with subtle noise texture allowed.
   - Noise must be executed cleanly and lightly; no cheap overlays.

2. **Scroll transition zone**
   - Total home experience should span roughly 2x viewport height.
   - While moving from the first section toward the second, the navbar floats in from the top.
   - Event cards animate in from the sides one by one as scroll progresses.
   - Animation should complete by the time the second section is fully reached.
   - The motion should feel moderate, not theatrical.
   - Must respect good performance and page weight discipline.

3. **Event grid section**
   - Second section contains the full event card grid.
   - Grid is non-uniform and masonry-like in emphasis, but still aligned.
   - Placeholder empty media blocks are acceptable for now.
   - Card sizes should reflect event importance/content type.
   - Clicking a card expands it, hides or removes the other cards from view, and reveals action choices.
   - Expanded actions:
     - View Resources
     - View Rules
     - View FAQs
     - Register
   - The expanded state must support both:
     - explicit close/back control
     - Escape key / click outside to close

### Register
Purpose:
- Let users register for different events without leaving the website.

Required structure:
- Use **tabs** grouped by category.
- Each tab loads an embedded Google Form in-page via iframe.
- Multiple event forms must be supported.
- Since real URLs are not yet available, use placeholder iframe sources and clear configuration points.
- UX must make it obvious which event’s form is currently active.
- External linking to forms is not the primary behavior; embedded form is required.

### Resources
Purpose:
- Give users a practical way to access event documents.

Required structure:
- Utilitarian layout.
- Simpler uniform list/grid, not a dramatic layout.
- Events grouped by category.
- Each event row/card expands accordion-style.
- Inside the expanded panel, show links for:
  - Resources / information doc
  - Rulebook doc
  - FAQ doc
- All three can be Google Docs / Drive links opening in a new tab.
- No emoji use in cards or controls.
- The Home page card’s expanded actions and the Resources page structure should conceptually align.

### Team
Purpose:
- Show only organizing leads, not general participants.

Required structure:
- Hierarchical layout.
- President alone at the top.
- Two Vice Presidents below.
- Approximately ten team members below them.
- Each profile card includes:
  - placeholder photo slot
  - name
  - role
- Layout must feel orderly and intentional, not like a random gallery.

## Event taxonomy
Use grouped categories for navigation, resources, and register tabs.

### Suggested categories
#### Cybersecurity / Strategy
- Cryptic Hunt
- Breach (placeholder name for DEF CON style live event)
- Intercept (placeholder counterpart name if two streams need separation)

#### Hardware / Robotics
- Robo Race (line following)

#### Development / Innovation
- Hackathon (on-site, BYOD)
- Pitching event

#### Creative / Media
- Photography Competition
- Photoshop Competition
- Digital Art Competition
- Filmmaking Competition

Notes:
- Placeholder names like **Breach** and **Intercept** are acceptable until final official naming is available.
- Register tabs and resource grouping should use category clusters first, then events.
- The schema should be data-driven so new events can be added with minimal code edits.

## Home grid sizing guidance
Use a modular grid that allows emphasis through span differences. Example intent, not a fixed CSS mandate:
- Photography: 2x2 emphasis block
- Digital art or filmmaking: 1x2 vertical emphasis block
- Hackathon: 1x1
- Cryptic Hunt: 1x1

Rules:
- The grid must remain aligned.
- Spans must be configurable via data.
- Empty placeholder areas must still preserve composition.
- Hover and expansion states must not break layout integrity.

## Navigation behavior
- Navbar is hidden at initial hero load.
- Navbar appears only as the user transitions into the second section.
- It floats in from the top.
- After appearing, it remains sticky.
- The logo mark sits top-left.
- Use strong visual hierarchy and disciplined spacing.
- Nav links use Paradigm green as specified by the user.

## Motion design
### Allowed motion
- Moderate animation only.
- Scroll-linked reveal for the hero-to-grid transition.
- Cards float in from the side one by one across scroll progress.
- Navbar slide-in from top.
- Card expansion/collapse transitions.
- Green glow behind hovered/active cards.

### Motion constraints
- Keep animation performant.
- Avoid heavy JS animation libraries unless absolutely necessary.
- Prefer CSS transforms, opacity, and minimal JS orchestration.
- No motion that harms Lighthouse or general site-weight/performance outcomes.
- Support both close button and outside click / Escape dismissal for expanded card states.

## Visual system rules
### Color use
- Background: `#121212`.
- Foreground text: `#FFFFFF`.
- Accent: `#009E41`.
- Section dividers should use Paradigm green.
- Green may appear as subtle glow behind cards.
- Green must not be used for body text.
- Neutral surfaces can use dark tonal variants of the background.

### Effects
- Subtle noise is allowed in the hero background.
- Green glow should sit behind cards, not as a loud outline.
- Avoid glassmorphism excess, neon clichés, or generic AI-style gradients.
- Avoid purple/blue futuristic tropes entirely.

### Scroll behavior
- Hide visible scrollbar.
- Prevent scrolling past content bounds.
- Maintain natural scrolling, but clamp overscroll behavior.

## Footer requirements
Footer must include:
- Copyright line
- Repeated nav links in list form
- Contact information
- Teacher in-charge name placeholder
- Teacher in-charge phone placeholder
- Official Paradigm email placeholder
- Left-side affiliation block with Hack Club logo × Paradigm logo
- Supporting text stating that Paradigm is a Hack Club affiliated club
- A final line under the copyright line:
  - `Made with love by Palash`
  - `Palash` links to `https://github.com/frostbyte8909`

Implementation notes:
- Fetch Hack Club logo from official hosted asset.
- Paradigm logo is supplied locally by the user.

## Content placeholders required
Use placeholders for:
- Event dates
- Google Form embed URLs
- Google Doc / Rulebook / FAQ links
- Teacher in-charge name
- Teacher in-charge phone number
- Official Paradigm email if not yet supplied
- Team member names, roles, and photos if not yet supplied

## Configuration model
The site should be driven by lightweight structured data, ideally a single array/object per concern.

Recommended data structures:
- `events[]`
  - `id`
  - `name`
  - `category`
  - `description`
  - `gridSpan`
  - `resourceUrl`
  - `rulesUrl`
  - `faqUrl`
  - `formUrl`
  - `featured`
- `team[]`
  - `name`
  - `role`
  - `tier` (`president`, `vp`, `lead`)
  - `image`
- `siteMeta`
  - `subtitle`
  - `dates`
  - `contactEmail`
  - `teacherInChargeName`
  - `teacherInChargePhone`
  - `socialLinks`

This allows additional events to be added without rewriting page structure.

## Technical implementation requirements
- Static branch website.
- Minimal, lightweight code.
- Avoid unnecessary packages.
- Prefer HTML/CSS/vanilla JS or a very lean stack if a framework is required by branch standards.
- Keep implementation direct and fast, “leetcode style,” without bloated abstractions.
- No unnecessary comments.
- No AI-generated images or decorative assets.
- Use placeholders only where real assets/links are pending.
- Use inline or local SVG/logo references supplied by the user where needed.
- Google Fonts only for typography.
- Ensure no visible scrollbar.
- Ensure no overscroll beyond content ends.

## Suggested implementation approach
### Stack
Preferred order:
1. Static HTML + modular CSS + vanilla JS
2. Vite + very lean vanilla or React only if branch standards demand it

### Why
- Fastest path to ship.
- Lowest site weight.
- Easiest to maintain for a school event site.
- Best fit for animation needs without unnecessary bundle overhead.

### Animation approach
- CSS transitions and transforms for card and nav motion.
- `IntersectionObserver` or scroll-progress logic for staged reveals.
- Avoid heavy animation frameworks unless implementation complexity becomes unreasonable.

## UX behavior details
### Home card expansion
On click:
- Expand selected event card.
- Hide or fade out sibling cards.
- Reveal four actions for the chosen event:
  - Resources
  - Rules
  - FAQs
  - Register
- Support close button.
- Support Escape to close.
- Support click outside to close.
- Returning to the grid should feel immediate and clean.

### Register page tabs
- Group events by category.
- Within category sections, show event tabs.
- Selecting a tab swaps the embedded form.
- Active tab must be visually obvious.
- Empty or missing form URLs should degrade gracefully with placeholder messaging.

### Resources page accordions
- Uniform utilitarian rows/cards.
- Expand/collapse per event.
- Simple clear labels.
- External docs open in new tabs.
- Missing links should degrade gracefully.

### Team page hierarchy
- President gets the most prominence.
- Vice Presidents are second tier.
- Team leads form the base grid.
- Placeholder portraits must preserve final composition and aspect ratios.

## Performance and quality constraints
- Good performance score is important.
- Keep total visual design polished without introducing bloat.
- Use lazy loading where appropriate for non-critical images.
- Avoid heavy raster media in the initial viewport.
- Keep the home hero visually rich through typography, spacing, and motion, not asset weight.

## Accessibility and interaction rules
- Expanded card states must be keyboard accessible.
- Escape closes overlays/expanded states.
- Focus states must be visible even in a dark theme.
- Interactive labels must remain readable against dark surfaces.
- The absence of visible scrollbars must not break usability.

## Out of scope for v1
- Final mobile polish.
- CMS integration.
- Dynamic backend.
- Authenticated dashboards.
- Auto-generated media assets.
- Recreating or redesigning the official logo.

## Open items from the user for later fill-in
- Final event dates
- Final official names for placeholder events such as Breach / Intercept if changed
- All Google Form embed URLs
- All Google Docs / rulebook / FAQ links
- Team member details and photos
- Teacher in-charge details
- Official Paradigm email
- Final local logo/paradigm asset files in the IDE

## Acceptance criteria
A v1 implementation is acceptable when all of the following are true:
- Home, Register, Resources, and Team pages exist.
- Hero starts without navbar and transitions into a sticky navbar.
- Home scroll experience spans about two viewport heights.
- Event cards reveal progressively during scroll into section two.
- Second section renders a non-uniform event grid.
- Clicking a home event card isolates it and exposes the four actions.
- Register page embeds per-event Google Forms via tabs.
- Resources page uses a simpler utilitarian expandable layout.
- Team page presents president, VPs, and leads hierarchically.
- Footer includes Hack Club affiliation block, repeated nav, contact info, and the GitHub attribution line.
- No visible scrollbar is shown.
- No overscroll beyond content bounds is allowed.
- Accent usage stays disciplined and text never turns green.
- Typography follows Montserrat Black + Playfair Display Italic for highlighted title treatments.
- Code remains lightweight, minimal, and easy to extend.

## Agent notes
- Do not invent logos.
- Do not use AI-generated visual assets.
- Do not introduce extra pages beyond Home, Register, Resources, and Team unless explicitly asked.
- Treat the data model as the source of truth for events and team hierarchy.
- Bias toward semantic HTML, simple CSS architecture, and minimal JavaScript.
- Prefer maintainability through clean structure, not through abstract overengineering.
