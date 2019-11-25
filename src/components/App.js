import React from 'react';

import SportList from './sportList';
import SelectedSport from './sportDetail';

class App extends React.Component{
  constructor(){
    super();
  }

  render(){
    return(
      <div className="component">
        <SportList />
        <SelectedSport />
      </div>
    )
  }

}
export default App;