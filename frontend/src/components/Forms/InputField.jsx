import React, { Component } from 'react';
import SingleInputWithDropDown from './SingleInputWithDropdown';
import InputWithDropdown from './InputWithDropdown';
import './Form.css';
import {
  FormGroup,
  Label,
  Input
} from 'reactstrap';

function InputElement({
  id,
  placeholder,
  value,
  handleInputChange,
  listDropdown
}) {
  return ({
    text: (
      <Input
        name={id}
        id={id}
        type="text"
        className={"input-box"}
        value={value}
        placeholder={placeholder}
        onChange={handleInputChange}
      />
    ),
    textArea: (
      <Input
        name={id}
        id={id}
        type="textarea"
        className={"input-box"}
        rows="5"
        value={value}
        placeholder={placeholder}
        onChange={handleInputChange}
      />
    ),
    oneDropdown: (
      <SingleInputWithDropDown
        name={id}
        id={id}
        value={value}
        placeholder={placeholder}
        listDropdown={listDropdown}
        update={handleInputChange}
      />
    ),
    multDropdown: (
      <InputWithDropdown
        name={id}
        id={id}
        value={value}
        placeholder={placeholder}
        listDropdown={listDropdown}
        update={handleInputChange}
      />
    ),
    date: (
      <Input
        name={id}
        id={id}
        type="date"
        value={value}
        placeholder={placeholder}
        onChange={handleInputChange}
      />
    ),
  });
}

class InputField extends Component {
  render() {
    const { title, type = "text" } = this.props;
    return (
      <FormGroup>
        <Label className={"input-label"} for="exampleEmail">{title}</Label>
        <input type="text" autoComplete="off" style={{ display: "none" }}></input>
        {InputElement(this.props)[type]}
      </FormGroup>
    );
  }
}

export default InputField;