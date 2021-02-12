import React, { Component } from 'react';
import { Button } from 'reactstrap';
import './PaneTitle.css'

class PaneTitle extends Component {
  state = {  }
  render() { 
    const { actionButtons, title } = this.props;
    return ( 
      <div 
          className='action-container'
        >
          <div className="action__text">{title}</div>
          <div className='action__buttons'>
            {actionButtons && actionButtons.map(button => (
              <Button 
                color={button.color} 
                size="sm" 
                style={{marginRight: "10px"}}
                onClick={button.onClick}
              >
                {button.name}
              </Button>
            ))}
          </div>
        </div>
     );
  }
}
 
export default PaneTitle;