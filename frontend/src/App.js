import './App.css';
import Header from "./component/layout/Header/Header.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from 'react';
import Footer from "./component/layout/Footer/Footer.js";
import Home from "./component/Home/Home.js";
import WebFont from "webfontloader";
import ProductDetails from "./component/Product/ProductDetails.js";
import Products from "./component/Product/Products.js"
import Search from "./component/Product/Search.js"
import LoginSignUp from './component/User/LoginSignUp.js';
import store from './store.js';
import { loadUser } from './actions/userAction.js';
import UserOptions from './component/layout/Header/UserOptions.js';
import { useSelector } from 'react-redux';
import Profile from './component/User/Profile.js'
import ProtectedRoute from './component/Route/ProtectedRoute.js';
import UpdateProfile from './component/User/UpdateProfile.js';
import UpdatePassword from './component/User/UpdatePassword.js';
import ForgotPassword from './component/User/ForgotPassword.js';
import ResetPassword from './component/User/ResetPassword.js';
import Cart from './component/Cart/Cart.js'
import Shipping from './component/Cart/Shipping.js'
import ConfirmOrder from './component/Cart/ConfirmOrder.js'
import OrderSuccess from "./component/Cart/OrderSuccess.js"
import MyOrders from "./component/Order/MyOrders.js"
import OrderDetails from "./component/Order/OrderDetails.js"
import Dashboard from "./component/admin/Dashboard.js"
import ProductList from "./component/admin/ProductList.js"
import NewProduct from './component/admin/NewProduct.js';
import UpdateProduct from "./component/admin/UpdateProduct.js"
import OrderList from "./component/admin/OrderList.js"
import ProcessOrder from './component/admin/ProcessOrder.js';
import UsersList from './component/admin/UsersList.js';
import UpdateUser from "./component/admin/UpdateUser.js"
import Contact from "./component/layout/Contact/Contact.js"
import About from "./component/layout/About/About.js"



function App() {


  const { isAuthenticated, user } = useSelector(state => state.user);

  React.useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });

    store.dispatch(loadUser());

  }, []);

  

  return (

    <Router>
      <Header />
      {isAuthenticated && <UserOptions user={user} />}

      <Routes><Route exact path='/' element={<Home />} />

        <Route exact path='/product/:id' element={<ProductDetails />} />

        <Route exact path='/products' element={<Products />} />

        <Route path='/products/:keyword' element={<Products />} />

        <Route exact path='/search' element={<Search />} />

        <Route exact path='/account' element={<ProtectedRoute component={Profile} />} />

        <Route exact path='/me/update' element={<ProtectedRoute component={UpdateProfile} />} />

        <Route exact path='/password/update' element={<ProtectedRoute component={UpdatePassword} />} />

        <Route exact path='/password/forgot' element={<ForgotPassword />} />;

        <Route exact path='/password/reset/:token' element={<ResetPassword />} />;

        <Route exact path='/login' element={<LoginSignUp />} />;

        <Route exact path='/cart' element={<Cart />} />;

        <Route exact path='/shipping' element={<ProtectedRoute component={Shipping} />} />

        <Route exact path='/order/confirm' element={<ProtectedRoute component={ConfirmOrder} />} />

        <Route exact path='/success' element={<ProtectedRoute component={OrderSuccess} />} />

        <Route exact path='/orders' element={<ProtectedRoute component={MyOrders} />} />

        <Route exact path='/order/:id' element={<ProtectedRoute component={OrderDetails} />} />


        <Route exact path='/admin/dashboard' element={<ProtectedRoute isAdmin={true} component={Dashboard} />} />

        <Route exact path='/admin/products' element={<ProtectedRoute isAdmin={true} component={ProductList} />} />

        <Route exact path='/admin/product' element={<ProtectedRoute isAdmin={true} component={NewProduct} />} />

        <Route exact path='/admin/product/:id' element={<ProtectedRoute isAdmin={true} component={UpdateProduct} />} />

        <Route exact path='/admin/orders' element={<ProtectedRoute isAdmin={true} component={OrderList} />} />

        <Route exact path='/admin/order/:id' element={<ProtectedRoute isAdmin={true} component={ProcessOrder} />} />

        <Route exact path='/admin/users' element={<ProtectedRoute isAdmin={true} component={UsersList} />} />

        <Route exact path='/admin/user/:id' element={<ProtectedRoute isAdmin={true} component={UpdateUser} />} />

        <Route exact path='/contact' element={<Contact />} />

        <Route exact path='/about' element={<About />} />

      </Routes>
      <Footer />
    </Router>
  )
}


export default App; 
