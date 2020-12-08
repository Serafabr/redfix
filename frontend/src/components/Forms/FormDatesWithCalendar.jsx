import React, { Component } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Row,
  Col,
  Label,
  Input,
  FormGroup,
  Button,
  CustomInput,
  InputGroup,
  InputGroupAddon,
} from "reactstrap";
import Calendar from "react-calendar";
import dateToStrFormDates from "../../utils/maintenance/dateToStrFormDates";

class FormDates extends Component {
  constructor(props){
    super(props);
    this.state = {
      initialDateCalendar: false,
      initialDate: dateToStrFormDates(new Date())
    }
    this.initialDateRef = React.createRef();
    this.initialDateRef.current = {};
    this.initialDateRef.current.value = this.state.initialDate;
  }

  selectInitialDate = month => {
    this.initialDateRef.current.value = dateToStrFormDates(month);
    this.setState({
      initialDateCalendar: false,
      initialDate: this.initialDateRef.current.value
    });
  }

  render() {

    let {
      onChangeDate,
      onMeterChange,
      onChangeOneMonth,
      onQuery
    } = this.props;

    let {
      meters,
      oneMonth,
      initialDate,
      finalDate,
      chosenMeter,
      meterType
    } = this.props.consumptionState;

    let fetchingMeters = meters.length === 0 ? true : false;

    return (
      <Card>
        <CardHeader>
          <Row>
            <Col md="12">
              <div className="calc-title">Pesquisar período</div>
              <div className="calc-subtitle">
                <em>Dados desde 01/2017</em>
              </div>
            </Col>
          </Row>
        </CardHeader>
        <CardBody>
          <Row>
            <Col xs="3">

            <InputGroup className="mb-3">
                
              <Input
                type="text"
                id="initialDate"
                name="initialDate"
                value={this.state.initialDate}
                innerRef={this.initDateRef}
                onChange={event => this.setState({[event.target.name]: event.target.value, initialDateCalendar: false})}
                onClick={() => this.setState(prevState => ({initialDateCalendar: !prevState.initialDateCalendar}))}
              />
                <InputGroupAddon addonType="append">
                  <Button
                    color="light"
                    onClick={() => this.setState(prevState => ({initialDateCalendar: !prevState.initialDateCalendar}))}
                  ><i className="icon-calendar"></i>
                  </Button>
                </InputGroupAddon>
            </InputGroup>
            </Col>
          </Row>
          <Row>
            {this.state.initialDateCalendar &&
              <Col xs="3">
                <Calendar
                  calendarType="US"
                  minDetail="year"
                  maxDetail="year"
                  onClickMonth={this.selectInitialDate}
                />
              </Col>
            }
          </Row>

          <Row>
            {/* <Col xl="3" lg="6">
              <Row style={{ marginBottom: "10px" }}>
                <Label htmlFor="initialDate" className="label-form">
                  <strong>Mês inicial:</strong>
                </Label>
                <Input
                  className="date-input"
                  name="initialDate"
                  id="initialDate"
                  type="text"
                  placeholder="mm/aaaa"
                  value={initialDate}
                  required
                  onChange={onChangeDate}
                />
              </Row>
            </Col> */}
            <Col xl="3" lg="6">
              <Row style={{ marginBottom: "10px" }}>
                <Label htmlFor="finalDate" className="label-form">
                  <strong>Mês final:</strong>
                </Label>
                {!oneMonth ? (
                  <Input
                    className="date-input"
                    type="text"
                    name="finalDate"
                    id="finalDate"
                    placeholder="mm/aaaa"
                    value={finalDate}
                    required
                    onChange={onChangeDate}
                  />
                ) : (
                  <Input
                    className="date-input"
                    type="text"
                    name="finalDate"
                    id="finalDate"
                    placeholder="mm/aaaa"
                    value={finalDate}
                    required
                    onChange={onChangeDate}
                    disabled
                  />
                )}
              </Row>
            </Col>
            <Col xl="6" lg="12">
              <Row style={{ marginBottom: "10px" }}>
                <Label htmlFor="chosenMeter" className="label-form">
                  <strong>Medidor:</strong>
                </Label>

                {fetchingMeters &&
                  <Input
                    type="text"
                    disabled={true}
                    placeholder="Carregando medidores..."
                    className="input-meters"
                  ></Input>
                }

                {!fetchingMeters &&
                  <Input
                    type="select"
                    name="chosenMeter"
                    id="exampleSelect"
                    onChange={onMeterChange}
                    className="input-meters"
                    defaultValue={fetchingMeters ? "Carregando medidores..." : chosenMeter}
                  >
                    <option value={meterType + "99"}>Todos medidores</option>
                    {meters.map(meter => (
                      <option
                        key={(
                          100 * parseInt(meter.tipomed.N, 10) +
                          parseInt(meter.med.N, 10)
                        ).toString()}
                        value={(
                          100 * parseInt(meter.tipomed.N, 10) +
                          parseInt(meter.med.N, 10)
                        ).toString()}
                      >
                        {meter.id.S + " - " + meter.nome.S}
                      </option>
                    ))}
                  </Input>
                }
              </Row>
            </Col>
          </Row>

          <Row>
            <Col>
              <FormGroup
                check
                className="checkbox"
                style={{ padding: " 15px 10px 5px 5px" }}
              >
                <CustomInput
                  type="checkbox"
                  id="oneMonth"
                  name="oneMonth"
                  label="Pesquisar somente um mês"
                  checked={oneMonth}
                  onChange={onChangeOneMonth}
                />
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col xs="auto">
              <Button
                disabled={fetchingMeters}
                className=""
                type="submit"
                size="md"
                color="primary"
                onClick={onQuery}
                style={{ margin: "10px 20px" }}
              >
                Pesquisar
              </Button>
            </Col>
          </Row>
        </CardBody>
      </Card>
    );
  }
}

export default FormDates;
