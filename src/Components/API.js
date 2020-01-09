export const APILINK = "http://localhost:3000"
// export const APIUSERS = `${APILINK}/users`
// export const APIPOSTS = `${APILINK}/posts`
// export const APISAVEPOST = `${APILINK}/save_posts`
// export const APIADMIN = `${APILINK}/admins`

const headers = {
    Accept: "application/json",
    "Content-Type": "application/json"
} 

export const GetAPI = (url) => fetch(url).then(res => res.json())
export const PostAPI = (url, postInfo) => fetch(url, { method: "POST", headers: headers, body: JSON.stringify(postInfo)}).then(resp => resp.json())
export const PatchAPI = (url, patchInfo) => fetch(url, { method: "PATCH", headers: headers, body: JSON.stringify(patchInfo)}).then(resp => resp.json())
export const DeleteAPI = (url, deleteInfo) => fetch(url, { method: "DELETE", headers: headers, body: JSON.stringify(deleteInfo)})

export const API = { GetAPI, PostAPI, PatchAPI, DeleteAPI }