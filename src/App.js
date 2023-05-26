import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Parent from './parentChildComponent';
import SignUp from './form';
import FilterProducts from './FilterProducts';
import { Routes, Route, useNavigate} from 'react-router-dom'
import Clock2 from './Clock2';
import NotFound from './NotFound';
import { Button, Navbar } from 'react-bootstrap';
import Product from './Product';
import ProductDetails from './ProductDetails';
import KeyPressCounter from './keypressCounter';
import GenerateDay from './generateDayFromDate';
import ClickCounter from './ClickCounter';
import NavBar2 from './NavBar';





// function Counter(){
//   const [count, setCounter] = useState(0)
  
//   function increment(){
//     setCounter(count+1);
//   }

//   function decrement(){
//     setCounter(count-1);
//   }

//   return <>
//   {/* <p>{JSON.stringify(person)}</p>
//   <Button onClick={addProps}>Update State</Button> */}
//   {/* <Button onClick={increment}>Increment</Button>
//   <h2>{count}</h2>
//   {console.log(typeof(count))}
//   <Button onClick={decrement}>Decrement</Button> */}
//   <Parent/>
//   <SignUp/>
// {/* <ClickCounter render={(count, increment)=>{<ClickCounter count={count} increment={increment}/>}}/> */}
//   {/* <Clock2/> */}

// {/* <PersonProvider value={'Ameet'}>
//     <UserProvider value={'Kumar'}>
//           <PersonA/>
//     </UserProvider>
//   </PersonProvider> */}
  
//   </>
// }

function RelatedProducts(){
  return <>
  <h1>Related Products</h1>
  </>
}

function App() {

  const navigate = useNavigate();

  
// setInterval(function(){
//   root.render(<App/>)
// },1000);

function callMe(){
  navigate('*',{state: {name:"Ameet"}})
}

  return (
    <div>
     <Routes>
        <Route path='/' element={<Parent/>} />
        <Route path='/clock' element={<Clock2/>} />
        <Route path='/form' element={<SignUp/>} />

        <Route path='/product' element={<Product/>}>
          <Route index element={<RelatedProducts/>} />
          <Route path='product-details/:pid' element={<ProductDetails/>}/>
          <Route path='filter-products' element={<FilterProducts/>} />
          
        </Route>

        <Route path='*' element={<NotFound/>} />
        
  </Routes>
     {/* <Button onClick={()=>{navigate('/clock')}}>Clock</Button>
     <Button onClick={()=>{navigate('/form')}}>Form</Button>
     <Button onClick={()=>{navigate('/product')}}>Producs</Button>
     <Button onClick={callMe}>On AnyPage</Button> */}

     {/* <KeyPressCounter/> */}
     {/* <GenerateDay/> */}

     {/* <ClickCounter name="Ameet"/>
     <KeyPressCounter/> */}
     <NavBar2/>
     
      
      {/* <h1 className='main'>{new Date().toLocaleTimeString()}</h1>
      <Button2 obj={{name:'Save'}}/>
      <Button2 obj={{name:'Edit'}}/>
      <Button2 obj={{name:'Cancel'}}/>
      <Button2 obj={{name:'Update'}}/>
       */}
      
      {/* <Parent/> */}
      {/* <SignUp/> */}
      {/* <NavBar/> */}

      
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
  
}


export default App;
