import React from 'react';
import { connect } from 'react-redux';
import GreetingContainer from './greeting_container';
import { fetchSearch } from '../../actions/search_actions';

class SearchBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      searchResults: ''
    }
     this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
  return e => {
    this.setState({['search']: e.currentTarget.value})
    this.props.fetchSearch(e.currentTarget.value)
  }
}

  toggleDrop(e) {
    let id = e.currentTarget.id;
    let dropdown = document.getElementById(`${id}-menu`);
    if (dropdown.className === `hidden`){
      dropdown.className = ``;
    } else {
      dropdown.className = `hidden`;
    }
  }

  render(){
    return (
      <div className="right-nav">
        <div id="search-icon-menu" className="hidden">
          <input type="text" onChange={this.handleChange('searchResults')} className="search-bar"></input>
          <div className="search-bar search-bar-addition">SEARCH SYNTAX</div>
          </div>
        <div className="search-icon-container" >
          <div className="icon-container">
            <img className="search-icon" id="search-icon" onClick={this.toggleDrop} src={window.images.search_icon}/>
          </div>
            <GreetingContainer />
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchSearch: (search) => dispatch(fetchSearch(search))
  }
}

export default connect(
  null,
  mapDispatchToProps
)(SearchBar);
