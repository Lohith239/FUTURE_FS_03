# Nike Website Redesign

A modern, responsive Nike website redesign built with React, TypeScript, Tailwind CSS, and Firebase.

## Features

- **Modern UI/UX**: Clean, contemporary design with smooth animations
- **Authentication**: Sign up/Sign in functionality with Firebase Auth
- **Shopping Cart**: Add products to cart with quantity management
- **Order Management**: Place orders and view order history
- **Responsive Design**: Optimized for all device sizes
- **Firebase Integration**: Real-time database for orders and newsletter signups

## Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Animations**: Framer Motion
- **Authentication**: Firebase Auth
- **Database**: Firebase Realtime Database
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Build Tool**: Vite

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd nike-website-redesign
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

## Firebase Configuration

The app is configured to use Firebase Realtime Database at:
`https://king-4ab3c-default-rtdb.firebaseio.com/`

### Database Structure

```
├── newsletter-signups/
│   └── {id}/
│       ├── email: string
│       ├── timestamp: string
│       └── source: string
└── orders/
    └── {id}/
        ├── userId: string
        ├── userName: string
        ├── items: array
        ├── total: number
        ├── status: string
        ├── orderDate: string
        └── shippingAddress: string
```

## Features Overview

### Authentication
- Email/password sign up and sign in
- User profile management
- Protected routes for order history

### Shopping Experience
- Product showcase with hover effects
- Add to cart functionality
- Cart management (quantity updates, item removal)
- Checkout process with shipping address

### Order Management
- Order placement with Firebase storage
- Order history viewing
- Order status tracking
- User-specific order filtering

### Newsletter
- Email subscription with Firebase storage
- Success feedback and validation

## Deployment

### Deploy to GitHub Pages (Automatic)

1. Push your code to the `main` branch
2. GitHub Actions will automatically build and deploy your site
3. Your site will be available at `https://yourusername.github.io/your-repo-name/`

### Manual Deployment

1. Build for Production
```bash
npm run build
```

2. Deploy manually:
```bash
npm run deploy
```

### GitHub Pages Setup


## Project Structure

```
src/
├── components/
│   ├── Auth/
│   │   └── SignIn.tsx
│   ├── Cart/
│   │   └── Cart.tsx
│   ├── Orders/
│   │   └── OrderHistory.tsx
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── ProductShowcase.tsx
│   ├── Newsletter.tsx
│   └── Footer.tsx
├── contexts/
│   └── AuthContext.tsx
├── config/
│   └── firebase.ts
├── App.tsx
└── main.tsx
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is for educational purposes. Nike is a trademark of Nike, Inc.