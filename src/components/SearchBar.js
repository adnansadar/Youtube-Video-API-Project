import React, { Component } from "react";

export class SearchBar extends Component {
  state = { term: "batman" };
  onInputChange = (e) => {
    this.setState({ term: e.target.value });
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onTermSubmit(this.state.term);
  };

  render() {
    return (
      <div className="search-bar ui segment inverted">
        <form className="ui form inverted" onSubmit={this.onFormSubmit}>
          <div className="field inverted">
            <label>Video Search</label>
            <input
              onChange={this.onInputChange}
              value={this.state.term}
              type="text"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
