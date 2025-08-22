import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductShowcase from './components/ProductShowcase';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import SignIn from './components/Auth/SignIn';
import OrderHistory from './components/Orders/OrderHistory';
import Cart from './components/Cart/Cart';

interface CartItem {
  id: number;
  name: string;
  price: string;
  quantity: number;
  image: string;
}

function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product: any) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const updateQuantity = (id: number, quantity: number) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const HomePage = () => (
    <>
      <Hero />
      <ProductShowcase onAddToCart={addToCart} />
      <Newsletter />
    </>
  );

  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-white">
          <Header 
            onCartOpen={() => setIsCartOpen(true)}
            cartItemsCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
          />
          
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/orders" element={<OrderHistory />} />
            </Routes>
          </main>
          
          <Footer />
          
          <Cart
            isOpen={isCartOpen}
            onClose={() => setIsCartOpen(false)}
            items={cartItems}
            updateQuantity={updateQuantity}
            removeItem={removeItem}
          />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;