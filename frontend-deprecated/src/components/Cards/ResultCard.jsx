import React, { Component } from "react";
import { Card, CardBody, Col, Row, Button, CardHeader } from "reactstrap";

class ResultCard extends Component {
  /*
   * Props:
   *       - allUnits (boolean): if true, it will receive the header for all units
   *       - unitNumber (string): biggest and first text in the header, it'll receive the unit number
   *       - unitName (string): name of this unit
   *       - numOfUnits (number): number of units
   *       - initialDate (date): initial date for the query
   *       - finalDate (date of false): final date for the query
   *       - typeOfUnit ("azul" or "verde"): type of the unit
   *       - handleNewSearch (function): function to handle the click on the new search button
   *       ????? - changeMeter(newMeter) (function)
   *       - chosenMeter (number)
   *     ??????  - meters (list of objects)
   */

  render() {
    let {
      allUnits,
      unitNumber,
      unitName,
      numOfUnits,
      initialDate,
      finalDate,
      typeOfUnit,
      handleNewSearch,
      oneMonth,
      children
    } = this.props;

    return (
      <Card>
        <CardHeader>
          <Row>
            <Col md="9" xs="6">
              <div className="widget-title dash-title text-truncate">
                <h4>{unitNumber}</h4>
                {allUnits ? (
                  <div className="dash-subtitle text-truncate">
                    Total: <strong>{numOfUnits} medidores</strong>
                  </div>
                ) : (
                  <div className="dash-subtitle text-truncate">
                    Medidor: <strong>{unitName}</strong>
                  </div>
                )}
              </div>
              <div className="widget-container-center">
                {!oneMonth ? (
                  <div className="dash-title-info text-truncate">
                    Período:{" "}
                    <strong>
                      {initialDate}
                      {" - "}
                      {finalDate}
                    </strong>
                  </div>
                ) : (
                  <div className="dash-title-info text-truncate">
                    Período: <strong>{initialDate}</strong>
                  </div>
                )}
                {allUnits ? (
                  <div className="dash-title-info text-truncate">
                    Várias modalidades tarifárias
                  </div>
                ) : (
                  <div className="dash-title-info text-truncate">
                    Modalidade: <strong>{typeOfUnit}</strong>
                  </div>
                )}
              </div>
            </Col>

            <Col md="3" xs="6" className="container-left">
              <Button
                className="text-truncate"
                block
                outline
                color="primary"
                onClick={handleNewSearch}
                style={{ width: "auto", padding: "8px 25px" }}
              >
                <i className="cui-magnifying-glass" />
                &nbsp;Nova pesquisa
              </Button>
            </Col>
          </Row>
        </CardHeader>
        <CardBody>{children}</CardBody>
      </Card>
    );
  }
}

export default ResultCard;
