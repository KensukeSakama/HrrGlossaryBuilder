const express = require('express');
const path = require('path');
const app = express();
const port = 3030;
// const wiki = require('./wiki.js');
const axios = require('axios');

app.use(express.json());
app.use(express.static(path.join('public')));


app.listen(port, () => {
  console.log('listening to port ' + port);
})

app.get('/api/:word', (req, res) => {
  let word = req.params.word;
  console.log(word);
  console.log(wiki.getData(word))
  axios.get('http://lookup.dbpedia.org/api/search/PrefixSearch?QueryClass=software&MaxHits=5&QueryString=react').then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  })

})



