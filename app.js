const express = require ('express')
const port = 8080;

const app = express();

app.get ('/', (req, res) => {
    res.send('Node.js app')
})
app.get ('/about', (req, res) => {
    res.send('About this app')
})

app.listen(port, () => console.log('slucham'))