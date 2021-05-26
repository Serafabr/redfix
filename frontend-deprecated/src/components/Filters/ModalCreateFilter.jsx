import React, { Component } from "react";
import {
  Row,
  Col,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
  CustomInput
} from "reactstrap";
import SingleInputWithDropdown from "../Forms/SingleInputWithDropdown";

import "./ModalCreateFilter.css";

const condicionalOperator = {
  and: 'Condicional E',
  or: 'Condicional OU'
};

const filterOperations = {
  option: {
    sameChoice: { description: 'igual a', optionsType: 'selectMany' },
    differentChoice: { description: 'diferente de', optionsType: 'selectMany' },
    notNull: { description: 'não nulo', optionsType: 'nothing' },
    null: { description: 'nulo', optionsType: 'nothing' }
  },
  text: {
    include: { description: 'contém', optionsType: 'text' },
    notInclude: { description: 'não contém', optionsType: 'text' },
    notNull: { description: 'não nulo', optionsType: 'nothing' },
    null: { description: 'nulo', optionsType: 'nothing' }
  },
  number: {
    equalTo: { description: 'igual a', optionsType: 'number' },
    greaterThan: { description: 'maior que', optionsType: 'number' },
    lowerThan: { description: 'menor que', optionsType: 'number' },
    different: { description: 'diferente de', optionsType: 'number' },
    // between: { description: 'entre', optionsType: 'twoNumbers' },
  },
};

const filterResultUI = (filterLogic, attributes, operators) => {
  const resultUI = [];
  const termUIOperators = {
    selectMany: 'ou',
    text: 'e',
    twoNumbers: 'e',
  };
  filterLogic.forEach(logic => {
    const { type, attribute, verb, term } = logic;
    if (type === 'att') {
      const attUI = attributes[attribute].name;
      const attType = attributes[attribute].type;
      const verbUI = operators[attType][verb].description;
      const termOptionsType = operators[attType][verb].optionsType;
      const termUIOperator = termUIOperators[termOptionsType];
      let termUI = "";
      if (termOptionsType !== 'nothing') {
        termUI = '"' + term.reduce((acc, next) => (acc + '" ' + termUIOperator + ' "' + next.toString())).toUpperCase() + '"';
      }
      resultUI.push(
        <div className="result-box">
          {attUI + ' ' + verbUI + ' ' + termUI}
        </div>
      );
    }
    else if (type === 'opr') {
      const oprUI = attribute === 'and' ? 'E' : (attribute === 'or' ? 'OU' : '');
      resultUI.push(
        <div className="logic-box">
          {oprUI}
        </div>
      )
    }
  });

  return resultUI;
}

const inputBasedOnOperator = ({ inputBasedOnOperator, option }, handleChangeOption, handleChangeSelectOptions, options) => ({
  selectMany: (
    <Input
      type="select"
      name="filterInput"
      id="filterInput"
      multiple
      onChange={handleChangeSelectOptions}
    >
      {options && Object.keys(options).map(key => {
        return (
          <option value={key}>{options[key]}</option>
        );
      }
      )}
    </Input>
  ),
  nothing: null,
  text: (
    <Input
      type="text"
      name="filterInput"
      id="filterInput"
      value={option}
      onChange={handleChangeOption}
    />
  ),
  number: (
    <Input
      type="text"
      name="filterInput"
      id="filterInput"
      value={option}
      onChange={handleChangeOption}
    />
  ),
  // twoNumbers: (
  //   <div
  //     style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
  //   >
  //     <Input
  //       type="text"
  //       name="filterInput"
  //       id="filterInput"
  //       style={{ marginBottom: "5px" }}
  //     />
  //     <span>E</span>
  //     <Input
  //       type="text"
  //       name="filterInput"
  //       id="filterInput"
  //       style={{ marginTop: "5px" }}
  //     />
  //   </div>
  // ),
}[inputBasedOnOperator]);

class ModalCreateFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterName: '',
      attribute: null,
      operator: null,
      option: null,
      inputBasedOnOperator: 'nothing',
      currentFilterLogic: [],
    };
  }

  handleChangeOption = (event) => {
    const { value } = event.target;
    this.setState({
      option: value,
    });
  }

  handleChangeSelectOptions = (event) => {
    const { options } = event.target;
    let selectedOptions = []
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) { selectedOptions.push(options[i].value) }
    }
    this.setState({
      option: selectedOptions,
    });
  }

  handleAttributeSelectClick = (event) => {
    this.setState(
      {
        attribute: event.target.value,
        operator: null,
        inputBasedOnOperator: 'nothing',
        option: null,
      }
    );
  }

  handleInputSelectClick = (type) => (event) => {
    this.setState({
      operator: event.target.value,
      inputBasedOnOperator: filterOperations[type][event.target.value].optionsType,
    });
  }

  cleanState = () => {
    this.setState({
      attribute: null,
      operator: null,
      option: null,
      inputBasedOnOperator: 'nothing',
    });
  }

  cleanFilter = () => {
    this.setState({
      filterName: '',
      currentFilterLogic: [],
    });
  }

  buildFilter = (attributes) => () => {
    const { attribute, operator, option } = this.state;

    let term = [];

    if (!attribute || attribute === '') {
      return;
    }
    if ((!operator || operator === '') && !condicionalOperator[attribute]) {
      return;
    }

    if (attribute !== 'and' && attribute !== 'or') {
      const { type } = attributes[attribute];
      const { optionsType } = filterOperations[type][operator];

      if (optionsType !== 'nothing' && (!option || option === '' || option === [])) {
        return;
      }

      if (optionsType !== 'nothing' && attributes[attribute].type === 'text') {
        option.trim().split(" ").forEach(element => {
          if (element.length > 0) term.push(element);
        });
      } else if (optionsType !== 'nothing' && attributes[attribute].type === 'option') {
        term.push(...option);
      } else {
        term.push(option);
      }
    }

    const newLogic = {
      type: (attribute === 'and' || attribute === 'or' ? 'opr' : 'att'),
      attribute,
      verb: operator,
      term,
    };

    this.setState((prevState) => ({
      currentFilterLogic: [...prevState.currentFilterLogic, newLogic],
    }), () => { this.cleanState() });
  }

  fixFilterAndUpdate = (updateFunction, toggleFunction) => () => {
    const { currentFilterLogic, filterName } = this.state;
    let finalFilter = null;
    const lastLogic = currentFilterLogic.slice(-1)[0];
    if (lastLogic && lastLogic.type === 'opr') {
      finalFilter = currentFilterLogic.slice(0, -1);
    } else {
      finalFilter = currentFilterLogic;
    }
    updateFunction(finalFilter, filterName);
    this.cleanFilter();
    this.cleanState();
    toggleFunction();
  }

  handleChangeOnName = (event) => {
    const { value } = event.target;
    this.setState({
      filterName: value,
    });
  }

  render() {
    const {
      toggle,
      modal,
      attributes,
      updateCurrentFilter,
    } = this.props;

    const options = attributes[this.state.attribute] && attributes[this.state.attribute].options;

    let type = this.state.attribute && attributes[this.state.attribute] && attributes[this.state.attribute].type;
    if (!type) {
      type = "opr"
    }

    const listDropdown = Object.keys(attributes);

    return (
      <Modal
        isOpen={modal}
        toggle={toggle}
        size={'lg'}
        backdrop={'static'}
      >
        <div className='filter-header'>
          <Row>
            <Col md="8" xs="6">
              <div className="widget-title dash-title text-truncate">
                <h4>Cadastrar Filtro</h4>
                <div className="dash-subtitle text-truncate">
                  Formulário para criação de filtros
                </div>
              </div>
            </Col>
            <Col md="4" xs="6" className="container-left">
              <Button
                onClick={() => { }}
                className="ghost-button" style={{ width: "auto", height: "38px", padding: "8px 40px" }}>Filtros Prontos</Button>
            </Col>
          </Row>
        </div>
        <ModalBody>
          <FormGroup row>
            <Label for="filterName" sm={2}>Nome</Label>
            <Col sm={10}>
              <Input
                type="text"
                name="filterName"
                id="filterName"
                value={this.state.filterName}
                onChange={this.handleChangeOnName}
              />
            </Col>
          </FormGroup>
          <div className="switch-container">
            <Row>
              <Col sm={2} />
              <Col sm={10}>
                <CustomInput disabled type="switch" id="saveSwitch" name="saveSwitch" label="Aplicar filtro sem salvar" />
              </Col>
            </Row>
          </div>
          <div className='create-filter-container'>
            <div className={'filter-container-title'}>
              <div className="filter-title">
                Monte seu Filtro
              </div>
            </div>
            <div className="filter-container-body">
              <FormGroup row>
                <Label for="attribute" sm={3}>Atributo / Operação</Label>
                <Col sm={9}>
                  <Input
                    type="select"
                    name="attribute"
                    id="attribute"
                    onChange={this.handleAttributeSelectClick}
                  >
                    <option value selected={!this.state.attribute} style={{ display: 'none' }}></option>
                    {((attributes && (this.state.currentFilterLogic.length === 0 || this.state.currentFilterLogic.slice(-1)[0].type === 'opr'))
                      ? (
                        listDropdown.map((option) => (
                          <option value={option} key={option}>
                            {attributes[option].name}
                          </option>
                        )))
                      : ([
                        <option value='and'>Condicional E</option>,
                        <option value='or'>Condicional OU</option>
                      ]
                      )
                    )}
                  </Input>
                </Col>
              </FormGroup>
              <FormGroup row style={{ minHeight: "93px" }}>
                <Col sm={4} style={{ margin: "auto 0" }}>
                  <Input
                    style={{ textAlign: "center" }}
                    value={this.state.attribute ?
                      (condicionalOperator[this.state.attribute] || attributes[this.state.attribute].name) :
                      ''
                    }
                    disabled
                    type="text"
                    name="attribute"
                    id="attribute"
                  />
                </Col>
                <Col sm={4} style={{ margin: "auto 0" }}>
                  <Input
                    className={(!this.state.attribute || condicionalOperator[this.state.attribute]) ? 'remove-input' : ''}
                    type="select"
                    name="attribute"
                    id="attribute"
                    onChange={this.handleInputSelectClick(type)}
                  >
                    <option value selected={!this.state.operator} style={{ display: 'none' }}></option>
                    {this.state.attribute && !condicionalOperator[this.state.attribute] && Object.keys(filterOperations[type]).map((option) => (
                      <option value={option}>
                        {filterOperations[type][option].description}
                      </option>
                    ))}
                  </Input>
                </Col>
                <Col sm={4} style={{ margin: "auto 0" }}>
                  {inputBasedOnOperator(this.state, this.handleChangeOption, this.handleChangeSelectOptions, options)}
                </Col>
              </FormGroup>
              <Button color="primary" onClick={this.buildFilter(attributes)}>Adicionar</Button>
              <Button color="warning" style={{ marginLeft: "10px" }} onClick={() => { this.cleanState(); }}>Limpar</Button>
              <Button color="danger" style={{ marginLeft: "10px" }} onClick={() => { this.cleanState(); this.cleanFilter(); }}>Limpar Resultado</Button>
            </div>
          </div>
          <div className='create-filter-container'>
            <div className={'filter-container-title'}>
              <div className="filter-title">
                Resultado
              </div>
              <div className="filter-container-body">
                <div className="result-container">
                  {filterResultUI(this.state.currentFilterLogic, attributes, filterOperations)}
                </div>
              </div>
            </div>
          </div>
        </ModalBody>
        <ModalFooter className={'filter-footer'}>
          <Button color="success" onClick={this.fixFilterAndUpdate(updateCurrentFilter, toggle)}>Criar Filtro</Button>
          <Button color="danger" onClick={() => { toggle(); this.cleanState(); this.cleanFilter(); }}>Cancelar</Button>
        </ModalFooter>
      </Modal>
    );
  }
}

export default ModalCreateFilter;