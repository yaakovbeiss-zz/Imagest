import React from 'react';
import LeaderBoardIndexItem from './leader_board_index_item';

class LeaderBoardIndex extends React.Component {
  constructor(props){
    super(props);
  }


  render(){
    let accounts = this.props.accounts;
    if (accounts.length > 0){
      return (
        <div>
          <span className="leader-board-title">
            Leaders
          </span>
          <div>
            {accounts.map( (account) => <LeaderBoardIndexItem key={account.id} username={account.username}
            points={account.points} accountId={account.id} /> )}
          </div>
        </div>
      )
    } else { return null }
  }

}

export default LeaderBoardIndex;
