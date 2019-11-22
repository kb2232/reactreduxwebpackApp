#   REDUX
  ## Facts!!!!
  1. it is a state management library
  2. makes complicating app easier
  3. it is not really made for react
  
  ## Redux Cycle
    ```
      Action Creator --> Action --> Dispatch --> Reducers --> State
    ```
  1. Action Creator is a function that returns a TYPE and a PAYLOAD
  ```JAVASCRIPT
  const makeDeposit = amount =>{
    return{
      type:'MAKE_DEPOSIT',
      payload:{
        amount:amount
      }
    }
  }
  // in this case, the ACTION is 'MAKE_DEPOSIT'
  ```
  2. Dispatch is part of redux library and used to deliver the action and action creator to your states.
  3. REDUCER is a function that takes two parameters - current state AND action - it checks if the 
     action type matches correctly and then returns the current state OR and updated state.
  ```JAVASCRIPT
  const checkDeposit = (curState=[], action)=>{
    if(action.type==='MAKE_DEPOSIT')
      return [...curState, action.payload];
    else return curState;
  }
  ```
  ## project structure
  ```
  .babelrc
  index.html
  package.json
  server.js
  webpack.config.js
  src/
    -actions/
      -index.js
    -components/
      -App.js
    -reducers/
      -index.js
    -index.js
    -index.css
  ```