export default function loginFetch(email, password){
  return new Promise((resolve, reject) => {
    
    fetch(process.env.REACT_APP_SERVER_URL + process.env.REACT_APP_LOGIN_PATH, {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify({
        email: email,
        password: password
      }),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
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
        reject("Erro no login.")
      });
  });
}