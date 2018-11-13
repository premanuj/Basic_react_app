import axios from "axios"

const Request = (url, type) => ({
    "get": axios.get(url),
    "post": axios.post(url),
    "delete": axios.delete(url),
    "put": axios.put(url),
    "patch": axios.patch(url)
})[type]

const get = (url) => {
    return axios.get(url)

}

const post = (url) => {
    return axios.post(url)
}

const put = (url) => {
    return axios.put(url)
}

const patch = (url) => {
    return axios.patch(url)
}

const deletes = (url) => {
    return axios.delete(url)
}



export { get, post, put, patch, deletes }