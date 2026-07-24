# 🍔 Food Delivery Application

A full-stack **MERN (MongoDB, Express.js, React.js, Node.js)** web application that enables users to browse food items, add products to their cart, place orders securely, and track order status. The platform also provides a dedicated **Admin Dashboard** for managing food items, customer orders, and delivery operations efficiently.

---

# 🚀 Live Demo

### 🌐 Customer Portal
https://food-delivery-frontend-e9mi.onrender.com

### 👨‍💼 Admin Dashboard
https://food-delivery-admin-1p2f.onrender.com

---

# 🛠️ Tech Stack

## Frontend
- React.js
- Vite
- React Router DOM
- Axios
- CSS

## Backend
- Node.js
- Express.js

## Database
- MongoDB
- Mongoose

## Authentication
- JSON Web Token (JWT)

## Payment Gateway
- Stripe

## Image Storage
- Cloudinary

## Deployment
- Render

---

# ✨ Key Features

## 👤 Customer

- Register and Login securely
- Browse food items by category
- Search food products
- Add items to cart
- Remove items from cart
- Update item quantities
- Place food orders
- Secure online payment using Stripe
- View order history
- Track order status
- Manage personal profile information

---

## 🛒 Cart Management

- Add food items to cart
- Update product quantities
- Remove items from cart
- Automatic price calculation
- Delivery fee calculation
- Order summary before checkout

---

## 👨‍💼 Admin

- Secure admin login
- Dashboard with business analytics
- Add new food items
- Upload food images
- Edit food details
- Delete food products
- Manage customer orders
- Update delivery status
- View all orders and customers

---

# 🏠 Application Pages

## Home Page

- Featured food items
- Food categories
- Popular dishes section
- Responsive navigation
- Promotional banners

---

## Menu Page

- Browse all available food items
- Search functionality
- Category filtering
- Add products to cart

---

## Cart Page

- View selected items
- Update quantities
- Remove items
- Order summary
- Checkout option

---

## Checkout Page

- Delivery address form
- Order summary
- Stripe payment integration
- Order confirmation

---

## Orders Page

- View active orders
- View completed orders
- Track order status

---

## User Profile

- Update profile information
- Manage account details
- View order history

---

## Admin Dashboard

### Dashboard

- Total Orders
- Total Revenue
- Total Customers
- Total Food Items

### Food Management

- Add Food Items
- Update Food Information
- Delete Food Products

### Order Management

- View Orders
- Update Delivery Status
- Manage Customer Orders

---

# 💳 Payment Integration

Supports secure online payments using:

- Stripe Checkout

---

# 📂 Folder Structure

```text
Food-Delivery/
│
├── frontend/        # Customer Frontend (React + Vite)
├── backend/         # Express Server & APIs
├── admin/           # Admin Dashboard
├── .gitignore
├── README.md
└── .git
```

---

# ⚙️ Project Setup

## Clone Repository

```bash
git clone https://github.com/akhssm/Food-Delivery
```

```bash
cd Food-Delivery
```

---

## Install Dependencies

### Backend

```bash
cd backend
npm install
```

### Frontend

```bash
cd ../frontend
npm install
```

### Admin

```bash
cd ../admin
npm install
```

---

# 🔑 Environment Variables

## Backend (.env)

```env
PORT=4000

MONGODB_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret_key

CLOUDINARY_NAME=your_cloudinary_cloud_name

CLOUDINARY_API_KEY=your_cloudinary_api_key

CLOUDINARY_SECRET_KEY=your_cloudinary_secret_key

STRIPE_SECRET_KEY=your_stripe_secret_key

FRONTEND_URL=http://localhost:5173

ADMIN_URL=http://localhost:5174
```

---

## Frontend (.env)

```env
VITE_BACKEND_URL=http://localhost:4000
```

---

## Admin (.env)

```env
VITE_BACKEND_URL=http://localhost:4000
```

---

# ▶️ Run the Application

## Start Backend

```bash
cd backend
npm run server
```

## Start Frontend

```bash
cd frontend
npm run dev
```

## Start Admin Dashboard

```bash
cd admin
npm run dev
```

---

# 📸 Screenshots

Add screenshots of the application here.

Example:

```text
screenshots/
│── home.png
│── menu.png
│── cart.png
│── checkout.png
│── orders.png
│── admin-dashboard.png
```

---

# 🔒 Security Features

- JWT Authentication
- Password Encryption
- Protected Routes
- Secure Stripe Payments
- Cloudinary Image Upload
- Environment Variable Configuration

---

# 🚀 Future Enhancements

- Real-Time Order Tracking
- Push Notifications
- Coupon & Discount System
- Ratings & Reviews
- Wishlist Feature
- Google Maps Integration
- Multi-language Support
- Dark Mode

---

# 👨‍💻 Author

**Akshay Kumar Reddy**

GitHub: https://github.com/akhssm

LinkedIn: https://www.linkedin.com/in/akshay-manda-b65757244/

---

# 🤝 Contributing

Contributions are welcome!

Feel free to fork this repository, create a new branch, and submit a Pull Request.

---

# ⭐ Support

If you found this project helpful, please consider giving it a ⭐ on GitHub.

---

# 📄 License

This project is licensed under the MIT License.