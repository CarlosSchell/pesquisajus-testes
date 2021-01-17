console.log('Entrou no Script')

async function postOneUserAxios(user) {
  try {
    let url = 'http://localhost:3000/api/v1/users/signup'
    let options = {
      method: 'POST',
      url: url,
      data: user
    }
    let res = await axios(options)
    console.log(res)
    let resOK = res && res.status === 200 && res.statusText === 'OK'
    if (resOK) {
      let data = await res.data
      console.log(data)
    }
  } catch (err) {
    console.log(err)
  }
}

function postOneUserFetch(opts) {
  console.log('Posting user to pesquisajus API...')
  fetch('https://localhost:3000/api/v1/users/signup', {
    method: 'post',
    body: JSON.stringify(user)
  })
    .then(function (response) {
      return response.json()
    })
    .then(function (data) {
      console.log('Posted user to pesquisajus API...')
      console.log(user)
    })
}

const sendForm = e => {
  e.preventDefault()
  const nameValue = document.getElementById('username').value
  const emailValue = document.getElementById('email').value
  const passwordValue = document.getElementById('password').value
  const passwordConfirmValue = document.getElementById('passwordConfirm').value
  console.log('Entrou na função')
  console.log(nameValue)
  console.log(emailValue)
  console.log(passwordValue)
  console.log(passwordConfirmValue)
  console.log(e)

  user = {
    name: nameValue,
    email: emailValue,
    password: passwordValue,
    passwordConfirm: passwordConfirmValue
  }
  postOneUserFetch(user)
}

document.getElementById('loginSubmitBtn').addEventListener('click', sendForm)

// Event listeners
// document.getElementById('get').addEventListener('click', getTodos);
// document.getElementById('post').addEventListener('click', addTodo);
// document.getElementById('update').addEventListener('click', updateTodo);
// document.getElementById('delete').addEventListener('click', removeTodo);
// document.getElementById('sim').addEventListener('click', getData);
// document.getElementById('headers').addEventListener('click', customHeaders);
// document
//   .getElementById('transform')
//   .addEventListener('click', transformResponse);
// document.getElementById('error').addEventListener('click', errorHandling);
// document.getElementById('cancel').addEventListener('click', cancelToken);
