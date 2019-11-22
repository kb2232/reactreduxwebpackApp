import React from 'react';

import SportList from './sportList';

class App extends React.Component{
  constructor(){
    super();
  }

  render(){
    return(
      <div className="component">
        <SportList />
      </div>
    )
  }

}
export default App;