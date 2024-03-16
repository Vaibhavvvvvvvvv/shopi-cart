import React from 'react';

const Cart = ({
    cartCourses,
    deleteCourseFromCartFunction,
    totalAmountCalculationFunction,
    setCartCourses,
}) => {
    return (
        <div className={`cart ${cartCourses.length > 0 ? 'active' : ''}`}>
            {cartCourses.length === 0 ? (
                 <img src='https://i.pinimg.com/originals/2e/ac/fa/2eacfa305d7715bdcd86bb4956209038.png' alt=''/>
            ) : (
                <div className="container mt-3">
                    <div className="row">
                        {cartCourses.map((item) => (
                            <div key={item.product.id} className="col-md-4 mb-4">
                                <div className="card text-white bg-dark">
                                    <img 
                                        src={item.product.image} 
                                        alt={item.product.name} 
                                        className="card-img-top" 
                                        style={{ width: '100%', height: '150px', objectFit: 'cover' }} // Adjust height and width here
                                    />
                                    <div className="card-body">
                                        <h3 className="card-title">{item.product.name}</h3>
                                        <p className="card-text">Price: ₹{item.product.price}</p>
                                    </div>
                                    <div className="card-footer">
                                        <div className="item-actions">
                                            <button
                                                className="btn btn-danger remove-button"
                                                onClick={() => deleteCourseFromCartFunction(item.product)}>
                                                Remove Product
                                            </button>
                                            <div className="quantity btn-group">
                                                <button
                                                    className="btn btn-outline-secondary"
                                                    onClick={(e) => {
                                                        setCartCourses((prevCartCourses) => {
                                                            const updatedCart = prevCartCourses.map(
                                                                (prevItem) =>
                                                                    prevItem.product.id === item.product.id
                                                                        ? { ...prevItem, quantity: item.quantity + 1 }
                                                                        : prevItem
                                                            );
                                                            return updatedCart;
                                                        });
                                                    }}>+</button>
                                                <p className='quant btn btn-outline-secondary'>{item.quantity} </p>
                                                <button
                                                    className="btn btn-outline-secondary"
                                                    onClick={(e) => {
                                                        setCartCourses((prevCartCourses) => {
                                                            const updatedCart = prevCartCourses.map(
                                                                (prevItem) =>
                                                                    prevItem.product.id === item.product.id
                                                                        ? { ...prevItem, quantity: Math.max(item.quantity - 1, 0) }
                                                                        : prevItem
                                                            );
                                                            return updatedCart;
                                                        });
                                                    }}>-</button>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="checkout-section mt-4">
                        <div className="checkout-total">
                            <p className="total">Total Amount: ₹{totalAmountCalculationFunction()}</p>
                        </div>
                        <button
                            className="btn btn-primary checkout-button"
                            disabled={cartCourses.length === 0 || totalAmountCalculationFunction() === 0}>
                            Proceed to Payment
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Cart;
