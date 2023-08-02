import './App.css';
import Product from './components/Product';

function App() {
  return (
    <div className="App">
      <nav>
        <div className="nav-wrapper">
          <a href="/" className="brand-logo">Sticker Ecommerce</a>
        </div>
      </nav>

      <Product />
      
    </div>
  );
}

export default App;
