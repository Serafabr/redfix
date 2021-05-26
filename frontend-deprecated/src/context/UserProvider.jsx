import React, { useState } from 'react'

export const UserContext = React.createContext();

export function UserProvider({ children }) {
  const [ user, setUser ] = useState({
    label: 'Everson Magalhães',
    value: 18,
  });
  const [ team, setTeam ] = useState({
    label: 'RCS Tecnologia - Posto 01',
    value: 5,
    members: [],
  });
  const [ isLogged, setIsLogged ] = useState(true);
  
  function login(user, team) {
    if (user && team) {
      setUser(user);
      setTeam(team);
      setIsLogged(true);
    }
  }
  
  function logout() {
    setUser(null);
    setTeam(null);
    setIsLogged(false);
  }
  
  return (
    <UserContext.Provider
      value={{
        user,
        team,
        isLogged,
        login,
        logout
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
