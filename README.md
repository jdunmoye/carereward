# CareAlign Rewards Platform

A comprehensive healthcare performance and rewards platform built with Vite, React, and TypeScript.

## 🚀 Features

- **Dashboard**: Real-time metrics and activity monitoring
- **Financial Metrics**: Cost savings, ROI tracking, and budget management
- **Clinical Metrics**: Patient outcomes, quality scores, and safety indicators
- **Behavior Drivers**: Performance-based reward programs
- **Opportunity Analysis**: Identify and track improvement opportunities
- **Reward System**: Manage reward types, criteria, and distributions
- **Success Stories**: Celebrate achievements and share best practices
- **Reports**: Generate and schedule comprehensive reports
- **Settings**: User preferences and system configuration

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Charts**: Recharts
- **Linting**: ESLint + Prettier

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/           # Reusable UI components
│   ├── layout/       # Layout components (Header, Sidebar, etc.)
│   └── charts/       # Chart components
├── pages/            # Page components
├── types/            # TypeScript type definitions
├── data/            # Mock data and constants
├── utils/           # Utility functions
├── hooks/           # Custom React hooks
└── styles/          # Global styles and Tailwind config
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd carealign-rewards
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## 🎨 Design System

The platform uses a comprehensive design system with:

- **CareAlign Brand Colors**: Primary, secondary, accent, success, warning, and error colors
- **Typography**: Inter font family for modern, readable text
- **Components**: Reusable UI components with consistent styling
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Accessibility**: WCAG 2.1 AA compliance

## 📊 Key Features

### Dashboard
- Real-time metrics overview
- Recent activity feed
- Quick actions and shortcuts
- Top performers leaderboard

### Financial Metrics
- Cost savings tracking
- ROI analysis
- Budget allocation monitoring
- Monthly trend analysis

### Clinical Metrics
- Patient satisfaction scores
- Quality indicators
- Safety metrics
- Department performance comparison

### Behavior Drivers
- Performance-based reward programs
- Success rate tracking
- Category-based organization
- Participant management

### Opportunity Analysis
- Impact vs effort matrix
- Priority-based organization
- Status tracking
- Timeline management

### Reward System
- Multiple reward types (points, monetary, badges, certificates)
- Criteria-based awards
- Category organization
- Recent awards tracking

### Success Stories
- Featured success stories
- Impact metrics
- Participant recognition
- Category-based organization

### Reports
- Automated report generation
- Custom report templates
- Scheduling capabilities
- Download and sharing options

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_APP_NAME=CareAlign Rewards
VITE_API_BASE_URL=http://localhost:3000/api
VITE_APP_VERSION=1.0.0
```

### Tailwind Configuration

The project includes a custom Tailwind configuration with:
- CareAlign brand colors
- Custom spacing and typography
- Animation utilities
- Component-specific classes

## 📱 Responsive Design

The platform is fully responsive with breakpoints:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🧪 Testing

```bash
# Run tests (when implemented)
npm run test

# Run tests with coverage
npm run test:coverage
```

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

### Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Deploy to Netlify

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy --prod --dir=dist
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit your changes: `git commit -am 'Add new feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support, email support@carealign.com or create an issue in the repository.

## 🔮 Roadmap

- [ ] User authentication and authorization
- [ ] Real-time data integration
- [ ] Advanced analytics and reporting
- [ ] Mobile app development
- [ ] API integration
- [ ] Advanced charting capabilities
- [ ] Export functionality
- [ ] Multi-language support

---

Built with ❤️ by the CareAlign Team
