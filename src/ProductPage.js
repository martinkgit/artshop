import React from 'react';
import { useParams } from 'react-router-dom';
import { items } from './App';

function ProductPage(array) {
  const { id } = useParams();
  console.log("Product id "+id);
  
  const product = items.find((p) => p.id === Number(id));
  

  return (
    <div className="container">
      <div>
        <div>
          <img 
            className="img-fluid" 
            style={{
              width: "100%",
              marginTop: "10%"
            }}
            src={require(process.env.PUBLIC_URL + "/assets/" + product.imageUrl)} 
            alt={product.name} 
          />
        </div>
        <div class="product-container">
          <div class="product-details">
            <h1
            style={{textAlign: "left"}}>{product.name}</h1>
            <h2 style={{textAlign: "left"}} >${product.price.toFixed(2)}</h2>
            <button type="button" className="btn btn-lg btn-outline-secondary">Add to cart</button>
          </div>

          <div class="product-features">
            <p>{product.description}</p>
            <h3>Features: </h3>
            <ul>
          {product.tags.map((tag, index) => (
            <li key={index}>{tag}</li>
          ))}
        </ul>
          </div>
            
        
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
