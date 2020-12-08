import React, { Component } from "react";
import { Card, CardBody, Col, Row, Button, CardHeader, CardFooter } from "reactstrap";
import "./AssetCard.css";

const configIcon = require("../../assets/icons/config_icon.png");

class AssetCard extends Component {
  /*
   * Input:
   *  Props:
   *    sectionName
   *    sectionDescription
   *    handleCardButton
   *    buttonName
   */


  render() {
    let {
      sectionName,
      sectionDescription,
      handleCardButton,
      buttonName,
      children,
      isForm = false
    } = this.props;

    return (
      <Card >
        <CardHeader>
          <Row>
            <Col md="8" xs="6">
              <div className="widget-title dash-title text-truncate">
                <h4>{sectionName}</h4>
                <div className="dash-subtitle text-truncate">
                  {sectionDescription}
                </div>
              </div>
            </Col>
            <Col md="4" xs="6" className="container-left">
              {buttonName && (
                <Button 
                onClick={() =>  handleCardButton()}
                className="ghost-button" style={{ width: "auto", height: "38px", padding: "8px 40px" }}>
                  {buttonName}
                </Button>
              )}
              <Button
                className="ghost-button"
                outline
                style={{ width: "38px", height: "38px", marginLeft: "20px", padding: "6px" }}
              >
                <img src={configIcon} alt="" style={{ width: "100%", height: "100%" }} />
              </Button>
            </Col>
          </Row>
        </CardHeader>
        <CardBody>{children}</CardBody>
        {isForm && (
          <CardFooter>
            <Button type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i>  Cadastrar</Button>
            <Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i>  Cancelar</Button>
          </CardFooter>
        )}
      </Card>
    );
  }
}

export default AssetCard;