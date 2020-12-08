import React, { Component } from 'react';
import MessageTemplateTab from '../../../components/Tabs/MessageTab/MessageTemplateTab';

class MessageTab extends Component {
  render() {
    const data = this.props.data || [];

    return (
      <MessageTemplateTab
        data={data}
      />
    );
  }
}

export default MessageTab;