import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [dogImg, setDogImg] = useState(null);
  const fetchDoggo = () => {
    setDogImg('');
    const opts = {
      headers: {
        mode: 'no-cors'
      }
    }
    fetch('http://localhost:8001/random_dog', opts)
      .then((res) => res.json())
      .then((dogInfo) => {
        setDogImg(dogInfo.message);
      });
  };

  useEffect(() => {
    if (dogImg == null) {
      fetchDoggo();
    }
  });

  return (
    <div>
      <header>
        <h3>Doggo of the day</h3>
        <div>
          <button onClick={() => fetchDoggo()}>New Doggo</button>
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
