import React, { useState, useContext, useEffect } from 'react'
import Select from 'react-select';
import { useQuery } from '@apollo/react-hooks';
import { Button, Input } from 'reactstrap';

import { ALL_TEAMS_QUERY } from './utils/graphql';
import { UserContext } from '../../context/UserProvider';

export default function SelectUser() {
  const userContext = useContext(UserContext);
  const [ team, setTeam ] = useState(userContext.user);
  const [ user, setUser ] = useState(userContext.team);
  const [ teamOptions, setTeamOptions ] = useState([]);

  const { loading } = useQuery(ALL_TEAMS_QUERY, {
    onCompleted: ({ allTeamData: { nodes: data}}) => {
      const teamOptionsData = data.map(team => ({
        value: team.teamId, 
        label: team.name, 
        members: team.persons.map(member => ({value: member.personId, label: member.name}))
      }));
      setTeamOptions(teamOptionsData);
    }
  });
  
  function cleanForm() {
    setTeam(null);
    setUser(null);
  }
  
  function handleTeamChange(team) {
    setTeam(team);
    setUser(null);
  }
  
  function handleUserChange(user) {
    setUser(user);
  }
  
  return (
    <div>
      {userContext.isLogged ? (
        <div>
          <div style={{ margin: '10px 0', fontWeight: '700' }}>Equipe ativa:</div>
          <Input value={userContext.team.label} disabled/>
          <div style={{ margin: '20px 0 10px 0', fontWeight: '700' }}>Usuário ativo:</div>
          <Input value={userContext.user.label} disabled/>
        </div>
      ) : (
        <div>
          <div style={{ margin: '10px 0', fontWeight: '700' }}>Selecione a equipe:</div>
          <Select
            className="basic-single"
            classNamePrefix="select"
            isClearable
            isSearchable
            name="team"
            options={teamOptions}
            placeholder={'Equipe ...'}
            onChange={handleTeamChange}
            value={team}
          />
          <div style={{ margin: '20px 0 10px 0', fontWeight: '700' }}>Selecione o usuário:</div>
          <Select
            className="basic-single"
            classNamePrefix="select"
            isClearable
            isSearchable
            name="user"
            options={team ? teamOptions.filter(teamOption => teamOption.value == team.value)[0].members : []}
            placeholder={'Usuário ...'}
            onChange={handleUserChange}
            value={user}
          />
        </div>
      )}
        <div
          style={{ marginTop: "20px", textAlign: "end" }}
        >
        {userContext.isLogged ? (
          <Button color="danger" onClick={() => {userContext.logout(); cleanForm();}}>Logout</Button>
        ) : (
          <Button color="primary" onClick={() => {userContext.login(user, team)}}>Login</Button>
        )}
      </div>
    </div>
  )
}
