import { useState, useEffect } from 'react';
import './App.css';
import Profile from './Profile'; // Asegúrate de que el archivo Profile.js exista en la misma carpeta

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://catfact.ninja/facts')
      .then(response => response.json())
      .then(data => setData(data.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="App">
      <h1>Cat Facts</h1>
      <div className="card-container">
        {data?.map((fact, index) => (
          <div className="card" key={index}>
            <Profile src="https://img.freepik.com/foto-gratis/adorable-gatito-blanco-negro-pared-monocromatica-detras-ella_23-2148955182.jpg?w=360&t=st=1722955138~exp=1722955738~hmac=96d99600efa1a05ec3d4dfeac9124892496f9185c8ff019114798505bf06c3a4" alt={`Cat ${index + 1}`} />
            <p>{fact.fact}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
