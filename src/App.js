import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  var info = {
    name:"Md Abdul kadir Tayef",
    deg:"BSc in Computer Science",
}


function Person(){
  return (
    <div style={{padding:'5px',margin:'5px',background:'yellow',color:'red',borderRadius:'8px'}}> 
    <h5>Mr. XYZ</h5>
    <p>Loves to program all the time he has</p>
    </div>
    
  )
}

function Person2(){
  const design ={
    border:'2px solid yellow',
    borderRadius: '7px',
    padding:'5px',
    margin:'5px',
    backgroundColor:'Green',
    color:'white'
  }

  return(
    <div style={design}>
      <h2>Metropolitan University</h2>
      <p>Education is not just a degree</p>
    </div>
  )
}

const name = ['Aporajita Prapti','Nahidul Islam','Aiman Ahmed Chowdhury'];
const id = ['172-115-035','172-115-023','172-115-014'];

function Person3(props){
  const design2 = {
    padding:'5px',
    margin:'5px',
    borderRadius:'7px',
    backgroundColor:'black',
    color:'white',
    border:'2px solid green'
  }

  return(
    <div style={design2}>
      <h4>Name: {props.name}</h4> 
      <p>ID: {props.id}</p> 

    </div> 
  )
}

function Person4(props){


  const design3 ={
    padding:'5px',
    margin:'5px',
    borderRadius:'7px',
    backgroundColor:'cyan',
    color:'black',
    border:'2px solid green'

  };

  return(
    <div style={design3}>
      <h4>Name: {props.name}</h4>
      <p>ID: {props.id}</p>

    </div>
  )
}

const products =[
  {name:'PDF Reader',price:'$70',exp:'000'},
  {name:'Video Downloader',price:'$90',exp:'111'},
  {name:'Photoshop',price:'$110',exp:'222'}
]
function Product(props){
  const design4 = {
    padding:'5px',
    margin:'5px',
    borderRadius:'7px',
    backgroundColor:'white',
    color:'black',
    boxShadow:'5px 5px 10px white',
    float:'left',
    height:'200px',
    width:'200px'
  }

  const {name,price}= props.product

  return(
    <div style={design4}>

      {/* <h4>{props.name}</h4>
      <p>{props.price}</p>
      <button style={{padding:'2px', margin:'2px',background:'black',color:'white',borderRadius:'6px'}}>Buy Now</button> */}
      
      {/* <h4>{props.product.name}</h4>
      <p>{props.product.price}</p>
      <button style={{padding:'2px', margin:'2px',background:'black',color:'white',borderRadius:'6px'}}>Buy Now</button> */}

      <h4>{name}</h4>
      <p>{price}</p>
      <button style={{padding:'2px', margin:'2px',background:'black',color:'white',borderRadius:'6px'}}>Buy Now</button>

    </div>

  )
}

// React STATE  declaration...........

function Count(){

  const [count,setCount] = useState(10);
  const handleIncrease = () => {
    const newCount = count + 1 ;
    setCount(newCount);
  }

  return(
    <div>
      <h2>Count: {count} </h2>
      <button onClick={() => setCount(count -1)} style={{margin:'5px',padding:'5px',borderRadius:'9px'}}>Decrease</button>
      <button onClick={handleIncrease} style={{margin:'5px', padding:'5px',borderRadius:'9px'}}>Increase</button>
    </div>
  )
}

// Data Load from Server

function Users(){
  const [users,setUsers] = useState([]);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  },[])

  return(
    <div>
      <h4>Dynamic Users: </h4>
     <ul>
       {
         users.map(user => <li>{`${user.name}: ${user.email}`}</li>)
       }
     </ul>
    </div>
  )
}

const stdInfo =[
  {name:'Tayef', id:'172-115-030'},
  {name:'Nayeem',id:'172-115-023'},
  {name:'Nahid',id:'172-115-024'},
  {name:'Rafid',id:'171-115-117'},
  {name:'Faiza',id:'171-115-108'}
]


var style ={
  color:'green',
}
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello React <code>src/App.js</code> and save to reload.
        </p>


         <h4>This is Tayef The React Developer</h4>
        <p style={{backgroundColor:'yellow' , color:'blue'}}> Happy Learning  React</p>

        
        <p>{info.name}</p>
        <p style ={style}>{info.deg}</p>

        <Count></Count>

        <Person></Person>
        <Person></Person>
        <Person></Person>
        <Person2></Person2>


        <Person3 name="Md Abdul Kadir" id="172-115-030"></Person3>
        <Person3 name="Nayeemul Islam" id="172-115-024"></Person3>
        <Person3 name="Faiza Chowdhury" id="171-115-108"></Person3>


        <Person4 name={name[0]} id={id[0]}></Person4>
        <Person4 name={name[1]} id={id[1]}></Person4>
        <Person4 name={name[2]} id={id[2]}></Person4>


        {/* <Product name={products[0].name} price={products[0].price}></Product>
        <Product name={products[1].name} price={products[1].price}></Product>
        <Product name={products[2].name} price={products[2].price}></Product> */}

        <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Product product={products[2]}></Product>

        {
          products.map(pd => <Product product={pd}></Product>)
        }

        <ul>
          { 
              stdInfo.map(list => <li>{`${list.name} : ${list.id}`}</li>)

          }
        </ul>

        <Users></Users>
 
      </header>
    </div>
  );
}

export default App;
