import React from 'react';
import './App.css';
import { Amplify, Storage } from 'aws-amplify';

Amplify.configure({
    Auth: {identityPoolId: 'us-west-2:51ea7eb7-65f7-430e-930d-bfe50c04509f',
        region: 'us-west-2',
        userPoolId: 'us-west-2_MnMUZ7eqy', //OPTIONAL - Amazon Cognito User Pool ID
        userPoolWebClientId: '4mvobjner1f9vq9t5g50g8ve1c', //OPTIONAL - Amazon Cognito Web Client ID
    },
    Storage: {
        AWSS3: {
            bucket: 'sunriver-display-s3-prod',//Your bucket name;
            region: 'us-west-2'
        }
    }
});

Storage.list('/')
    .then(result => console.log(result))
    .catch(err => console.log(err));

function App() {
  return (
    <div className="App">
        TEST DEPLOY
    </div>
  );
}

export default App;
