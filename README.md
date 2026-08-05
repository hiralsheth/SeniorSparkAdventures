# Senior Spark Adventures

A warm, senior-focused companion service website built as a static multi-page site.

## About the project
Senior Spark Adventures is designed to help seniors stay connected, confident, and supported through:
- Meaningful outings in the community
- Everyday errands and appointment support
- Games, conversation, and joy at home
- Friendly technical support for modern devices
- Contact, intake, and appointment scheduling forms

The site uses a calm, welcoming visual style with a focus on accessibility, simple navigation, and clear calls to action.

## Tech stack
- HTML
- CSS
- JavaScript
- Static hosting / GitHub Pages

## Project structure
- `index.html` — homepage
- `about.html` — mission, vision, and values
- `services.html` — service overview
- `schedule.html` — appointment request form
- `intake.html` — intake form
- `contact.html` — contact form
- `assets/style.css` — site styles
- `assets/js/` — client-side scripts
- `assets/img/` — images and logo assets

## How to run locally
1. Clone the repository.
2. Open `index.html` in your browser, or use a local static server.
3. Update links, images, and form handlers as needed.

Example with Python:
```bash
python -m http.server 8000
```
Then open `http://localhost:8000`.

## Features
- Responsive layout for desktop and mobile
- Friendly branding and consistent design system
- Service cards and content sections
- Appointment scheduling and intake forms
- Email/contact-oriented call to actions
- GitHub Pages compatible structure

## Suggested improvements
1. Add form validation and submission feedback with success/error states.
2. Connect forms to a real backend or a form provider so submissions are reliably stored.
3. Improve accessibility with skip links, better focus styles, and form help text.
4. Add SEO improvements such as meta descriptions, Open Graph tags, and structured data.
5. Remove duplicated CSS rules and split large stylesheet sections into smaller modules.
6. Add a responsive mobile menu animation and active navigation state handling in JavaScript.
7. Create a reusable shared header/footer so content stays consistent across pages.
8. Add a privacy policy and consent details for form submissions.
9. Include a 404 page and a success/confirmation page for forms.
10. Add automated checks for broken links and basic HTML/CSS validation.

## Notes
This project is already visually polished, but it would benefit most from stronger form handling, accessibility refinements, and a bit of code cleanup.