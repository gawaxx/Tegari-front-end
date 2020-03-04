// In this file is all the API calls and methods

// Switch between these two depending on if I am testing or in development
// export const APILINK = "http://localhost:3000"
export const APILINK = "https://tegari.herokuapp.com"

export const APIUSERS = `${APILINK}/users`
export const APIPOSTS = `${APILINK}/posts`

// Just need to uncomment if I ever need to add more features
// export const APISAVEPOST = `${APILINK}/save_posts`
// export const APIADMIN = `${APILINK}/admins`

const headers = {
    Accept: "application/json",
    "Content-Type": "application/json"
} 

const headers2 = {
    Authorization: `Bearer <token>`
}

const jsonify = res => res.json();


export const GetAPI = (url) => fetch(url).then(res => res.json())
export const PostAPI = (url, postInfo) => fetch(url, { method: "POST", headers: headers, body: JSON.stringify(postInfo)}).then(resp => resp.json())
export const PatchAPI = (url, patchInfo) => fetch(url, { method: "PATCH", headers: headers, body: JSON.stringify(patchInfo)}).then(resp => resp.json())
export const DeleteAPI = (url, deleteInfo) => fetch(url, { method: "DELETE", headers: headers, body: JSON.stringify(deleteInfo)})
export const GetProfile = (url) => fetch(url, {method: "GET", headers: {headers2}} )


export const validateUser = (url) => { // APILINK/profile
    if (localStorage.jwt) {
      return fetch(url, {
        headers: {
          Authorisation: localStorage.jwt
        }
      })
        .then(jsonify)
        .then(data => {
          if (data.token) {
            localStorage.jwt = data.token
          }
          return data.user
        })
    } else {
      return Promise.reject({ error: "no token" });
    }
  }; 
  
  export const login = (url, loginData) =>
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({ user: loginData })
  })
  .then(jsonify)
  .then(data => {
    localStorage.setItem("jwt", data.jwt)
    return data.user
  })
  
export const API = { GetAPI, PostAPI, PatchAPI, DeleteAPI, validateUser, login }
