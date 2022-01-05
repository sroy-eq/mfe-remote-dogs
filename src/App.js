import PubSub from 'pubsub-js';
import React, { useEffect, useState } from 'react';
import './App.css';

const MFE_TOPIC = 'MFE Topic';
const topicSubscriber = (msg, data) => {
  console.log("Received message in dogs MFE");
  console.log("msg: ", msg);
  console.log("data: ", data);
};
PubSub.subscribe(MFE_TOPIC, topicSubscriber);

function App() {
  const [dogImg, setDogImg] = useState(null);
  const fetchDoggo = () => {
    setDogImg('');
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((res) => res.json())
      .then((dogInfo) => {
        setDogImg(dogInfo.message);
      });
  };

  useEffect(() => {
    if (dogImg == null) {
      fetchDoggo();
    }
  }, [dogImg]);

  return (
    <div>
      <header>
        <h3>Doggo of the day</h3>
        <div>
          <button onClick={() => {
            const randomId = (Math.random() + 1).toString(36).substring(7);
            PubSub.publish(MFE_TOPIC, randomId);
            fetchDoggo();
          }}>New Doggo</button>
        </div>
        {dogImg !== "" ? (
          <div>
            <img src={dogImg} witdth="400px" alt="Doggo"></img>
          </div>
        ) : (
          <div>Loading Img</div>
        )}

      </header>
    </div>
  );
}

export default App;
