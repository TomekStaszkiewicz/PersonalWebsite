const baseURL = "http://localhost:3006/"

const publicURLS = {
    allPosts:           baseURL + "blog",
    post:               baseURL + "post/",
    contact:            baseURL + "message",
    auth:               baseURL + "login",
    getPhoto:           baseURL + "image/",
}

const adminURLS = {
    allMessages:        baseURL + "admin/messages",
    allVisits:          baseURL + "admin/visits",
    allPosts:           baseURL + "admin/post",
    postCreate:         baseURL + "admin/post",
    deleteMessage:      baseURL + "admin/messages/delete/",
    deletePost:         baseURL + "admin/post/delete/"
}

module.exports = { publicURLS, adminURLS };