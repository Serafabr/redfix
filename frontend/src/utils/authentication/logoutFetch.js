export default function logoutFetch(){
  return new Promise((resolve, reject) => {
    
    fetch(process.env.REACT_APP_SERVER_URL + process.env.REACT_APP_LOGOUT_PATH, {
      method: 'GET',
      credentials: 'include',
    })
      .then(r => {
        if(r.status === 200){
          resolve();
        } else {
          reject();
        }
      })
      .catch(error => {
        alert(error);
        reject("Erro no logout.")
      });
  });
}