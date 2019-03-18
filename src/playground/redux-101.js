import { createStore } from 'redux';


const incrementCount = ({ incrementBy = 1} = {}) => ({
  type: 'INCREMENT',
  incrementBy
})

const decrementCount = ({ decrementBy = 1} = {}) => ({
  type: 'DECREMENT',
  decrementBy
})

const setCount = ({ setCount = 1} = {}) => ({
  type: 'SET',
  setCount
})

const resetCount = () => ({
  type: 'RESET'
})

// Reducers
// 1. Reducers are pure functions
// 2. Never change state or action

let result;
const add = (a,b) => {
  result = a + b
}

console.log(add(6));

const countReducer = (state = { count: 0}, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      };
      break;
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
      };
      break;
    case 'RESET':
      return {
        count: 0
      };
    case 'SET':
      return {
        count: action.setCount
      };
      break;
    default:
      return state;
  }
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
})

// Actions - object that gets sent to the store

// walk, stop, walking, sit, work, stop_working

// Increment the count

store.dispatch(incrementCount({ incrementBy: 5}));

store.dispatch(incrementCount());

store.dispatch(decrementCount())

store.dispatch(decrementCount({ decrementBy: 10 }))
store.dispatch(setCount({ setCount: 200 }))
store.dispatch(resetCount());


// // Reset the count
// store.dispatch({
//   type: 'RESET'
// });
//
// store.dispatch({
//   type: 'SET',
//   count: 101
// })
