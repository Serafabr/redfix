import React, { Component } from "react";
import { Row, Col, Table } from "reactstrap";
import { Line } from "react-chartjs-2";
import formatNumber from "../../utils/consumptionMonitor/formatText";
import ReportCard from "../Cards/ReportCard";

class ChartReport extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: this.props.selectedDefault
    };
  }

  onChangeYAxis = type => {
    this.setState({ selected: type });
  };

  render() {
    const { unitName, dropdownItems, chartConfigs, title, titleColSize, subtitle, dropdownTitle } = this.props;

    return (
      <ReportCard
        title={title}
        titleColSize={titleColSize}
        subtitle={subtitle}
        subvalue={unitName}
        dropdown
        dropdownTitle={dropdownTitle}
        dropdownItems={dropdownItems}
        showCalcResult={this.onChangeYAxis}
        resultID={this.state.selected}
        bodyClass="fixed-height"
      >
        <Row>
          {/*Gráfico*/}
          <Col md="8">
            <Line
              data={chartConfigs[this.state.selected].data}
              options={chartConfigs[this.state.selected].options}
              redraw={true}
            />
          </Col>

          {/*Tabela*/}
          <Col md="4" className="table-container">
            <Table responsive size="sm" className="center">
              <thead>
                <tr>
                  <th>Mês</th>
                  <th>
                    {chartConfigs[this.state.selected].options.title.text +
                      " (" +
                      chartConfigs[this.state.selected].options.scales.yAxes[0].scaleLabel.labelString +
                      ")"}
                  </th>
                </tr>
              </thead>
              <tbody>
                {chartConfigs[this.state.selected].data.labels.map((month, index) => (
                  <tr key={month}>
                    <td>{month}</td>
                    <td sytle="{text-align: right}">
                      {formatNumber(chartConfigs[this.state.selected].data.datasets[0].data[index]
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </ReportCard>
    );
  }
}

export default ChartReport;
