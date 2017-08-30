import * as React from "react";
import { connect } from "react-redux";
import SearchBar from "../components/SearchBar";
import { startSearch } from "../dataFlow/actions/searchActions";

class App extends React.Component {
  state = {
    text: "",
  }

  textChange = (text) => {
    if (text !== this.state.text)
      this.setState({text});
  }

  render() {
    return <div>
        <SearchBar text={this.state.text} onEnter={this.props.search} onTextChange={this.textChange}/>
        {this.props.searching && <div>Searching...</div>}
        {this.props.results && this.props.results.map(r => <div>{r.text}</div>)}
        {this.props.error && <div>An error occurred</div>}
      </div>;
  }
}

const mapState = (state) => ({
  searching: state.searchState.searching,
  results: state.searchState.results,
  error: state.searchState.error,
});

const mapDispatch = (dispatch) => ({
  search: startSearch(dispatch),
});

export default connect(mapState, mapDispatch)(App);