const baseURL = "http://localhost:3006/"

const publicURLS = {
    allPosts:           baseURL + "blog",
    post:               baseURL + "post/",
    contact:            baseURL + "message",
    auth:               baseURL + "login",
}

const adminURLS = {
    allMessages:        baseURL + "admin/messages",
    allVisits:          baseURL + "admin/visits",
    postCreate:         baseURL + "admin/post",
}

module.exports = { publicURLS, adminURLS };