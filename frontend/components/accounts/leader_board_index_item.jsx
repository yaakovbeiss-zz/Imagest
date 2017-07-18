import React from 'react';

class LeaderBoardIndexItem extends React.Component{
  constructor(props){
    super(props);
  }


  render(){
    return(
      <div>
        {this.props.username} : {this.props.points}
      </div>
    )
  }
}

export default LeaderBoardIndexItem;
