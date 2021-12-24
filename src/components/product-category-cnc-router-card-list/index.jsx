import React, { useState, useEffect } from 'react';
import './style.css';
import ProductCard from '../../elements/product-card'
import ProductCardStati3Column from '../../elements/product-card-static-3column'

const Index = () => {

    let [apiData, setApiData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:9000/products", {
          method: "GET",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);
            setApiData(data);
          })
          .catch((err) => console.log(err));
    
        // cleaner function / unsubscribe
        return () => {};
      }, []);

    return (
        <div className="product-card-list">
            <div className="row g-3">
            {apiData.map((e) => {
                return (
                    <ProductCardStati3Column key={e.id}
                        name={e.name} 
                        slug={e.slug} 
                        category={e.category} 
                        image_url={e.image_url} 
                        description={e.description}
                    />
                );
            })}
            </div>
        </div>
    )
}

export default Index
