# 3D Interactive Founder Portfolio

A brand-new, cinematic 3D portfolio experience designed for tech founders — not a traditional resume or developer portfolio. This is an explorer-style interactive narrative that lets visitors move through spatial scenes rather than scrolling through sections.

![Portfolio Screenshot](C:/Users/jayam/.gemini/antigravity/brain/28c8a559-1c46-4bf4-a5e1-c7f1b69f2a33/intro_scene_screenshot_1768975655083.png)

## 🎯 Experience Philosophy

This portfolio communicates:
- **System thinking** over project lists
- **Vision** over technical skills
- **Leadership** over contributions
- **Product sensibility** over code samples

It feels like an interactive digital product world, not a website.

## 🏗 Architecture

### Tech Stack
- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animation**: Framer Motion
- **3D**: React Three Fiber + Three.js
- **Fonts**: Inter (Google Fonts)

### Scene Architecture
The experience consists of 5 interconnected scenes:

1. **Intro Scene** - Cinematic entry portal introducing the founder
2. **Vision Scene** - Branching node system expressing philosophy and direction
3. **Capabilities Scene** - Dynamic 3D structures representing four core domains
4. **Approach Scene** - Blueprint-style grids showing execution principles
5. **Contact Scene** - Illuminated terminal for collaboration

### Project Structure
```
portfolio-3d/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main entry point
│   └── globals.css         # Design system tokens
├── components/
│   ├── 3d/                 # Reusable 3D primitives
│   │   ├── FloatingGeometry.tsx
│   │   ├── GlowingGrid.tsx
│   │   └── AtmosphericFog.tsx
│   ├── scenes/             # Individual scene components
│   │   ├── IntroScene.tsx
│   │   ├── VisionScene.tsx
│   │   ├── CapabilitiesScene.tsx
│   │   ├── ApproachScene.tsx
│   │   └── ContactScene.tsx
│   ├── experience/         # Core experience logic
│   │   └── ExperienceController.tsx
│   └── ui/                 # HUD and overlays
│       └── NavigationHUD.tsx
├── lib/
│   ├── scene-config.ts     # Scene definitions
│   ├── camera.ts           # Camera utilities
│   └── motion.ts           # Animation constants
└── hooks/
    └── useScrollProgress.ts # Scroll-based navigation
```

## 🎨 Visual Theme

**Digital Horizon + Architect's Mind**

- **Base Colors**: Deep blue (#0a0e1a), charcoal (#1a1f2e), black
- **Accents**: Electric cyan (#00d9ff), soft violet (#a78bfa), white glow
- **Visuals**: Floating geometric forms, glowing grids, depth fog, parallax

**Motion Personality**: Cinematic, calm, purposeful

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Navigate to project directory
cd "d:/portfolio new/portfolio-3d"

# Install dependencies (already done)
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm start
```

## 🎮 Navigation

- **Scroll**: Move through scenes vertically
- **Arrow Keys**: ↑↓ to navigate between scenes
- **Navigation Dots**: Click dots on the right to jump to specific scenes
- **Mouse/Touch**: Standard scrolling behavior

## ⚙️ Customization

### Update Contact Information

Edit `components/scenes/ContactScene.tsx`:
```tsx
// Line ~67
<a href="mailto:YOUR_EMAIL@example.com">
  Start a Conversation
</a>

// Lines ~79-90 - Update social links
<a href="https://linkedin.com/in/YOUR_PROFILE">LinkedIn</a>
<a href="https://github.com/YOUR_USERNAME">GitHub</a>
<a href="https://twitter.com/YOUR_HANDLE">Twitter</a>
```

### Adjust Camera Positions

Edit `lib/scene-config.ts` to modify camera positions for each scene:
```typescript
cameraPosition: [x, y, z],  // Camera location
cameraTarget: [x, y, z],    // Where camera looks
```

### Modify Scene Colors

Edit `app/globals.css` design tokens:
```css
--color-accent-cyan: #00d9ff;
--color-accent-violet: #a78bfa;
```

### Change Scene Content

Each scene has a corresponding overlay component:
- `IntroOverlay()` - Edit intro text
- `VisionOverlay()` - Edit vision/philosophy
- `CapabilitiesOverlay()` - Edit core domains
- `ApproachOverlay()` - Edit principles
- `ContactOverlay()` - Edit contact CTA

## 🎯 Performance

- **Progressive Loading**: Scenes load on-demand
- **Dynamic Imports**: 3D components only load client-side
- **Responsive**: Optimized for desktop, tablet, and mobile
- **Reduced Motion**: Respects user preferences

## 📱 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

Requires WebGL support. Graceful fallback planned for non-WebGL browsers.

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

### Key Files to Edit

- **Content**: `components/scenes/*Scene.tsx`
- **Styling**: `app/globals.css`
- **3D Visuals**: `components/3d/*`
- **Navigation**: `components/experience/ExperienceController.tsx`
- **Config**: `lib/scene-config.ts`

## 🎨 Design Principles

1. **No traditional sections** - Spatial scenes instead
2. **No resume-style layout** - Narrative flow
3. **No game mechanics** - Professional, calm
4. **Founder positioning** - Leadership and vision
5. **Premium aesthetic** - Memorable first impression

## 📄 License

This is a custom portfolio template. Feel free to adapt for your own use.

## 🤝 Next Steps

- [ ] Add your email and social links in ContactScene
- [ ] Customize metadata in `app/layout.tsx`
- [ ] Test on mobile devices
- [ ] Deploy to Vercel/Netlify
- [ ] Add custom domain
- [ ] Set up analytics (optional)

---

**Built with intention**. Systems, not just software.
