# OneAct Website

Static marketing website for OneAct - Secure Script Marketplace

## Overview
This is a public-facing marketing website that showcases:
- Product features and benefits
- Security & trust information
- FAQ and use cases
- CTA buttons linking to the dashboard

## Tech Stack
- **React 19** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **No Backend Required** - Static site

## Project Structure
```
src/
├── components/
│   ├── common/          # Header, Footer
│   ├── hero/            # Landing hero section
│   ├── features/        # Features & Security sections
│   ├── faq/             # FAQ accordion
│   └── cta/             # Call-to-action sections
├── pages/               # Page components (future)
├── assets/              # Images, icons, logos
├── App.tsx              # Main app
├── main.tsx             # Entry point
└── index.css            # Global + Tailwind styles
```

## Getting Started

### Install Dependencies
```bash
npm install
```

### Development Server
```bash
npm run dev
```
Runs on `http://localhost:5173`

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## Key Features

### ✨ Sections
1. **Hero** - Main headline and CTA buttons
2. **Features** - 6 key features with icons
3. **Security** - Bank-grade security details
4. **FAQ** - Accordion with common questions
5. **CTA** - Final call-to-action

### 🔗 Links to Dashboard
- "Go to Dashboard" button in header
- "Get Started" CTA in hero
- Sign up links for writers and producers
- All point to: `https://dashboard.oneact.com`

### 📱 Responsive Design
- Mobile-first approach
- Works on all screen sizes
- Touch-friendly on mobile

## Deployment

### Deploy to Vercel (Recommended)
```bash
# Push to GitHub, then connect to Vercel
# Automatic deploys on push to main
```

### Deploy to Netlify
```bash
# Connect repository to Netlify
# Automatic builds on push
```

### Manual Deployment
```bash
npm run build
# Upload dist/ folder to your hosting
```

## Environment Variables
No backend required, but you can add:
```
VITE_DASHBOARD_URL=https://dashboard.oneact.com
VITE_API_URL=https://api.oneact.com
```

## Important Notes

### Static vs Dynamic
- This is a **static marketing site** - no login, no user data
- The **dashboard** (separate app) handles authentication
- Button in header links to dashboard at `https://dashboard.oneact.com`

### Future Enhancements
- Contact form (integrating with backend)
- Blog section
- Testimonials section
- Pricing table
- Case studies

## Contributing
- Follow existing component structure
- Use Tailwind CSS for styling
- Keep components in `components/` directory
- Keep pages in `pages/` directory

## License
Proprietary - OneAct

## Support
For issues or questions, create a GitHub issue or contact the team.

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
