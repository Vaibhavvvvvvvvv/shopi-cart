import React, { useState } from 'react';
import Products from './Products';
import Cart from './Cart';

const ShoppingCart = () => {
    const [cartCourses, setCartCourses] = useState([]);

    // Function to add course to cart
    const addToCart = (course) => {
        const updatedCart = [...cartCourses];
        const existingItem = updatedCart.find(item => item.product.id === course.id);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            updatedCart.push({ product: course, quantity: 1 });
        }
        setCartCourses(updatedCart);
    };

    // Function to remove course from cart
    const deleteCourseFromCart = (course) => {
        const updatedCart = cartCourses.filter(item => item.product.id !== course.id);
        setCartCourses(updatedCart);
    };

    // Function to calculate total amount
    const totalAmountCalculation = () => {
        return cartCourses.reduce((total, item) => {
            return total + (item.product.price * item.quantity);
        }, 0);
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    <Products addToCart={addToCart} />
                </div>
                <div className="col-md-4">
                    <Cart
                        cartCourses={cartCourses}
                        deleteCourseFromCartFunction={deleteCourseFromCart}
                        totalAmountCalculationFunction={totalAmountCalculation}
                        setCartCourses={setCartCourses}
                    />
                </div>
            </div>
        </div>
    );
}

export default ShoppingCart;
