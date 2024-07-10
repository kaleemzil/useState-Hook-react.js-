// react Hook = Special Function that allows  functional componenets  to use react features without writing 
//              class component (React v16.8)
//              (useState , useEffect , useContext , useReducer , useCallback and many more)

// useState() = a React Hook that allows the statefull variable AND a setter function to update its value 
//              in the Virtual DOM
//              [ name , setName]

import Component from "./my-Component.jsx";
import Counter from './Counter.jsx';

function App() {
  

  return (
    <>
      <Component/>
      <Counter/>
    </>
  )
}

export default App
