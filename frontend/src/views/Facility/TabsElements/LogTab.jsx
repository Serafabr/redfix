import React, { Component } from 'react';
import LogTemplateTab from '../../../components/Tabs/LogTab/LogTemplateTab';

class LogTab extends Component {
  render() {
    const data = this.props.data || [];

    return (
        <LogTemplateTab
          data={data}
        />
    );
  }
}

export default LogTab;