import React, { Component } from 'react';
import './ItemView.css';
import { Row, Col, Badge } from 'reactstrap';

// const dataTest = {
//   id: 'facility1',
//   image: 'image',
//   status: 'status',
//   descriptionItems: [
//     { title: 'item1', description: 'description1', boldTitle: true }
//   ]
// };

export default class ItemDescription extends Component {
  render() {
    const { image, status, descriptionItems } = this.props;
    return (
      <div className="description-container">
        <div className="description-container__status-box">
          <div className="status-box__image-container">
            <img className="status-box__image" src={image} alt="Ar-condicionado" />
          </div>
          <div className="status-box__badge-box">
            <Badge className="mr-1 status-box__badge" color="success">{status}</Badge>
          </div>
        </div>
        <div className="description-container__text-box" md="10">
          {descriptionItems.map((item, index) => {
            if (index === 0) {
              return (
                <div className="text-box__first-line" key={index}>
                  <Row style={item.rowStyle}>
                    <Col md="3" className="text-box__lines__col-title"><span className="text-box__title">{item.title}</span></Col>
                    <Col md="9" className="text-box__lines__col-value"><span style={{ fontWeight: '500' }}>{item.description || "Não cadastrado"}</span></Col>
                  </Row>
                </div>
              );
            }

            return (
              <div className="text-box__lines" key={index}>
                <Row style={item.rowStyle}>
                  <Col md="3" className="text-box__lines__col-title"><span className="text-box__subtitle">{item.title}</span></Col>
                  <Col md="9" className="text-box__lines__col-value"><span>{item.description || "Não cadastrado"}</span></Col>
                </Row>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}