import React, { Component } from 'react';
import './Form.css';
import {
  Form,
  Row,
  Col,
} from 'reactstrap';

class FormTable extends Component {
  render() {
    const {
      title,
      numColumns,
      inputMatrix
    } = this.props;
    return (
      <Form style={{ margin: "20px" }}>
        <h1 className="input-container-title">{title}</h1>
        {inputMatrix && (
          inputMatrix.map((line) => (
            <Row>
              {
                line && line.map((item) => (
                  <Col md={(12 / numColumns * item.span).toString()} style={item.style}>
                    {item.elementGenerator ?
                      item.elementGenerator() :
                      <InputField
                        title={item.title}
                        value={item.description}
                        type={item.type}
                      />
                    }
                  </Col>
                ))
              }
            </Row>
          ))
        )}
      </Form>
    );
  }
}

export default FormTable;