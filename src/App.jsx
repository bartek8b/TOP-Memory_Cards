import { fetchCharacters } from './data';
import { useEffect, useState } from 'react';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { CardsContainer, Card } from './components/Cards';

function App() {
  const [characters, setCharacters] = useState([]);
  // length of clicked also serves as score
  const [clicked, setClicked] = useState([]);
  const [best, setBest] = useState(0);

  // Render pictures & names from db
  useEffect(() => {
    fetchCharacters()
      .then((data) => {
        console.log(data);
        setCharacters(data.slice(0, 8));
      })
      .catch((err) => console.error(err));
  }, []);

  function handleClick(id) {
    if (clicked.includes(id)) {
      setClicked([]);
    } else {
      const newClicked = [...clicked, id];
      setClicked(newClicked);
      if (newClicked.length > best) {
        setBest(newClicked.length);
      }
    }
  }

  return (
    <>
      <Header score={clicked.length} best={best} />

      <CardsContainer>
        {characters.map((ch) => (
          <Card
            key={ch.id}
            className="card"
            id={ch.id}
            src={`https://image.tmdb.org/t/p/w400/${ch.profile_path}`}
            name={ch.character}
            // Without arrow function would fire immidiately at render and causes infinite loop of renders > app crashes
            onClick={() => handleClick(ch.id)}
          />
        ))}
      </CardsContainer>

      <Footer />
    </>
  );
}

export default App;
