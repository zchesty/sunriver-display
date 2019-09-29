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

function App() {
  return (
    <div className="App">
        TEST DEPLOY
    </div>
  );
}

export default App;
