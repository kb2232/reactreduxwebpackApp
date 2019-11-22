// action creators

export const selectSports = sports =>{
  return{
    type:'SELECT_SPORT',
    payload:{
      amount:sports
    }
  }
}