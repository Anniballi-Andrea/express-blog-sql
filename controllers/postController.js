

const connection = require('../database/db-posts')

const index = (req, res) => {

    const sql = 'SELECT * FROM posts'

    connection.query(sql, (err, results) => {
        if (err) return res.status(500).json({ error: true, message: err.message })

        res.json(results)
    })

}

const show = (req, res) => {
    const id = Number(req.params.id)

    const sql = 'SELECT * FROM posts WHERE id = ?'

    connection.query(sql, [id], (err, results) => {
        if (err) {
            return res.status(500).json({ error: true, message: 'err.message' })
        } else if (results.length === 0) {
            return res.status(404).json({ error: true, message: 'Post Not Found' })
        }

        res.json(results)
    })


}

const store = (req, res) => {
    res.send(`your trying modify a part of a single post with id: ${req.params.id}`)


}

const update = (req, res) => {


    res.send(`your trying modify a part of a single post with id: ${req.params.id}`)
}

const modify = (req, res) => {
    res.send(`your trying modify a part of a single post with id: ${req.params.id}`)
}

const destroy = (req, res) => {
    const id = Number(req.params.id)

    const sql = 'DELETE FROM posts WHERE id = ?'

    console.log(sql, id)

    connection.query(sql, [id], (err, results) => {
        if (err) {
            return res.status(500).json({ error: true, message: err.message })
        } else if (results.affectedRows == 0) {
            console.log(results)
            return res.sendStatus(404)
        }
        return res.sendStatus(204)
    })


}
// const id = Number(req.params.id)

// const sql = 'DELETE FROM posts WHERE id = ?'
// console.log(sql, id)

// connection.query(sql, [id], (err, results) => {
//     if (err) return res.status(500).json({ error: true, message: err.message })
//     console.log(results);
//     return res.sendStatus(204)
// })



module.exports = {
    index,
    show,
    store,
    update,
    modify,
    destroy
}