import React, { useEffect } from 'react'; 
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

import HomeOne from './pages/HomeOne';
import ScrollToTop from './common/ScrollToTop';
import NotFound from './pages/NotFound';
import BlogDetails from './pages/BlogDetails';
import BlogPage from './pages/BlogPage';
import ProductPage from './pages/ProductPage';
import ProductDetails from './pages/ProductDetails';
import HomeTwo from './pages/HomeTwo';
import Cart from './pages/Cart';
import MailingAddress from './pages/MailingAddress';
import PaymentMethod from './pages/PaymentMethod';
import CartPreview from './pages/CartPreview';
import Contact from './pages/Contact';
import Profile from './pages/Profile';
import Dashboard from './pages/Dashboard';
import DashboardProfile from './pages/DashboardProfile';
import Followers from './pages/Followers';
import Following from './pages/Following';
import StatementPage from './pages/StatementPage';
import EarningPage from './pages/EarningPage';
import SettingPage from './pages/SettingPage';
import ReviewPage from './pages/ReviewPage';
import DownloadPage from './pages/DownloadPage';
import RefundPage from './pages/RefundPage';
import Register from './pages/Register';
import Login from './pages/Login';

function App() {

  // This code will run when i will go to item details page. it will scroll me to template top
  const Wrapper = ({ children }) => {
    const location = useLocation(); 

    useEffect(() => {
        setTimeout(() => {
          document.documentElement.scrollTo(0, 0); 
        }, 0); 
    }, [location.pathname, location.search]);
    return children; 
  }
  
  return (
    <>
      <BrowserRouter>
        <Wrapper>
          <Routes>
            <Route path="/" element={<HomeOne />} />
            <Route path="/home-two" element={<HomeTwo />} />
            <Route path="/products" element={<ProductPage />} />
            <Route path="/products/:title" element={<ProductDetails />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:title" element={<BlogDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/mailing-address" element={<MailingAddress />} />
            <Route path="/cart-payment" element={<PaymentMethod />} />
            <Route path="/cart-preview" element={<CartPreview />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/contact" element={<Contact />} />

            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />

            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard-profile" element={<DashboardProfile />} />
            <Route path="/follower" element={<Followers />} />
            <Route path="/following" element={<Following />} />
            <Route path="/setting" element={<SettingPage />} />
            <Route path="/statement" element={<StatementPage />} />
            <Route path="/earning" element={<EarningPage />} />
            <Route path="/review" element={<ReviewPage />} />
            <Route path="/download" element={<DownloadPage />} />
            <Route path="/refund" element={<RefundPage />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Wrapper>
      </BrowserRouter>

      <ScrollToTop/>
    </>
  );
}

export default App;
