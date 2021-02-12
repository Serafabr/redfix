import React, { Component } from "react";
import {
  Row,
  Col,
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  FormGroup,
  Label,
  Input,
  ListGroup,
  ListGroupItem,
} from "reactstrap";

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

class ApplyFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterName: '',
      filterId: null,
      attribute: null,
      operator: null,
      option: null,
      inputBasedOnOperator: 'nothing',
      currentFilterLogic: [],
    };
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

  updateFilter = (updateFunction, toggleFunction) => () => {
    const { currentFilterLogic, filterName, filterId } = this.state;
    if (filterId) {
      updateFunction(currentFilterLogic, filterName, filterId);
    }
    this.cleanFilter();
    this.cleanState();
    toggleFunction();
  }

  changeCurrentFilter = (id, name, logic) => () => {
    this.setState({
      currentFilterLogic: logic,
      filterName: name,
      filterId: id,
    });
  }

  render() {
    const {
      toggle,
      modal,
      attributes,
      updateCurrentFilter,
      customFilters,
      currentFilterId
    } = this.props;
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
                <h4>Aplicar Filtro</h4>
                <div className="dash-subtitle text-truncate">
                  Lista de filtros salvos
                </div>
              </div>
            </Col>
            <Col md="4" xs="6" className="container-left">
              <Button
                onClick={() => { }}
                className="ghost-button" style={{ width: "auto", height: "38px", padding: "8px 40px" }}>Criar Filtros</Button>
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
                disabled
              />
            </Col>
          </FormGroup>
          <div className='create-filter-container'>
            <div className={'filter-container-title'}>
              <div className="filter-title">
                Escolha seu Filtro
              </div>
            </div>
            <div className="filter-container-body" style={{ paddingTop: "15px", paddingBottom: "20px" }}>
              <div className="filter-apply-table">
                <ListGroup style={{ borderLeft: "none" }}>
                  {customFilters.map(filter => (
                    <ListGroupItem
                      key={filter.id}
                      className={
                        (filter.id === this.state.filterId ?
                          "filter-selected-item" :
                          "") + (
                          currentFilterId && currentFilterId === filter.id ?
                            " filter-active-filter" :
                            ""
                        )
                      }
                      tag="button"
                      action
                      onClick={this.changeCurrentFilter(filter.id, filter.name, filter.logic)}
                    >
                      <Row>
                        <Col xs={1}><b>Filtro:</b></Col>
                        <Col xs={5}>{filter.name}</Col>
                        <Col xs={1}><b>Autor:</b></Col>
                        <Col xs={5}>{filter.author}</Col>
                      </Row>
                    </ListGroupItem>
                  ))}
                </ListGroup>
              </div>
            </div>
          </div>
          <div className='create-filter-container'>
            <div className={'filter-container-title'}>
              <div className="filter-title">
                Lógica
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
          <Button color="success" onClick={this.updateFilter(updateCurrentFilter, toggle)}>Aplicar Filtro</Button>
          <Button color="danger" onClick={() => { toggle(); this.cleanState(); this.cleanFilter(); }}>Fechar</Button>
        </ModalFooter>
      </Modal>
    );
  }
}

export default ApplyFilter;