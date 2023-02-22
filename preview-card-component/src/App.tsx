import image from './assets/image-product-desktop.jpg';
import cart from './assets/icon-cart.svg';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="left-content">
        <img src={image} alt="product" />
      </div>
      <div className="right-content">
        <h3 className="subtitle">perfume</h3>
        <h1 className="title">Gabrielle Essence Eau De Parfum</h1>
        <p className="description">
          A floral, solar and voluptuous interpretation composed by Olivier
          Polge, Perfumer-Creator for the House of CHANEL
        </p>
        <div className="price">
          $149.99 <span>$169.99</span>
        </div>
        <button className="btn">
          <img src={cart} alt="cart" /> Add to Cart
        </button>
      </div>
    </div>
  );
}

export default App;
