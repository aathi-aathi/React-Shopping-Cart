
import { useState } from 'react'
import data from './data.json';
import './App.css'

function App() {
    const [products]=useState(data)
    const [count,setcount]=useState(0)
  return (
  <><Header count={count}/>
  <div className='All-card'>
    {products.map(((val,idx)=>(
   <Cards model={val} setcount={setcount} count={count} key={idx}/>
  )))}</div>
 </>
  )
}
// This header function shows the title and the cart counter that manage the cart items
function Header({count}){
    return(
      <div className='header'><h1>MyCart</h1>
      <div className='cart-counter'><img className='cart-img' src="https://cdn-icons-png.flaticon.com/128/4290/4290722.png"></img>
      <h3>Cart:</h3>
      <div className='counter'>{count}</div>
      </div>
      </div>
       )
}
// The props are passed by App compents
function Cards({model,setcount,count}){
  const [show,setshow]=useState(true)
  // the add() function is used to add the item to cart
   function add(){
      setshow(!show);
      setcount(count+1);
   }
   // The remove() function is used to remove the item from the cart
   function remove(){
      setshow(!show);
      setcount(count-1);
   }
   return(
      <>
      <div className='card' >
         <img src={model.img} className='card-img'></img>
         <h2>{model.name}</h2>
         <p>{model.description}</p>
         <h3>₹{model.price}</h3>
         {show ? <button className='add-btn' onClick={add}>Add to Cart</button> :
          <button className='remove-btn' onClick={remove}>Remove from Cart</button>}
        </div>
      </>
   )
}
export default App