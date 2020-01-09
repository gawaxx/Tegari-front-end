const APILINK = "http://localhost:3000/"
const APIUSERS = `${APILINK}/users`
const APIPOSTS = `${APILINK}/posts`
const APISAVEPOST = `${APILINK}/save_posts`
const APIADMIN = `${APILINK}/admins`

const GetAPI = (url) => fetch(url).then(res => res.json())
const PostAPI = (url, postInfo) => fetch(url, { method: "POST", headers: headers, body: JSON.stringify(postInfo)}).then(resp => resp.json())
const PatchAPI = (url, patchInfo) => fetch(url, { method: "PATCH", headers: headers, body: JSON.stringify(patchInfo)}).then(resp => resp.json())
const DeleteAPI = (url, deleteInfo) => fetch(url, { method: "DELETE", headers: headers, body: JSON.stringify(deleteInfo)})

const API = { GetAPI, PostAPI, PatchAPI }