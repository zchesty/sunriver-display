import React from 'react';
import './App.css';
const AWS = require('aws-sdk');

const accessKeyId = 'AKIAJ6EKOFVEQDNOL5LA';
const secretAccessKey = '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';

AWS.config.update({accessKeyId: accessKeyId, secretAccessKey: secretAccessKey});

const s3 = new AWS.S3();

let params = {
    Bucket: "sunriver-display-s3-prod"
};

s3.listObjects(params, function(err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else console.log(data);
});

function App() {
  return (
    <div className="App">
        TEST DEPLOY
    </div>
  );
}

export default App;
