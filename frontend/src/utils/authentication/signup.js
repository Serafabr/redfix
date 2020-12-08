export default function signup(state){
  return new Promise((resolve, reject) => {

    const {
      email,
      name,
      surname,
      phone,
      department,
      contract,
      category,
      password1,
      password2
    } = state;

    if(password1 === password2){

      fetch(process.env.REACT_APP_SERVER_URL + "/register", {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify({
          email: email,
          name: name,
          surname: surname,
          phone: phone,
          department: department,
          contract: contract,
          category: category,
          password: password1
        }),
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        }
      })
        .then(() => {
          resolve();
        })
        .catch(() => {
          reject("O cadastro falhou.")
        });
    } else {
      reject("Senhas não conferem.");
    }
  });
}