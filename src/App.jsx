import { fetchCharacters } from './data';
import { useEffect, useState } from 'react';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { CardsContainer, Card } from './components/Cards';

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetchCharacters()
      .then((data) => {
        console.log(data);
        setCharacters(data.slice(0, 8));
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <Header />

      <div className="cards-container">
        <figure className="card"></figure>
        <figure className="card"></figure>
        <figure className="card"></figure>
        <figure className="card"></figure>
        <figure className="card"></figure>
        <figure className="card"></figure>
        <figure className="card"></figure>
        <figure className="card"></figure>
      </div>

      <Footer />
    </>
  );
}

export default App;
