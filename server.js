const express = require('express')
const app = express()
const PORT = 3000
const postsRouter = require('./Routes/posts')
const notFound = require('./middleware/notFound')
const errorsHandler = require('./middleware/errorsHandler')



app.use(express.static('public'))
app.use(express.json())


app.get('/', (req, res) => {
    res.send('welcome in my blog')
})


app.use('/posts', postsRouter)


app.listen(PORT, () => {
    console.log("server is running")
})


app.use(errorsHandler)
app.use(notFound)