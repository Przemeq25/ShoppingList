import React from 'react';
import './App.css';
import ProductForm from './components/ProductForm';
import ProductsContainer from './components/ProductsContainer';


 
function App() {
  return (
    <div className="grid-container">
      <ProductForm/>
      <ProductsContainer/>
    </div>
    
  );
}


export default App;
