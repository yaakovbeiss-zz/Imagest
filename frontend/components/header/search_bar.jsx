import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import GreetingContainer from './greeting_container';
import { fetchSearch, hideSearchBar, revealSearchBar } from '../../actions/search_actions';

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

  toggleSearchBar(){
    this.props.hiddenSearchBar ? this.props.revealSearchBar() : this.props.hideSearchBar();
  }

  searchBar(){
    return this.props.hiddenSearchBar ? <div className="hidden-div"></div> :
    <div id="search-icon-menu" className="">
      <form onSubmit={this.toggleSearchBar}>
        <input type="text" autoFocus="autoFocus" onChange={this.handleChange('searchResults')} className="search-bar"></input>
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

const mapStateToProps = ({ search }) => {
  return {
    hiddenSearchBar: search.hideSearchBar
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchSearch: (search) => dispatch(fetchSearch(search)),
    hideSearchBar: (e) => dispatch(hideSearchBar(e)),
    revealSearchBar: (e) => dispatch(revealSearchBar(e))
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar));
