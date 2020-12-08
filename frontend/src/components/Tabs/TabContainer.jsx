import React, { Component } from 'react';
import './TabContainer';
import {
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane
} from 'reactstrap';

import './TabContainer.css';

// const propsTest = {
//   id: 'facility1',
//   tabs: [
//     { id: 'info', title: 'Informação', element: <h1>Hi</h1> }
//   ]
// }

export default class TabContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabSelected: this.props.tabs[0].id,
    }

    this.handleClickOnNav = this.handleClickOnNav.bind(this);
  }

  handleClickOnNav(event) {
    this.setState({ tabSelected: event.target.name });
  }

  render() {
    const { tabs } = this.props;
    const { tabSelected } = this.state;
    return (
      <div style={{ margin: "30px -20px 20px -20px" }}>
        <Nav tabs className='navbar-tabs'>
          {
            tabs.map((tab) => (
              <NavItem key={tab.id}>
                <NavLink name={tab.id} onClick={this.handleClickOnNav} active={tabSelected === tab.id} >{tab.title}</NavLink>
              </NavItem>
            ))
          }
        </Nav>
        <TabContent activeTab={tabSelected} className='tab-contents'>
          {
            tabs.map((tab) => (
              <TabPane key={tab.id} tabId={tab.id}>
                <div className='tab-contents__pane'>
                  {tab.element}
                </div>
              </TabPane>
            ))
          }
        </TabContent>
      </div>
    );
  }
}