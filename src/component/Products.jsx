import React from 'react';

const Products = ({ addToCart }) => {
    const courses = [
        { id: 1, 
          name: 'Hoodie', 
          price: 799, 
          image: 'https://www.allstag.com/cdn/shop/files/Artboard1_e612a338-74aa-4e25-a2d3-d7eea569b44b.jpg?v=1699969023'
        },
        { id: 2, 
          name: 'sweatshirt', 
          price: 699, 
          image: 'https://th.bing.com/th/id/R.4e784bbe7e1ea1cc9fb69112b70f8099?rik=4J9ei8%2fOE5tUIg&riu=http%3a%2f%2fwww.allstag.com%2fcdn%2fshop%2ffiles%2fArtboard3_2.jpg%3fv%3d1699974256&ehk=mQmowmCLpx3HfpcY5hp44zY%2fp3%2bOO3Xbnma0xBLpXIk%3d&risl=&pid=ImgRaw&r=0'
        },
        { id: 3, 
          name: 'Hoodie', 
          price: 799, 
          image: 'https://www.allstag.com/cdn/shop/files/MTDDTBACK.jpg?v=1701248214'
        },
        { id: 4, 
            name: 'goku T-shirt', 
            price: 999, 
            image: 'https://www.allstag.com/cdn/shop/files/IMG_5731.jpg?v=1696342679'
          },
          { id: 5, 
            name: 'joker T-shirt', 
            price: 999, 
            image: 'https://www.allstag.com/cdn/shop/files/4-2.jpg?v=1696342616'
          },
          { id: 6, 
            name: 'polo T-shirt', 
            price: 899, 
            image: 'https://www.allstag.com/cdn/shop/files/Artboard3_4.png?v=1697806472'
          }
    ];

    return (
        <div className="container mt-3">
            <div className="row">
                {courses.map(course => (
                    <div key={course.id} className="col-md-4 mb-4">
                        <div className="card text-white bg-dark">
                            <img 
                                className="card-img-top" 
                                src={course.image} 
                                alt={course.name} 
                                style={{ height: '300px', objectFit: 'cover' }} // Adjust height here
                            />
                            <div className="card-body">
                                <h5 className="card-title">{course.name}</h5>
                                <p className="card-text">Price: ${course.price}</p>
                                <button className="btn btn-primary" onClick={() => addToCart(course)}>Add to Cart</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Products;
