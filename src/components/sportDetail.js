import React, {Component} from 'react';
import {connect} from 'react-redux';

class SportDetail extends Component{
  render(){
    const {title=null, origin=null} = this.props.sportClicked;
    console.log(this.props.sportClicked.amount)
    if(this.props.sportClicked.amount===undefined)
    {
      return <div><h3>Not Yet Selected</h3></div>
    }
    else {
      return (
        <div className="col-C-C">
          <div className="border">
            {this.props.sportClicked.amount.title}
          </div>
          <div className="border">
            {this.props.sportClicked.amount.origin}
          </div>
        </div>
      )
    }
  }
}
const mapstatetoprops=state=>{
  return{
    sportClicked :state.selectedSport
  }
}
export default connect(mapstatetoprops)(SportDetail);