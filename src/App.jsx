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

  function handleClick() {
    // to be filled
  }

  return (
    <>
      <Header />

      <CardsContainer>
        {characters.map((ch) => (
          <Card
            className="card"
            id={ch.id}
            src={`https://image.tmdb.org/t/p/w400/${ch.profile_path}`}
            name={ch.character}
            onClick={handleClick}
          />
        ))}
      </CardsContainer>

      <Footer />
    </>
  );
}

export default App;
