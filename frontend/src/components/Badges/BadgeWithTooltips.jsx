import React from "react";
import { Badge, Tooltip } from "reactstrap";

class BadgeWithTooltips extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      tooltipOpen: false
    };
  }

  toggle() {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen
    });
  }

  render() {
    
    // let metersIDs = this.props.metersIDs;
    
    let metersIDs = [];
    if (this.props.chosenMeter === "199") {
      metersIDs = this.props.problem.metersIDs;
    }

    let {
      color,
      name,
      id,
      situation,
      obs,
      expected
    } = this.props;

    return (
      <span>
        <Badge color={color} id={"Tooltip-" + id}>
          {situation}
        </Badge>
        <Tooltip
          autohide={false}
          placement="right"
          isOpen={this.state.tooltipOpen}
          target={"Tooltip-" + id}
          toggle={this.toggle}
        >
          <strong>{name}</strong>
          <br />
          <br />
          <strong>Observações:</strong>
          <br />
          <p style={{ textAlign: "justify" }}>{obs}</p>
          <strong>Faixa de normalidade:</strong>
          <br />
          {expected}
          {metersIDs.length > 0 && (
            <>
              <br />
              <p style={{ textAlign: "justify" }} />
              <strong>Verificar medidor(es):</strong>
              {metersIDs.map(meterID => (
                <React.Fragment key={meterID}>
                  <br />
                  <>{meterID}</>
                </React.Fragment>
              ))}
            </>
          )}
        </Tooltip>
      </span>
    );
  }
}

export default BadgeWithTooltips;
