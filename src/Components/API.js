export const APILINK = "http://localhost:3000"
export const APIUSERS = `${APILINK}/users`
export const APIPOSTS = `${APILINK}/posts`
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


export const validateUser = url => { // APILINK/profile
    if (localStorage.token) {
      return fetch(url, {
        headers: {
          Authorisation: localStorage.token
        }
      })
        .then(jsonify)
        .then(data => {
          localStorage.setItem("token", data.token);
          return data.user;
        });
    } else {
      return Promise.reject({ error: "no token" });
    }
  };
  
// export const signUp = (url, signupData) =>
//   fetch(url, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json"
//     },
//     body: JSON.stringify({ user: signupData })
//   }).then(jsonify);

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
      localStorage.setItem("token", data.token);
      return data.user;
});

export const API = { GetAPI, PostAPI, PatchAPI, DeleteAPI, validateUser, login }