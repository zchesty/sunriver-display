import React from 'react';
import './App.css';
import { Auth, Storage } from 'aws-amplify';
import { S3Image } from 'aws-amplify-react';

const getKeys = async () => {
    let listKeys = await Storage.list('')
        .then(result => {
            return Promise.resolve(result);
        })
        .catch(err => console.log(err));
    return listKeys
};

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

let listKeys = getKeys();

console.log(listKeys);
function App() {
  return (
    <div className="App">
        <S3Image imgKey={listKeys[0].key} />
    </div>
  );
}

export default App;
