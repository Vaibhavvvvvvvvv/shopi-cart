import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Products from './component/Products';
import Cart from './component/Cart';
import Navbar from './component/Navbar';

const App = () => {
  const [cartCourses, setCartCourses] = useState([]);

  const addToCart = (course) => {
    const existingCourse = cartCourses.find(item => item.product.id === course.id);
    if (existingCourse) {
      const updatedCart = cartCourses.map(item =>
        item.product.id === course.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartCourses(updatedCart);
    } else {
      setCartCourses([...cartCourses, { product: course, quantity: 1 }]);
    }
  };

  const deleteCourseFromCart = (product) => {
    const updatedCart = cartCourses.filter(item => item.product.id !== product.id);
    setCartCourses(updatedCart);
  };

  const totalAmountCalculation = () => {
    return cartCourses.reduce((total, item) => total + item.product.price * item.quantity, 0);
  };

  return (
    <Router>
      <div>
        <Navbar cartCount={cartCourses.length} />
        <div className="container mt-3">
          <Routes>
            <Route exact path="/" element={<Products addToCart={addToCart} />} /> {/* Use 'element' prop instead of 'component' */}
            <Route path="/cart" element={<Cart cartCourses={cartCourses} deleteCourseFromCartFunction={deleteCourseFromCart} totalAmountCalculationFunction={totalAmountCalculation} setCartCourses={setCartCourses} />} /> {/* Use 'element' prop instead of 'component' */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
