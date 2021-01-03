import React from 'react';
// import the selector to use some state in store
import {useSelector, useDispatch} from 'react-redux';
import { increment, decrement } from './actions';



function App() {
  // save the state that we want to use into counter variable
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      {isLogged ? <h3>Valiable information I can't see</h3>
      : null}
      
    </div>
  );
}

export default App;
