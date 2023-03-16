import React from 'react';
import { Link } from 'react-router-dom';

function StoreItemsPage({array}) {


  const items = array;
  console.log("Is store items array? "+Array.isArray(items));

  return (
    <div className="container">
      <h1 className="text-center">Store Items</h1>
      <div className="row">
        {items.map((item) => (
          
          <div key={item.id} className="col-md-4">
            <Link to= {`/product/${item.id}`}>
            <div className="card mb-4 shadow-sm" >
              <img 
                className="card-img-top" 
                src={require(process.env.PUBLIC_URL + "/assets/" + item.imageUrl)} 
                alt={item.name}
              />
              <div className="card-body" >
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">${item.price.toFixed(2)}</p>
                <div className="d-flex justify-content-between align-items-center" >
                  <div className="btn-group">
                    <button type="button" className="btn btn-sm btn-outline-secondary">Add to cart</button>
                  </div>
                </div>
              </div>
            </div>
            </Link>
          </div>
          
        ))}
      </div>
    </div>
  );
}

export default StoreItemsPage;





