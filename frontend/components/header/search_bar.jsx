import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import GreetingContainer from './greeting_container';
import { fetchSearch } from '../../actions/search_actions';

class SearchBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      searchResults: '',
      hideSearchBar: true,
    }
     this.handleChange = this.handleChange.bind(this);
     this.toggleSearchBar = this.toggleSearchBar.bind(this);
  }

  handleChange() {
    return e => {
      this.setState({['searchResults']: e.currentTarget.value})
      this.props.fetchSearch(e.currentTarget.value)
    }
  }
  componentWillReceiveProps(){
    this.setState({['searchResults']: ''});
  }
  componentDidUpdate(nextProps){
    if(this.state.searchResults !== '') {
      if (this.props.history.location.pathname !== '/'){
        this.props.history.push('/');
      }
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

  toggleSearchBar(){
    this.setState({ hideSearchBar: !this.state.hideSearchBar })
  }

  searchBar(){
    return this.state.hideSearchBar ? <div className="hidden-div"></div> :
    <div id="search-icon-menu" className="">
      <form onSubmit={this.toggleSearchBar}>
        <input type="text" onChange={this.handleChange('searchResults')} className="search-bar"></input>
        <div className="search-bar search-bar-addition">SEARCH SYNTAX</div>
      </form>
    </div>
  }

  render(){
    return (
        <div>
          <div className="right-nav">
            {this.searchBar()}

          <div className="search-icon-container" >
            <div className="icon-container">
              <img className="search-icon" id="search-icon" onClick={this.toggleSearchBar} src={window.images.search_icon}/>
            </div>
              <GreetingContainer />
          </div>
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

export default withRouter(connect(
  null,
  mapDispatchToProps
)(SearchBar));
