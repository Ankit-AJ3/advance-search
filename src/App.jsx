import { useState } from 'react';
import Nav from './Navigation/Nav';
import Products from './Products/Products';
import Recommended from './Recommended/Recommended';
import Sidebar from './Sidebar/Sidebar';
import "./index.css";
import products from "./db/data";

function App() {

  const [selectedCategory, setSelectedCategory] = useState(null);

  //--------Input Filter --------
  const [query, setQuery] = useState("");

  const handleInputChange = event => {
    setQuery(event.target.value);
  }

  const filterItems = products.filter(product =>
    product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()!== -1) 
  );

    //--------Radio Filter --------
    const handleChange =event => {
      setSelectedCategory(event.target.value);
    }

    //--------Button  Filter --------

    const handleClick = event => {
      setSelectedCategory(event.target.value);
    }

    function filteredData(products, selected, query){
      let filteredProducts = products

    //--------Filtering Input Items --------
    if(query){
      filteredProducts = filteredItems
    }

    //-------- Selected Filter --------
    if(selected){
      filteredProducts = filteredProducts.filter({category, color, company, newPrice, title})=>
      products.category === selected ? filteredProducts
    }

  }

  return (
    <>
      <Sidebar/>
      <Nav/>
      <Recommended/>
      <Products/>
    </>
  )
}

export default App
