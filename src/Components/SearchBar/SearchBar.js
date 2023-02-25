import React from "react";
import { BsSearch } from "react-icons/bs";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
const SearchBar = ({ placeholder, handleSearch }) => {
  return (
    <InputGroup>
      <InputGroup.Text id="basic-addon1">
        <BsSearch />
      </InputGroup.Text>
      <Form.Control
        type="search"
        placeholder={placeholder}
        onChange={(e) => handleSearch(e)}
        aria-label="Search"
      />
    </InputGroup>
  );
};

export default SearchBar;
