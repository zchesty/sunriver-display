import React from 'react';
import './App.css';
import { Auth, Storage } from 'aws-amplify';

Storage.configure({
    AWSS3: {
        bucket: 'sunriver-display-s3-prod',//Your bucket name;
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
