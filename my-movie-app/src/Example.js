import React, { useState } from "react";
import Autosuggest from "react-autosuggest";
const theme = {
  container: {
    position: "relative",
  },
  input: {
    width: "100%",
    height: "30px",
    padding: "10px 20px",
    fontFamily: "Helvetica, sans-serif",
    fontWeight: 300,
    fontSize: "16px",
    border: "1px solid #aaa",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
  },
  inputFocused: {
    outline: "none",
  },
  inputOpen: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  suggestionsContainer: {
    display: "none",
  },
  suggestionsContainerOpen: {
    display: "block",
    position: "absolute",
    top: "51px",
    width: "100%",
    border: "1px solid #aaa",
    backgroundColor: "#fff",
    fontFamily: "Helvetica, sans-serif",
    fontWeight: 300,
    fontSize: "16px",
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    zIndex: 2,
  },
  suggestionsList: {
    margin: 0,
    padding: 0,
    listStyleType: "none",
  },
  suggestion: {
    cursor: "pointer",
    padding: "10px 20px",
  },
  suggestionHighlighted: {
    backgroundColor: "#ddd",
  },
};

const countries = [
  {
    name: "Afghanistan",
    code: "AF",
  },
  {
    name: "Aland Islands",
    code: "AX",
  },
  // ...
];

const getSuggestions = (value) => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0
    ? []
    : countries.filter(
        (country) =>
          country.name.toLowerCase().slice(0, inputLength) === inputValue
      );
};

const getSuggestionValue = (suggestion) => suggestion.name;

const renderSuggestion = (suggestion) => <div>{suggestion.name}</div>;

const Example = () => {
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const onChange = (event, { newValue }) => {
    setValue(newValue);
  };

  const onSuggestionsFetchRequested = ({ value }) => {
    setSuggestions(getSuggestions(value));
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  return (
    <Autosuggest
      theme={theme}
      suggestions={suggestions}
      onSuggestionsFetchRequested={onSuggestionsFetchRequested}
      onSuggestionsClearRequested={onSuggestionsClearRequested}
      getSuggestionValue={getSuggestionValue}
      renderSuggestion={renderSuggestion}
      inputProps={{
        value,
        onChange: onChange,
      }}
    />
  );
};

export default Example;
