# Senior Spark Adventures

A warm, senior-focused companion service website built with HTML, CSS, and JavaScript and published as a GitHub Pages site.

## Live site

[https://hiralsheth.github.io/SeniorSparkAdventures/](https://hiralsheth.github.io/SeniorSparkAdventures/)

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

| File | Description |
|------|-------------|
| `index.html` | Homepage |
| `about.html` | Mission, story, and values |
| `services.html` | Service overview |
| `meaningful-outings.html` | Outing service detail page |
| `everyday-errands.html` | Errands service detail page |
| `games-joy-at-home.html` | At-home engagement detail page |
| `technical-support.html` | Tech support detail page |
| `schedule.html` | Appointment request form |
| `intake.html` | Intake form |
| `contact.html` | Contact form |
| `schedule-success.html` | Schedule confirmation page |
| `intake-success.html` | Intake confirmation page |
| `contact-success.html` | Contact confirmation page |
| `summary.html` | Summary/handout-style page |
| `404.html` | Custom not-found page |
| `assets/style.css` | Main stylesheet |
| `assets/js/site.js` | Shared UI behaviour (nav, form validation) |
| `assets/js/email.js` | EmailJS form submission handler |
| `assets/img/` | Images and logo assets |

## Running locally

You can open the site directly in a browser, or use a local static server to avoid any path issues.

```bash
python -m http.server 8000
```

Then visit: [http://localhost:8000](http://localhost:8000)

## GitHub Pages deployment

This is a static site and deploys automatically via GitHub Actions when changes are pushed to `main`.

To set up GitHub Pages manually:
1. Go to **Settings → Pages** in this repository.
2. Under **Source**, select the `main` branch and the root folder.
3. Save and wait for GitHub to build and publish the site.

## Key features

- Responsive layout for desktop and mobile
- Consistent shared header and navigation across all pages
- Active-link highlighting driven by `assets/js/site.js`
- Mobile nav toggle with accessible `aria-expanded` state
- EmailJS-powered contact, intake, and schedule forms
- Open Graph and Twitter Card metadata on every page
- Custom 404 page matching the site branding
- Favicon set and theme colour meta tag
