# 🍔 Foody - Modern Food Delivery Platform

Foody is a full-stack food delivery application designed to connect customers with their favorite local restaurants. It features a robust multi-role system for Customers, Restaurants, and Delivery Agents, providing a seamless experience from ordering to delivery.

## 🚀 Key Features

### 🛒 For Customers
- **OTP Authentication**: Secure login using mobile number verified via Twilio OTP.
- **Restaurant Discovery**: Browse categories and explore restaurants near your location.
- **Search System**: Quickly find your favorite dishes or restaurants.
- **Secure Profiles**: Manage personal information and delivery addresses.
- **Cart & Ordering**: (In-Progress) Smooth checkout flow for food orders.

### 🏪 For Restaurants
- **Partner Program**: Easy registration through the "Join Us" portal.
- **Owner Dashboard**: Comprehensive analytics with real-time charts (orders trend, revenue, customer distribution) using Recharts.
- **Menu Management**: Update and manage food items and categories.
- **Order Tracking**: Manage incoming orders and update their status.

### 🚴 For Delivery Agents
- **Agent Registration**: Self-onboarding for delivery partners.
- **Delivery Management**: (Planned) Efficient route handling and order assignments.

### 🛡️ For Admins
- **Global Actions**: Approve restaurant applications, manage categories, and oversee platform health.

## 🛠️ Tech Stack

### Frontend
- **Framework**: [React](https://reactjs.org/) (Vite)
- **Styling**: [Tailwind CSS 4.0](https://tailwindcss.com/)
- **State Management**: React Hooks (useState, useEffect)
- **Icons**: [Lucide React](https://lucide.dev/) & [Bootstrap Icons](https://icons.getbootstrap.com/)
- **Charts**: [Recharts](https://recharts.org/)
- **Routing**: [React Router v7](https://reactrouter.com/)

### Backend
- **Runtime**: [Node.js](https://nodejs.org/)
- **Framework**: [Express.js](https://expressjs.com/)
- **Database**: [MongoDB](https://www.mongodb.com/) (Mongoose ODM)
- **Auth**: JWT (JSON Web Tokens) with Cookie-based persistence.
- **File Uploads**: [Cloudinary](https://cloudinary.com/) (via Multer)
- **Communication**: [Twilio API](https://www.twilio.com/) for OTP services.

## 📁 Project Structure

```text
Foody/
├── client/           # React Frontend (Vite)
│   ├── src/
│   │   ├── components/  # Reusable UI components
│   │   └── styles/      # Global CSS and Tailwind config
├── server/           # Express Backend
│   ├── models/       # Mongoose Schemas (User, Order, etc.)
│   ├── routes/       # API Endpoints
│   ├── middlewares/  # Auth & Validation
│   └── utils/        # Twilio, Cloudinary, and DB connectors
└── README.md
```

## ⚙️ Getting Started

### Prerequisites
- Node.js (v18+)
- MongoDB Atlas account or local instance
- Twilio & Cloudinary account keys

### Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd Foody
   ```

2. **Setup Backend**:
   ```bash
   cd server
   npm install
   ```
   Create a `.env` file in the `server` directory:
   ```env
   PORT=3000
   MONGO_URI=your_mongodb_uri
   JWT_SECRET_KEY=your_secret
   TWILIO_PHN=your_twilio_number
   TWILIO_ACCOUNT_SID=your_sid
   TWILIO_AUTH_TOKEN=your_token
   ```

3. **Setup Frontend**:
   ```bash
   cd ../client
   npm install
   ```

### Running the App

- **Start Backend**: `cd server && npm run dev`
- **Start Frontend**: `cd client && npm run dev`

## 📄 License
This project is licensed under the ISC License.