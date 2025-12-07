# Nuxt + Sanity Monorepo

A full-stack blog application built with Nuxt 4, Nuxt UI, and Sanity CMS.

## 📁 Project Structure

```
nuxtsanity/
├── frontend/          # Nuxt 4 application with Nuxt UI
│   ├── app/
│   │   ├── pages/    # Blog pages (index, [slug])
│   │   └── components/
│   └── nuxt.config.ts
│
└── studio/           # Sanity Studio CMS
    ├── schemaTypes/  # Content schemas
    └── sanity.config.ts
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or Bun
- npm/pnpm/yarn/bun

### Installation & Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/narr07/nuxtsanity-tes.git
   cd nuxtsanity-tes
   ```

2. **Install dependencies for both projects**
   ```bash
   # Frontend
   cd frontend
   npm install
   
   # Studio
   cd ../studio
   npm install
   ```

3. **Run development servers**

   Open two terminal windows:

   **Terminal 1 - Frontend (Nuxt):**
   ```bash
   cd frontend
   npm run dev
   ```
   Frontend will run on: http://localhost:3000

   **Terminal 2 - Studio (Sanity):**
   ```bash
   cd studio
   npm run dev
   ```
   Studio will run on: http://localhost:3333

## 🛠️ Tech Stack

### Frontend
- **Nuxt 4** - Vue.js framework
- **Nuxt UI** - Beautiful UI components
- **@nuxtjs/sanity** - Sanity integration
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS

### CMS
- **Sanity Studio** - Headless CMS
- **Portable Text** - Rich content editor

## 📝 Features

- ✅ Blog listing with Nuxt UI components
- ✅ Single post page with dynamic routing
- ✅ Image optimization with Sanity Image URL
- ✅ SEO meta tags with `useSeoMeta`
- ✅ Portable Text rendering
- ✅ Responsive design with Nuxt UI
- ✅ Dark mode support

## 🔧 Configuration

### Sanity Configuration

The Sanity project is configured in `frontend/nuxt.config.ts`:

```typescript
sanity: {
  projectId: "kdwtvkc2",
  dataset: "production",
  useCdn: true,
  apiVersion: "2024-03-15"
}
```

## 📦 Build & Deploy

### Frontend
```bash
cd frontend
npm run build
npm run preview
```

### Studio
```bash
cd studio
npm run build
npm run deploy
```

## 📄 License

MIT

## 👤 Author

[@narr07](https://github.com/narr07)
