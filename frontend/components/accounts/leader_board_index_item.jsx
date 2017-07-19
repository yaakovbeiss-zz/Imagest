import React from 'react';
import { Link } from 'react-router-dom';

class LeaderBoardIndexItem extends React.Component{
  constructor(props){
    super(props);
  }


  render(){
    return(
      <div>
        <Link to={`/accounts/${this.props.accountId}`} >
          {this.props.username} : {this.props.points}
        </Link>
      </div>
    )
  }
}

export default LeaderBoardIndexItem;
