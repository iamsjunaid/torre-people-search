# Torre People Search

A modern, mobile-first web application for searching and viewing people profiles using the Torre API. Built with React, TypeScript, and Tailwind CSS.

![Torre People Search](https://img.shields.io/badge/React-19.1.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.0-38B2AC)
![Node.js](https://img.shields.io/badge/Node.js-18+-green)

## ✨ Features

- **🔍 Real-time Search**: Search for people using Torre's streaming API
- **📱 Mobile-First Design**: Responsive design optimized for mobile devices
- **👤 Profile Details**: View detailed profiles with strengths, education, and verification status
- **🎨 Modern UI**: Clean, intuitive interface with smooth animations
- **⚡ Fast Performance**: Optimized for speed with proper error handling
- **🔒 Type Safety**: Full TypeScript support for better development experience

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/torre-people-search.git
   cd torre-people-search
   ```

2. **Install dependencies**:
   ```bash
   npm install
   cd server && npm install && cd ..
   ```

3. **Start the development server**:
   ```bash
   # Terminal 1: Start the backend proxy server
   cd server && npm start
   
   # Terminal 2: Start the frontend development server
   npm run dev
   ```

4. **Open your browser** and navigate to `http://localhost:5173`

## 🏗️ Project Structure

```
torre-people-search/
├── src/
│   ├── components/
│   │   ├── PeopleSearch.tsx    # Main search component
│   │   └── ProfileModal.tsx    # Profile sidebar component
│   ├── services/
│   │   └── torre.ts           # API service functions
│   ├── App.tsx                # Main app component
│   └── main.tsx               # App entry point
├── server/
│   ├── index.js               # Express proxy server
│   └── package.json           # Server dependencies
├── public/                    # Static assets
├── package.json               # Frontend dependencies
├── tailwind.config.js         # Tailwind configuration
├── vite.config.ts            # Vite configuration
└── README.md                 # This file
```

## 🛠️ Technology Stack

### Frontend
- **React 19** - Modern React with latest features
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Fast build tool and dev server

### Backend
- **Node.js** - JavaScript runtime
- **Express** - Web framework
- **CORS** - Cross-origin resource sharing
- **node-fetch** - HTTP client

### APIs
- **Torre People Search API** - `/entities/_searchStream`
- **Torre Genome API** - `/api/genome/bios/:username`

## 📱 Usage

1. **Search for People**: Type a name in the search bar and press Enter
2. **View Results**: Browse through the list of matching profiles
3. **View Details**: Click on any profile to see detailed information
4. **Close Details**: Click outside the sidebar or the × button to close

## 🔧 Development

### Available Scripts

```bash
# Development
npm run dev          # Start frontend dev server
npm run lint         # Run ESLint

# Build
npm run build        # Build for production
npm run preview      # Preview production build

# Server
cd server && npm start    # Start backend server
```

### Environment Variables

Create a `.env` file in the root directory:

```env
# Frontend
VITE_API_BASE_URL=http://localhost:3001

# Backend
PORT=3001
NODE_ENV=development
CORS_ORIGIN=http://localhost:5173
```

## 🚀 Deployment

For production deployment, see [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

### Quick Production Setup

```bash
# Build the application
npm run build

# Start production server
npm run start:prod
```

## 🎨 Design Features

- **Mobile-First**: Optimized for mobile devices with responsive design
- **Clean Interface**: Minimalist design with focus on usability
- **Smooth Animations**: Subtle transitions and hover effects
- **Accessibility**: Proper ARIA labels and keyboard navigation
- **Loading States**: Visual feedback during API calls

## 🔍 API Integration

The application integrates with two Torre APIs:

1. **Search API**: `POST /entities/_searchStream`
   - Handles streaming JSON responses
   - Real-time search results
   - Proper error handling

2. **Genome API**: `GET /api/genome/bios/:username`
   - Fetches detailed profile information
   - Proxied through backend to avoid CORS issues
   - Includes strengths, education, and verification status

## 🐛 Troubleshooting

### Common Issues

1. **Tailwind not working**: Ensure you're using Tailwind v3.4.0+ and have PostCSS configured
2. **CORS errors**: Make sure the backend server is running on port 3001
3. **API errors**: Check the browser console and server logs for detailed error messages
4. **Build errors**: Run `npm run lint` to check for TypeScript/ESLint issues

### Debug Mode

Enable debug logging by setting `NODE_ENV=development` in your environment variables.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Torre](https://torre.ai) for providing the APIs
- [React](https://reactjs.org) team for the amazing framework
- [Tailwind CSS](https://tailwindcss.com) for the utility-first CSS framework
- [Vite](https://vitejs.dev) for the fast build tool

---

**Built with ❤️ for the Torre Engineering Technical Assessment**
