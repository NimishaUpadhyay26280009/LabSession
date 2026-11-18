import React from 'react';
import './App.css'; 
 
function ProductList({ products }) { 
 
    if (products.length === 0) { 
        return ( 
            <h3 className="text-center"> 
                No Products Available 
            </h3> 
        ); 
    } 
 
    return ( 
        <div className="row"> 
 
            {/* Display products using map() */} 
            {products.map((product) => ( 
 
                <div className="col-md-4 mb-4" key={product.id}> 
 
                    <div 
                        className="card product-card" 
                        onClick={() => alert(product.name)} 
                    > 
 
                        <div className="card-body"> 
 
                            <h5 className="card-title"> 
                                {product.name} 
                            </h5> 
 
                            <p className="card-text"> 
                                {product.description} 
                            </p> 
 
                            {/* Dynamic class */} 
                            <p className={ 
 
                                product.price > 500 
                                    ? "text-danger fw-bold" 
                                    : "text-success fw-bold" 
                            }> 
                                Price: ₹{product.price} 
                            </p> 
 
                        </div> 
 
                    </div> 
 
                </div> 
 
            ))} 
 
        </div> 
    ); 
} 
 
function App() { 
 
    // Product Array 
    const products = [ 
        { 
            id: 1, 
            name: "Laptop", 
            description: "Powerful laptop for programming", 
            price: 55000 
        }, 
        { 
            id: 2, 
            name: "Mouse", 
            description: "Wireless optical mouse", 
            price: 400 
        }, 
        { 
            id: 3, 
            name: "Keyboard", 
            description: "Mechanical gaming keyboard", 
            price: 1200 
        }, 
        { 
            id: 4, 
            name: "Speakers", 
            description: "High quality Bluetooth speakers", 
            price: 9200 
        }, 
        { 
          id: 5, 
          name: "Headphones", 
 
          description: "High quality Stereo Headphones", 
          price: 500 
        } 
    ]; 
 
    return ( 
        <div className="container mt-5"> 
 
            <h1 className="text-center mb-4"> 
                Product List 
            </h1> 
 
            <ProductList products={products} /> 
 
        </div> 
    ); 
} 
 
export default App;