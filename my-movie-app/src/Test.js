import React, { useState } from "react";
import Autosuggest from "react-autosuggest";
export function Test() {
  // const [value,]

  const languages = [
    {
      name: "C",
      year: 1972,
    },
    {
      name: "Elm",
      year: 2012,
    },
    {
      name: "cElm",
      year: 2012,
    },
    {
      name: "Ablm",
      year: 2012,
    },
    {
      name: "vvaElm",
      year: 2012,
    },
  ];
  const [value, setValue] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  function onChange(e, c) {
    // debugger;
    setValue(c.newValue);
  }
  const inputProps = {
    placeholder: "Type a programming language",
    value,
    onChange: onChange,
  };

  function onSuggestionsClearRequested() {
    setSuggestion([]);
  }

  function onSuggestionsFetchRequested(value) {
    setSuggestion(getSuggestions(value.value));
  }

  function getSuggestions(val) {
    // debugger;
    const inputValue = val.trim().toLowerCase();
    const inputLength = inputValue.length;
    const filterValue =
      inputLength === 0
        ? []
        : languages.filter(
            (lang) =>
              lang.name.toLowerCase().slice(0, inputLength) === inputValue
          );

    return filterValue;
  }
  function getSuggestionValue(suggestions) {
    return suggestions.name;
  }
  function renderSuggestion(suggestion) {
    return <div>{suggestion.name}</div>;
  }
  return (
    <Autosuggest
      suggestions={[]}
      inputProps={inputProps}
      getSuggestionValue={getSuggestionValue}
      renderSuggestion={renderSuggestion}
      onSuggestionsFetchRequested={onSuggestionsFetchRequested}
      onSuggestionsClearRequested={onSuggestionsClearRequested}
    />
  );
}
