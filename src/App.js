import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [albums, setAlbums] = useState([]);
  const fetchData = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/albums`);
    const data = await response.json();
    await setAlbums(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {albums.length > 0 ? (
          <div>
            {albums.map((item) =>
              (String(item.id).includes("2") )? <div >{item.title}</div> : console.log("item") 
            )}
          </div>
        ) : (
          <div>
            <h3>No album found</h3>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
