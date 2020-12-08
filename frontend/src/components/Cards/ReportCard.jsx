import React, { Component } from "react";
import {
  Card,
  CardBody,
  Col,
  Row,
  ButtonDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
  CardHeader
} from "reactstrap";

class ReportCard extends Component {
  // Props:
  //      - title (string)
  //      - titleColSize (number from 0 to 12)
  //      - subtitle (string)
  //      - subvalue (string) - Appears after subtitle
  //      - dropdown (boolean) - If true, there is a dropdown
  //      - dropdownTitle (string) - Appears before the dropdown
  //      - dropdownItems (object with items): {id1: "text1", id2: "text2", ....}.
  //                Example: {best: "Melhor Resultado", blue: "Modalidade Azul", verde: "Modalidade Verde"}

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
    const {
      title,
      titleColSize,
      subtitle,
      subvalue,
      dropdown,
      dropdownTitle,
      dropdownItems,
      resultID,
      showCalcResult,
      bodyClass,
      children
    } = this.props;
    return (
      <Card>
        <CardHeader>
          <Row>
            <Col xs={titleColSize || 6}>
              <div className="calc-title">{title}</div>
              <div className="calc-subtitle">
                {subtitle} <strong>{subvalue}</strong>
              </div>
            </Col>
            {dropdown ? (
              <Col xs={12 - (titleColSize || 6)}>
                <Row className="center-button-container">
                  <p className="button-calc">{dropdownTitle}</p>
                  <ButtonDropdown
                    isOpen={this.state.dropdownOpen}
                    toggle={() => {
                      this.toggle();
                    }}
                  >
                    <DropdownToggle caret size="sm">
                      {dropdownItems[resultID]}
                    </DropdownToggle>
                    <DropdownMenu className="dropdown-menu">
                      {Object.keys(dropdownItems).map(itemID => (
                        <DropdownItem
                          key={itemID}
                          onClick={() => showCalcResult(itemID)}
                        >
                          {dropdownItems[itemID]}
                        </DropdownItem>
                      ))}
                    </DropdownMenu>
                  </ButtonDropdown>
                </Row>
              </Col>
            ) : (
              ""
            )}
          </Row>
        </CardHeader>
        <CardBody className={bodyClass}>
          {children}
        </CardBody>
      </Card>
    );
  }
}

export default ReportCard;
