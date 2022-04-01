const express = require('express');
const { spawn } = require('child_process')
const indexed_test_data = require('./indexed_test_data.json')

const app = express();

const PORT = process.env.PORT || 3001;

app.get('/api', (req, res) => {
  let dataResponse = ''
  const python = spawn('python3', ['lib/index_script.py'])

  python.stdout.on('data', function (data) {
    console.log('Pipe data from python script ...');
    dataResponse = data.toString();
    console.log(dataResponse)
  });
  python.stderr.on('data', (err) => {
    console.log(err.toString())
  })
  python.on('close', (exitCode) => {
    console.log(`python process closed with code ${exitCode}`)
    res.send(dataResponse)
  })
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});