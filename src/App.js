import React, { useEffect, useState } from 'react';
//import logo from './logo.svg';
import './App.css';

function App() {
  const nayok = ['Anwer','Salman Khan','Jashim','Alomgir','Bappa Raz'];
  const products = [
    {name:"Illastator", price:"$90.99"},
    {name:"Photo Shop", price: "$999.99"},
    {name:"PDF Reader", price: "$6.99"},
    {name:"Soiabin Tel", price:"$10.99"}
  ]
  return (
    <div className="App">
      <header className="App-header">
        <p>
          I am a react Person.
        </p>
        <Counter></Counter>

        <User></User>
        <ul>
          {
            nayok.map(nay => <li>{nay}</li>)
          }
          {
            products.map(product => <li>{product.name}</li>)
          }
        </ul>
        {
          products.map(pd => <Product pro = {pd}></Product>)
        }
        <Person name= {nayok[0]} heroin="kobori"></Person>
        <Person name="Jashim" heroin="Shabana"></Person>
        <Person name = {products[0].name} price={products[0].price} ></Person> 
        <Person></Person>

      </header>
      
    </div>
  );
}

function User(){
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => {
      setUser(data);
    })
  },[])
  const [user, setUser] = useState([]);

  return (
    <div>
      <h3>Dynamic User:{user.length}</h3>
      <ul>
        {
          user.map(u => <li>{u.name}</li>)
        }
      </ul>
    </div>
  )
}


function Counter(){
  const[count, setCount] = useState(10);
  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick = {()=>setCount(count + 1)}>Increase</button>
    </div>
  )
}


function Product(props){
  const productStyle = {
    border:"2px solid green",
    backgroundColor:"powderBlue",
    height:"250px",
    width: "300px",
    borderRadius:"5px",
    margin:"5px"
  }
  const {name,price} = props.pro;
  return (
    <div style={productStyle}>
      <h2>Name:{name}</h2>
      <h4>Price:{price}</h4>
      <button>Buy Now</button>
    </div>
  )
}




function Person(props){
  return(
    <div style={{border:"2px solid red",margin:"10px"}}>
      <h1>Nayok:{props.name}</h1>
      <h3>Nayika:{props.heroin}</h3>
    </div>
  )
}

export default App;
