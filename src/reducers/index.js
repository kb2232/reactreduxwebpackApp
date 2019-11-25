import { combineReducers } from 'redux';

// reducers

//general reducer
const topSports = ()=>{
  return[
    {
      title:'NBA',
      origin:'U.S.'
    },
    {
      title:'BASEBALL',
      origin:'U.S.'
    },
    {
      title:'HOCKEY',
      origin:'U.S.'
    },
    {
      title:'GOLF',
      origin:'U.S.'
    },
    {
      title:'American FOOTBALL',
      origin:'U.S.'
    },
    {
      title:'FOOTBALL',
      origin:'EVERYWHERE except U.S.'
    },
    {
      title:'RUGBY',
      origin:'U.K.'
    },
    {
      title:'NETBALL',
      origin:'U.K.'
    },
    {
      title:'CRICKET',
      origin:'INDIA'
    }
  ]
}
// selected sport
const selectedSport=(sportSelected=[], action)=>{
  if(action.type==='SELECT_SPORT')
      return action.payload;
  else return sportSelected;
}

export default combineReducers({
  sports: topSports,
  selectedSport: selectedSport
})