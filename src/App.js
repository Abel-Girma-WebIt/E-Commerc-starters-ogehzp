import React,{useState} from 'react';
import './style.css';
import Data from './Data';



export default function App() {



let [search, setSearch]=useState("");



  let box =Data.filter((item)=>{

    return(

search.toLowerCase()===""? item: item.name.toLowerCase().includes(search))

  }).map((item) => {
    return (
  
      <div id="item-box" key={item.id}>
        <img src={item.url} alt="" width="300px" height="300px" />
          <h3>{item.name}</h3>
          <h4>Brand: {item.brand}</h4>
          <p>$ {item.price}</p>
          <p><b>{item.description}</b></p>

          <div id="button-div">
          <button>Add to Cart</button>
          <button>Buy Now!</button>
          </div>
      </div>

      
    );
  });



  let footer =function Footer (){

    return(
    
    <div id="footer">
       <p>About Abel Electronic Shopping Center:
    
    Welcome to Abel Electronic Shopping Center, your one-stop destination for the latest and greatest in electronic gadgets and technology. At Abel, we strive to provide an unparalleled shopping experience, bringing you a curated selection of top-quality products from leading brands in the electronics industry.
    
    Our Mission:
    At Abel, we are committed to offering our customers the best in electronic innovation. We aim to create a dynamic and customer-centric shopping environment, where cutting-edge technology meets affordability. Our mission is to be a trusted source for all your electronic needs, ensuring satisfaction through quality products and exceptional service.</p>
      <p>&copy; 2023 Abel Shopping Center. All rights reserved. | Wide Footer Note Here</p>
    
    </div>
    
    )}







  return (
    <div id="main-div">
      <h1>Abel Shoping Center</h1>
      { <h2></h2>}
      <input onChange={((e)=>{setSearch(e.target.value)})} type="text" placeholder="Search your product here..."/>
      <div id="parent">
           {box}


      </div> 

      {footer()}



    </div>
  );
}
