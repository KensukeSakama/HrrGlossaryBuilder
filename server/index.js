const express = require('express');
const parseString = require('xml2js').parseString;
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
  axios.get(`http://lookup.dbpedia.org/api/search/Search?QueryClass=software&MaxHits=3&QueryString=${word}`)
  .then((result) => {
    let data = result.data;
    parseString(data, (err, result) => {
      let allData = result.ArrayOfResults.Result
      let extract = [];
      allData.map(data => {
        console.log('data', data.Classes[0].Class);
        let category = data.Classes[0].Class;
        let notGame = true;
        for (let i = 0; i < category.length; i++) {
          if (category[i].Label[0] === "Video Game") {
            notGame = false;
          }
        }
        // console.log('string', category);
        if (notGame) {
          let oneData = {}
          oneData.label = data.Label;
          oneData.uri = data.URI;
          oneData.description = data.Description;
          oneData.classes = data.Classes;
          oneData.refcount = data.RefCount;
          extract.push(oneData)
        }
      })
      // console.log(allData);
      res.send(extract);
    });

  })
  .catch((err) => {
    console.log(err);
  })

})



