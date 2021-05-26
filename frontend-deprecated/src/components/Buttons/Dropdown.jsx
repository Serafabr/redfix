import React, { Component } from "react";
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu
} from "reactstrap";

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle = () => {
    const newState = !this.state.dropdownOpen;
    this.setState({
      dropdownOpen: newState
    });
  };

  render() {
    const { selectedItem, dropdownItems, changeItem } = this.props;

    return (
      <ButtonDropdown
        isOpen={this.state.dropdownOpen}
        toggle={() => {
          this.toggle();
        }}
      >
        <DropdownToggle caret size="sm">
          {selectedItem}
        </DropdownToggle>
        <DropdownMenu className="dropdown-menu">
          {Object.keys(dropdownItems).map(itemID => (
            <DropdownItem onClick={() => changeItem(itemID)}>
              {dropdownItems[itemID]}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </ButtonDropdown>
    );
  }
}

export default Dropdown;
