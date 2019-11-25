#   REDUX
  ## Facts!!!!
  1. it is a state management library
  2. makes complicating app easier
  3. it is not really made for react
  
  ## Redux Cycle
    ```
      Action Creator --> Action --> Dispatch --> Reducers --> State
    ```
  1. Action Creator is a function that returns a TYPE and a PAYLOAD - used to update our state
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

  ## some redux packages
    1. Provider Tag - your main App most be wrapped by the provider tag and you must pass to it a prop called "store"; pass to it
      createStore(reducers); 'reducers' is all your reducers in index.js
    2. createStore - this contains all our reducers and all our application states
    3. connect - a react-redux package - wires up the react side with the redux side. You have to use connect() anywhere you are bridging the two libraries;
        - it is used like a self-calling function
        - ```JAVASCRIPT
            export default connect()(NameOfComponent);
          ```
        - connect must be mapped with 'MapStateToProps(state)' -the name is conventional - in essence, take our state data in our redux store and then pass it as a prop to
          to your react components; the 'state' variable contains all the current states in your redux store.