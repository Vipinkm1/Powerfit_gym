# PowerFit Gym Website

A modern, responsive, frontend-only gym website built for a local fitness business named **PowerFit Gym**. The site helps nearby customers learn about the gym, explore services and plans, view photos, calculate BMI, and contact the gym quickly through WhatsApp or phone.

## Overview

PowerFit Gym is a clean React website focused on online presence and local customer enquiries. It does not include backend features, authentication, database, admin panel, or payment integration.

## Features

- Fully responsive modern gym-style UI
- Dark theme with red accent colors
- Sticky navbar with mobile menu
- Hero section with strong call-to-action buttons
- About and why-choose-us sections
- Services cards with fitness images
- Membership plan cards
- Trainer profile section
- Responsive gym photo gallery
- Customer testimonials
- Frontend-only BMI calculator using React state/hooks
- Contact section with phone, WhatsApp, email, timings, address, and map
- Floating WhatsApp and mobile call buttons
- Smooth scrolling and hover animations
- SEO-friendly semantic page structure

## Tech Stack

- React.js
- Vite
- JavaScript
- CSS
- ESLint

## Project Structure

```text
powerfit-gym/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── BMICalculator.jsx
│   │   ├── Contact.jsx
│   │   ├── FloatingActions.jsx
│   │   ├── Footer.jsx
│   │   ├── Gallery.jsx
│   │   ├── Hero.jsx
│   │   ├── Icons.jsx
│   │   ├── Navbar.jsx
│   │   ├── Plans.jsx
│   │   ├── SectionTitle.jsx
│   │   ├── Services.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Trainers.jsx
│   │   └── WhyChooseUs.jsx
│   ├── pages/
│   │   └── Home.jsx
│   ├── styles/
│   │   └── global.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

Run lint checks:

```bash
npm run lint
```

## Customization

Update business details in:

- `src/components/Contact.jsx` for phone number, WhatsApp link, email, address, timings, and map
- `src/components/Plans.jsx` for membership prices and features
- `src/components/Services.jsx` for services and images
- `src/components/Trainers.jsx` for trainer names, roles, and photos
- `src/components/Footer.jsx` for social links and contact details

Update colors, spacing, responsiveness, and animations in:

- `src/styles/global.css`

## Images

The project currently uses remote fitness images from Unsplash-style URLs for quick setup and a realistic preview. For a real business website, replace them with original gym photos inside `src/assets/` or update the image URLs in the related components.

## Important Notes

- This is a frontend-only website.
- The contact form was intentionally removed because backend handling is not required.
- WhatsApp and phone links are used for direct customer enquiries.
- The BMI calculator works entirely in the browser.
- Google Maps is embedded through an iframe.

## Deployment

This Vite React project can be deployed easily on platforms like:

- Vercel
- Netlify
- GitHub Pages
- Firebase Hosting

Build command:

```bash
npm run build
```

Output folder:

```text
dist
```

## License

This project is created for PowerFit Gym website development and can be customized for local business use.
