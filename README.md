# AS Dev - Digital Agency Ecosystem

A modern, high-performance digital agency website showcasing web development, design, and digital marketing services. Built with cutting-edge technologies and interactive animations to deliver an engaging user experience.

## 🚀 Features

- **Portfolio Showcase** - Explore completed projects and case studies
- **Service Display** - Detailed breakdown of development and design services
- **Team & Founders** - Meet the talented team behind the agency
- **Contact Integration** - Easy-to-use contact form for inquiries
- **Smooth Animations** - GSAP, Framer Motion, and custom scroll effects
- **3D Elements** - Spline 3D models for immersive design
- **Responsive Design** - Fully responsive across all devices
- **SEO Optimized** - Next.js for performance and search visibility

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (React 19)
- **Styling**: Tailwind CSS + PostCSS
- **Animations**: GSAP, Framer Motion
- **3D**: Spline for interactive 3D components
- **Language**: TypeScript
- **Linting**: ESLint

## 📁 Project Structure

```
src/
├── app/              # Pages and routes
├── components/       # Reusable React components
│   ├── animations/   # Animation components
│   ├── layout/       # Layout components (Nav, Footer)
│   ├── sections/     # Page sections
│   └── ui/          # UI components
└── lib/             # Utilities and content
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/YOUR_REPO.git
cd YOUR_REPO

# Install dependencies
npm install
```

### Running the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Building for Production

```bash
npm run build
npm start
```

## 📝 Environment Variables

Create a `.env.local` file based on `.env.example`:

```
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
CONTACT_WEBHOOK_URL=your_webhook_url
```

## 📦 Dependencies

- `next` - React framework for production
- `react` & `react-dom` - UI library
- `gsap` - Animation library
- `framer-motion` - Motion library
- `@splinetool/react-spline` - 3D models
- `tailwindcss` - Utility-first CSS framework
- `lenis` - Smooth scroll library

## 🚀 Deployment

### Deploy to Vercel (Recommended)

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically detect Next.js and deploy

### Deploy to Netlify

1. Build the project: `npm run build`
2. Connect your repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `.next`

## 📄 License

[Add your license here]

## 👤 Author

Deepindram & AS Dev Team

## 🤝 Contributing

Contributions are welcome! Feel free to open issues and pull requests.

## 📧 Contact

For inquiries, visit our [contact page](http://localhost:3000/contact) or reach out directly.

---

Made with ❤️ by AS Dev Team
