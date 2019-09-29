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

Storage.list('')
    .then(result => {
        Storage.get(result[0].key)
            .then(result => console.log(result))
            .catch(err => console.log(err));
    })
    .catch(err => console.log(err));



function App() {
  return (
    <div className="App">
        TEST DEPLOY
        <img src='https://sunriver-display-s3-prod.s3-us-west-2.amazonaws.com/public/8_towhee_2019-09-28_19_20_29.jpg' alt="Logo" />
    </div>
  );
}

export default App;
