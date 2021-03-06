import React, { Component } from 'react';
import {
  FormGroup as div,
  Input,
} from 'reactstrap';

import "./InputWithDropdown.css";
import 'react-virtualized/styles.css';
import { List, AutoSizer } from 'react-virtualized';
import searchList from '../../utils/search/searchList';

const attributes = [
  'subtext',
  'text'
];

class SingleInputWithDropDown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      isDropdownOpen: false,
      hoveredItem: 0,
      chosenValue: '',
    }
    this.onChangeInput = this.onChangeInput.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.onHoverItem = this.onHoverItem.bind(this);
    this.onKeyDownInput = this.onKeyDownInput.bind(this);
    this.onRemoveItemFromList = this.onRemoveItemFromList.bind(this);
    this.onClickItem = this.onClickItem.bind(this);
    this.updateChosenValue = this.updateChosenValue.bind(this);
    this.handleClickOutsideDrop = this.handleClickOutsideDrop.bind(this);
    this.handleSelectOutsideDrop = this.handleSelectOutsideDrop.bind(this);
    this.resetScroll = this.resetScroll.bind(this);
    this.arrayItems = {};
  }

  onChangeInput(event) {
    this.resetScroll();
    this.setState({
      inputValue: event.target.value,
      hoveredItem: 0,
    });
  }

  toggleDropdown(isDropdownOpen = !this.state.isDropdownOpen) {
    this.setState(prevState => ({
      isDropdownOpen,
      inputValue: isDropdownOpen ? '' : prevState.inputValue,
      hoveredItem: isDropdownOpen ? 0 : prevState.hoveredItem,
      chosenValue: isDropdownOpen ? '' : prevState.chosenValue,
    }));
  }

  onHoverItem(index) {
    this.setState({
      hoveredItem: index,
    });
  }

  onKeyDownInput = (filteredList) => (event) => {
    const { hoveredItem } = this.state;
    const lengthList = filteredList.length;
    switch (event.keyCode) {
      case 40:
        this.setState(prevState => {
          if (prevState.hoveredItem === lengthList - 1) { return; }
          this.arrayItems[filteredList[hoveredItem + 1].id]
            .scrollIntoViewIfNeeded(false, { behavior: 'smooth' });
          return {
            hoveredItem: prevState.hoveredItem + 1
          }
        });
        break;
      case 38:
        this.setState(prevState => {
          if (prevState.hoveredItem === 0) { return; }
          this.arrayItems[filteredList[hoveredItem - 1].id]
            .scrollIntoViewIfNeeded(true, { behavior: 'smooth' });
          return {
            hoveredItem: prevState.hoveredItem - 1
          }
        });
        break;
      case 13:
        this.inputDrop.blur();
        this.toggleDropdown(false);
        event.preventDefault();
        this.setState(this.updateChosenValue(filteredList));
        break;
    }
  }

  onRemoveItemFromList(id) {
    this.setState(prevState => {
      const newList = prevState.chosenValue.filter(item =>
        item.id !== id);
      return {
        chosenValue: newList,
        hoveredItem: 0,
      };
    });
  }

  onClickItem = (filteredList) => () => {
    this.toggleDropdown(false);
    this.setState(this.updateChosenValue(filteredList));
  }

  updateChosenValue = (filteredList) => (prevState) => {
    if (prevState.hoveredItem < 0 || prevState.hoveredItem >= filteredList.length) {
      return {
        inputValue: "",
      };
    }
    const newValue = filteredList[prevState.hoveredItem].text;
    const newValueId = filteredList[prevState.hoveredItem].id;

    const renderedInput = this.props.label === 'Status' ?
      newValue : (this.props.label === 'Prioridade' ?
        newValue : (this.props.label === 'Categoria' ?
          newValue : (this.props.label === 'OS pai' ?
            newValue : newValue + " " + `(${newValueId})`)));

    this.props.update(newValue);
    return {
      chosenValue: newValue,
      hoveredItem: 0,
      inputValue: renderedInput,
    };
  };

  componentDidMount() {
    document.addEventListener('mouseup', this.handleClickOutsideDrop);
    document.addEventListener('keyup', this.handleSelectOutsideDrop);
  }

  componentDidMount() {
    document.removeEventListener('mouseup', this.handleClickOutsideDrop);
    document.removeEventListener('keyup', this.handleSelectOutsideDrop);
  }

  handleClickOutsideDrop() {
    if (document.activeElement.id !== 'input-list-' + this.props.id &&
      document.activeElement.id !== 'list-container-' + this.props.id) {
      this.setState({
        isDropdownOpen: false,
      });
    }
  }

  handleSelectOutsideDrop(e) {
    if (e.keyCode === 9 && (document.activeElement.id === 'input-list-' + this.props.id)) {
      this.setState({
        isDropdownOpen: true,
        inputValue: "",
      });
    }
    if (document.activeElement.id !== 'input-list-' + this.props.id &&
      document.activeElement.id !== 'list-container-' + this.props.id) {
      this.setState({
        isDropdownOpen: false,
      });
    }
  }

  resetScroll() {
    if (this.listContainer === null)
      return null
    return this.listContainer.scrollToPosition(0);
  }

  render() {
    const { label, placeholder, listDropdown } = this.props;
    const { inputValue, isDropdownOpen, hoveredItem } = this.state;
    const inputId = 'input-list-' + this.props.id;
    const containerId = 'list-container-' + this.props.id;
    const filteredList = searchList(listDropdown, attributes, inputValue);

    const hasSubtext = !(filteredList.every((item) => item.subtext === ""))

    const boxHeight = hasSubtext === true ? (filteredList.length >= 4 ? 180 : filteredList.length * 55 + 25) :
      (filteredList.length >= 4 ? 130 : filteredList.length * 20 + 30);

    const itemHeight = hasSubtext === true ? 52 : 25;

    return (
      <div className={'dropdown-container'}>
        <Input
          type="text"
          autoComplete="off"
          id={inputId}
          value={this.state.chosenValue}
          placeholder={placeholder}
          onChange={this.onChangeInput}
          onMouseDown={() => this.toggleDropdown(true)}
          // onFocus={() => this.toggleDropdown(true)}
          // onBlur={() => this.toggleDropdown(false)}
          onKeyDown={this.onKeyDownInput(filteredList)}
          innerRef={(el) => { this.inputDrop = el; }}
          required={this.props.required}
        />
        {isDropdownOpen && (
          <AutoSizer>
            {({ width }) => (
              <List
                className={"dropdown-input"}
                id={containerId}
                ref={(el) => { this.listContainer = el }}
                width={width}
                height={boxHeight}
                rowHeight={itemHeight}
                rowRenderer={({ index, key, style }) => {
                  return (
                    <div
                      key={key}
                      style={style}
                      onMouseOver={() => this.onHoverItem(index)}
                      onMouseDown={this.onClickItem(filteredList)}
                      onMouseUp={document.getElementById(inputId).focus()}
                      className={filteredList[hoveredItem].id === filteredList[index].id ? 'active' : ''}
                      ref={(el) => this.arrayItems[filteredList[index].id] = el}
                    >
                      {filteredList[index].text}
                      {hasSubtext && <div className="small text-muted">{filteredList[index].subtext}</div>}
                    </div>
                  )
                }}
                rowCount={filteredList.length}
                overscanRowCount={15}
              />
            )}
          </AutoSizer>
        )}
      </div>
    );
  }
}

export default SingleInputWithDropDown;