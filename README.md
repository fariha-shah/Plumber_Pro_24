# 🔧 Plumber Pro

A full-frontend client dashboard and marketing website for a plumbing services platform, built with React, Vite, Tailwind CSS, and Redux Toolkit. Includes customer-facing pages (home, booking, contact) and role-based dashboards for clients and admins.

## ✨ Features

- **Customer-facing site** — home page, service booking, blog, and contact page
- **Contact form with real email delivery** — integrated with EmailJS, includes client-side validation
- **Authentication flow** — login/register with client and admin roles
- **Client dashboard** — view bookings, invoices, and support tickets, manage profile
- **Admin dashboard** — manage users, assign bookings, oversee plumber accounts
- **Responsive design** — fully adapted for mobile, tablet, and desktop
- **State management** — Redux Toolkit for global app state

## 🛠️ Tech Stack

- **Frontend:** React 19, Vite
- **Styling:** Tailwind CSS
- **State Management:** Redux Toolkit
- **Routing:** React Router DOM
- **Icons:** Lucide React
- **Animations:** Framer Motion
- **Email Service:** EmailJS

## 📦 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm

### Installation

```bash
git clone https://github.com/fariha-shah/Plumber-Pro
cd plumber-pro
npm install

```

### Environment Variables

Create a `.env` file in the project root with your EmailJS credentials:

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

You can get these by creating a free account at [EmailJS](https://www.emailjs.com/).

### Run locally

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

## 👥 Team & Contributions

This was a 4-person frontend internship project. Each developer initially built their own version of different sections of the application.

**My role:** I merged all individual frontend implementations into a single, working, production-ready codebase — resolving conflicting logic, fixing broken components, and debugging integration issues across the merged code. I also implemented the real EmailJS contact form integration (with validation), fixed navigation/logo linking, and prepared the project for deployment.

## 📝 Notes

- Authentication is currently demo-only (client-side, using `localStorage`) — not connected to a real backend/database.
- Admin login uses fixed demo credentials for testing purposes.

## 📄 License

This project was built for educational/portfolio purposes as part of a frontend development internship.
