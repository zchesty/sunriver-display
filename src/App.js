import React, { useState } from 'react';
import './App.css';
import { Auth, Storage } from 'aws-amplify';
import { S3Image } from 'aws-amplify-react';


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

function App() {
    const [img, setImg] = useState('');

    Storage.list('').then((listkeys) => {
        setImg(listkeys[0])
    });

    return (
        <div className="App">
            <S3Image imgKey={img.key} />
        </div>
  );
}

export default App;
