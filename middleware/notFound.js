function notFound(req, res, next) {

    res.status(404)
    res.json({
        error: "not Found",
        message: "page not found"
    })
}

module.exports = notFound