import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectSports} from '../actions';
class SportList extends Component{
  renderSports(){
    const {Container, ButtonContainer} = styles;
    return(
      this.props.sports.map(sport=>{
        return(
          <div style={Container} key={sport.title} className="border">
            <div className="margin20">{sport.title}</div>
            <button 
            style={ButtonContainer}
            onClick={()=>this.props.selectSports(sport)}
            >
              Select</button>
          </div>
        )
      })
    );
  }
  render(){
    return (
      <div>
          {this.renderSports()}
      </div>
    )
  }
}
const mapStateToProps = state =>{
  return {sports:state.sports};
}
const styles = {
  Container:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'center'
  },
  ButtonContainer:{
    marginLeft:'20px',
    alignSelf: 'center',
    backgroundColor: 'cyan',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'cyan',
    cursor:'pointer'
  }
}

export default connect(mapStateToProps,{selectSports})(SportList);