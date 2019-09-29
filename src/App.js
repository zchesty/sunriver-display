import React from 'react';
import './App.css';
import { Auth, Storage } from 'aws-amplify';

Auth.configure({
    identityPoolId: 'us-west-2:51ea7eb7-65f7-430e-930d-bfe50c04509f',
    region: 'us-west-2'}
);

Storage.configure({
    AWSS3: {
        bucket: 'sunriver-display-s3-prod',//Your bucket name;
        region: 'us-west-2'
    }
});

Storage.get('requirements.txt')
    .then(result => console.log(result))
    .catch(err => console.log(err));

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
