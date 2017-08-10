const express = require('express')
const pug = require('pug')
const app = express()

app.set('view engine', 'pug');
app.use(express.static('./public'));
app.use(express.static('../public'));

app.get('/', function (req, res) {
  res.render('index.pug');
})

app.listen(3000, function () {
  console.log('Lovely server listening on port 3000!')
})
