# Senior Spark Adventures

A warm, senior-focused companion service website built with HTML, CSS, and JavaScript and published on GitHub Pages with the custom domain.

## Live site

[https://seniorsparkadventures.com/](https://seniorsparkadventures.com/)

## About this project

Senior Spark Adventures is designed to help seniors stay connected, confident, and supported through meaningful everyday experiences. The site introduces the service offering, shares the mission and values behind the brand, and provides simple ways for visitors to get in touch, request a schedule, or complete an intake form.

## What the website offers

- Heartfelt companionship and one-on-one support for seniors
- Meaningful outings in the community (parks, cafés, libraries, places of worship)
- Help with everyday errands (grocery shopping, pharmacy, banking)
- Games, conversation, and joy at home
- Friendly technical support for modern devices (smartphones, tablets, smart TVs)
- Contact, scheduling, and intake forms powered by EmailJS

## Tech stack

- HTML
- CSS
- JavaScript
- [EmailJS](https://www.emailjs.com/) for form submissions
- GitHub Pages for hosting

## Site structure

| Source file | Public URL | Description |
|-------------|------------|-------------|
| `index.html` | `/` | Homepage |
| `about.html` | `/about/` | Mission, story, and values |
| `services.html` | `/services/` | Service overview |
| `meaningful-outings.html` | `/meaningful-outings/` | Outing service detail page |
| `everyday-errands.html` | `/everyday-errands/` | Errands service detail page |
| `games-joy-at-home.html` | `/games-joy-at-home/` | At-home engagement detail page |
| `technical-support.html` | `/technical-support/` | Tech support detail page |
| `schedule.html` | `/schedule/` | Appointment request form |
| `intake.html` | `/intake/` | Intake form |
| `contact.html` | `/contact/` | Contact form |
| `schedule-success.html` | `/schedule-success/` | Schedule confirmation page |
| `intake-success.html` | `/intake-success/` | Intake confirmation page |
| `contact-success.html` | `/contact-success/` | Contact confirmation page |
| `summary.html` | `/summary/` | Summary/handout-style page |
| `404.html` | `/404.html` | Custom not-found page |
| `assets/style.css` | Main stylesheet |
| `assets/js/site.js` | Shared UI behaviour (nav, form validation) |
| `assets/js/email.js` | EmailJS form submission handler |
| `assets/img/` | Images and logo assets |

## Previewing changes

Clean routes are generated during the Jekyll build in the GitHub Actions workflow. A plain static server does not generate those routes from the source `.html` files, so preview the deployed GitHub Pages site to test navigation and clean URLs.

## GitHub Pages deployment

This is a static site. GitHub Actions builds the source pages with Jekyll, which publishes each page at its clean permalink, when changes are pushed to `main`.

GitHub Pages must use **Settings → Pages → Build and deployment → Source: GitHub Actions**. The workflow builds the Jekyll permalinks and deploys the generated `_site` directory.

## Key features

- Responsive layout for desktop and mobile
- Consistent shared header and navigation across all pages
- Clean directory-style page URLs (for example, `/contact/`)
- Active-link highlighting driven by `assets/js/site.js`
- Mobile nav toggle with accessible `aria-expanded` state
- EmailJS-powered contact, intake, and schedule forms
- Open Graph and Twitter Card metadata on every page
- Custom 404 page matching the site branding
- Favicon set and theme colour meta tag
