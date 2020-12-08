import React, { Component } from 'react';
import { compose } from 'redux';
import ItemView from '../../components/ItemView/ItemView';
import tabsGenerator from './tabsGenerator';
import moment from 'moment';
import { withProps, withGraphQL, withQuery } from '../../hocs';
import paths from '../../paths';

import { useQuery } from '@apollo/react-hooks';

import { TASK_QUERY } from './graphql/gql';

// Image by <a href="https://pixabay.com/users/OpenClipart-Vectors-30363/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1295319">OpenClipart-Vectors</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1295319">Pixabay</a>
const image = require("../../assets/img/entities/task.png");

function daysOfDelay(date, dueDate) {
  if (dueDate) {
    const today = new Date();
    const dateObj = date ? moment(date) : moment(today);
    const dueDateObj = moment(dueDate);
    const diff = dateObj.diff(dueDateObj, 'days');
    
    return diff > 0 ? `(${diff} dias de atraso)` : `(+ ${-diff} dias)`;
  } else {
    return null;
  }
}

const descriptionItems = [
  { title: 'Serviço', description: "", boldTitle: true },
  { title: 'Local', description: "", boldTitle: false },
  { title: 'Prazo', description: "", boldTitle: false },
  { title: 'Equipe Atual', description: "", boldTitle: false },
  { title: 'Descrição', description: "", boldTitle: false, rowStyle: { marginTop: '15px' } },
];

function Task(props) {
  const taskId = Number(props.match.params.id)
  
  const { loading, data: rawData } = useQuery(TASK_QUERY, {
    variables: { taskId }
  });
  const data = loading ? {} : rawData.allTaskData.nodes[0];
   
  const imageStatus = data && data.taskStatusText;
  
  const delayTime = daysOfDelay(data.dateEnd, data.dateLimit);
  const dueDateColor = moment(data.dateLimit).diff(new Date()) < 0 ? '#b10000' : '#00b14f';
  const dueDateDisplay = data.dateLimit ? (
    <span style={{ color: dueDateColor, fontWeight: '700' }}>
      <span style={{ textTransform: 'capitalize'  }}>{moment(data.dateLimit).format("dddd, DD MMM YYYY")}</span><span>{" " + delayTime}</span>
    </span>
  ) : (
    <span>
      Tarefa sem prazo
    </span>
  );
 
  if (!loading) {
   descriptionItems[0].description = data.title;
   descriptionItems[1].description = data.place;
   descriptionItems[2].description = dueDateDisplay;
   descriptionItems[3].description = data.teamName;
   descriptionItems[4].description = data.description;
  }

  return (
    loading ? (
      <div>Loading</div>
    ) : (
      <ItemView
        sectionName={`Tarefa ${taskId.toString().padStart(4, "0")}`}
        sectionDescription={'Informações detalhadas da tarefa'}
        data={data}
        image={image}
        imageStatus={imageStatus}
        descriptionItems={descriptionItems}
        tabs={tabsGenerator(data)}
        buttonPath={paths.task.toUpdate + taskId.toString()}
        {...props}
      />
    )
  );
}

export default Task;


