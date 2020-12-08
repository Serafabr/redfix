import React, { Component } from 'react';
import DescriptionTable from '../../Descriptions/DescriptionTable';

import "./LogTemplateTab.css";
import LogTabData from './utils/LogTabFakeData';
import initials from './utils/initialsSeparator';

class LogTab extends Component {
  render() {
    const { data } = this.props; //temporarily unused

    return (
      <>
        <DescriptionTable
          title="Histórico de atualizações"
        />
        <div>
            {
              LogTabData.map((item, index) => {
                /*
                  In case a log of the same day has multiple items, the date header will only show once
                  on the first item of the list, so that the date doesn't keep getting repeated unnecessarily
                  for each item rendered.
                */
                const previousLogDate = LogTabData[index - 1] === undefined ? "" : LogTabData[index - 1].date;
                const currentLogDate = item.date;
                const dateClass = previousLogDate === currentLogDate ? "logs__date--hidden" : "logs__date";

                return(
                <div className="logs__main" key={index}>
                  <div className={dateClass}>{item.date} - <span className="text-muted">{item.day}</span></div>
                  <div className="logs__items">
                    <div className="logs__icon"><span className="logs__initials">{initials(item.name)}</span></div>
                    <div className="logs__occurence">
                      <div className="logs__creator">{item.name}</div>
                      <div className="logs__description">atualizou o ativo <span>{item.asset}</span></div>
                      <ul>
                        {item.occurences.map(item => <li>{item}</li>)}
                      </ul>
                      <div className="text-muted">Atualizado às {item.time}</div>
                    </div>
                  </div>
                </div>)
              }
              )
            }
        </div>
      </>
    );
  }
}

export default LogTab;