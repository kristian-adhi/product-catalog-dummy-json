import './App.css';
import Header from './template/header/Header';
import Product from './content/product/js/Product';

function App() {
  var html = <div>
                <Header/> 
                <Product/> 
            </div>;

  return html;
}

export default App;
