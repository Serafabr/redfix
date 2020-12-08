import React, { Component } from 'react';
import "./Search.css";

import {
  InputGroup,
  Input,
  InputGroupAddon,
  InputGroupText
} from 'reactstrap';

class SearchInput extends Component {
  render() {
    const { searchTerm, searchImage, handleChangeSearchTerm } = this.props;
    return (
      <div className="search" style={{ width: "30%" }}>
        <div className="card-search-form">
          <InputGroup>
            <Input
              placeholder="Buscar ..."
              value={searchTerm}
              onChange={handleChangeSearchTerm}
              className="search-form__input"
            />
            <InputGroupAddon
              addonType="append"
              className="search-form__search-image"
            >
              <InputGroupText><img src={searchImage} alt="" style={{ width: "19px", height: "16px", margin: "3px 0px" }} /></InputGroupText>
            </InputGroupAddon>
          </InputGroup>
        </div>
      </div>
    );
  }
}

export default SearchInput;