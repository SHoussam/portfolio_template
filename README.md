# Modern Developer Portfolio Template

A stunning, highly-customizable portfolio template built with **React**, **Vite**, **Tailwind CSS**, and **Framer Motion**. Designed for developers who want a premium, animated, and responsive personal website.

## 🌟 Features

- **Easy to Customize**: Update all your personal info, projects, and skills from a single data file (`src/data/portfolioData.js`) without touching any React components!
- **Premium Animations**: Smooth scroll reveals, page transitions, and hover effects powered by Framer Motion.
- **Dynamic Background**: Custom WebGL-like Liquid Ether animated background for a unique modern look.
- **Fully Responsive**: Looks great on mobile, tablet, and desktop.
- **Fast Performance**: Built with Vite for rapid development and optimized production builds.

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone (https://github.com/SHoussam/portfolio_template.git)
   cd portfolio_template
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Customize your data**
   Open `src/data/portfolioData.js` and replace the placeholder data with your own name, bio, projects, and skills. The file is fully commented to guide you.
   
4. **Add your assets**
   Place your images, CV PDF, and logo in the `public/` directory (e.g., `public/img/`, `public/pdf/`).

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Build for production**
   ```bash
   npm run build
   ```

## 🛠️ Tech Stack

- **React** - UI framework
- **Vite** - Build tool & dev server
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons

## 📂 Project Structure

```bash
portfolio/
├── public/                 # Static assets (images, PDFs)
├── src/
│   ├── components/         # Reusable UI components
│   ├── config/             # Shader & animation configs
│   ├── data/               # portfolioData.js (Edit this!)
│   ├── App.jsx             # Main application layout
│   └── main.jsx            # Entry point
├── index.html
├── tailwind.config.js
└── package.json
```

## 📝 License

This template is open-source. Feel free to use and modify it for your own personal portfolio!
