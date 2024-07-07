import React from 'react';
import './Product.css';

const Product = () => {
  return (
    <div className="product-page">
      <header className="header">
        <h1>ProductHub - Details of The Product</h1>
      </header>
      <main className="main-content">
        <div className="product-image">
          <img src="https://via.placeholder.com/400" alt="Smartphone" />
        </div>
        <div className="product-info">
          <h2>Smartphone XYZ</h2>
          <p className="description">The Smartphone XYZ is the latest in technology, offering a sleek design and powerful performance.</p>
          <p className="price">79999 Rs.</p>
          <button className="cta-button">Add to Cart</button>
          <div className="product-details">
            <h3>Features:</h3>
            <ul>
              <li>6.5-inch OLED display</li>
              <li>Triple-lens camera system</li>
              <li>128GB storage</li>
              <li>5G connectivity</li>
            </ul>
            <h3>Specifications:</h3>
            <ul>
              <li>Processor: Octa-core 3.1 GHz</li>
              <li>RAM: 8GB</li>
              <li>Battery: 4500mAh</li>
              <li>OS: Android 11</li>
            </ul>
            <h3>Customer Reviews:</h3>
            <p>"Amazing phone with great features!" - Jane Doe</p>
            <p>"The best smartphone I've ever owned." - John Smith</p>
          </div>
        </div>
      </main>
      <footer className="footer">
        <p>© 2024 PRODUCTHUB</p>
      </footer>
    </div>
  );
};

export default Product;