const fetch = require('node-fetch')
const axios = require('axios')

async function getAllUsersFetch() {
  try {
    const res = await fetch('http://localhost:3000/api/v1/users')
    const resJSON = await res.json()
    console.log(resJSON)
  } catch (err) {
    console.log(err)
  }
}

async function getAllUsersAxios() {
  try {
    const res = await axios('http://localhost:3000/api/v1/users')
    console.log(res)
  } catch (err) {
    console.log(err)
  }
}

//

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

// // Axios JSON post request
// let url = 'https://someurl.com'
// let options = {
//   method: 'POST',
//   url: url,
//   headers: {
//     Accept: 'application/json',
//     'Content-Type': 'application/json;charset=UTF-8'
//   },
//   data: {
//     "name": "carlos",
//     "email": "carlos.schellenberger@gmail.com",
//   }
// }
// let response = await axios(options)
// let responseOK = response && response.status === 200 && response.statusText === 'OK'
// if (responseOK) {
//   let data = await response.data
//   // do something with data
// }


// getAllUsersFetch()
//getAllUsersAxios()

user = {
  name: 'Kellen',
  email: 'kellen@gmail.com',
  role: 'user',
  password: 'car123',
  passwordConfirm: 'car123'
}
postOneUserAxios(user)