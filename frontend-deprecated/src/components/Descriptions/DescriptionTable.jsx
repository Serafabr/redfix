import React, { Component } from 'react';
import DescriptionField from './DescriptionField';
import { Row, Col } from 'reactstrap';

const testObj = {
  title: 'Dados Gerais',
  numColumns: 2,
  itemsMatrix: [
    [{ id: 'facility', title: 'Edifício', description: 'SQS 309', span: 1 }, { id: 'facility', title: 'Edifício', description: 'SQS 309', line: 1, span: 1 },],
    [{ id: 'facility', title: 'Edifício', description: 'SQS 309', span: 1 }],
    [{ id: 'facility', title: 'Edifício', description: 'SQS 309', span: 2 }]
  ]
}

export default class DescriptionTable extends Component {
  render() {
    const { title, numColumns, itemsMatrix } = this.props;
    return (
      <div className="asset-info-container">
        <h1 className="asset-info-title">{title}</h1>
        {itemsMatrix && (
          <div className="asset-info-content">
            {
              itemsMatrix.map((line, index) => (
                <Row
                  key={index}
                >
                  {
                    line && line.map((item) => (
                      <Col md={(12 / numColumns * item.span).toString()} style={item.style} key={item.id}>
                        {item.elementGenerator ?
                          item.elementGenerator() :
                          <DescriptionField
                            title={item.title}
                            description={item.description}
                          />
                        }
                      </Col>
                    ))
                  }
                </Row>
              ))
            }
          </div>
        )}
      </div>
    );
  }
}