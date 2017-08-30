import * as React from "react";

const onKeyPress = (func) => (e) => e.charCode === 13 && func();

const SearchBar = ({onEnter, onTextChange, text}) =>
  <div className="SearchBar" onKeyPress={(e) => { if (e.charCode === 13) onEnter(text);} }>
    <input value={text} onChange={e => onTextChange(e.target.value)}/>
  </div>;

export default SearchBar;  