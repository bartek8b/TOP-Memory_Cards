import { fetchCharacters } from './data';
import { useEffect, useState } from 'react';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Commentary } from './components/Commentary';
import { CardsContainer, Card } from './components/Cards';
import { shuffleArray } from './utils';

function App() {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // length of clicked also serves as score
  const [clicked, setClicked] = useState([]);
  const [best, setBest] = useState(0);
  const [commentary, setCommentary] = useState(
    "Don't click on the same character twice to get point!",
  );
  const [isAnimating, setIsAnimating] = useState(true);
  const [isGameOver, setIsGameOver] = useState(false);

  // Render pictures & names from db
  useEffect(() => {
    fetchCharacters()
      .then((data) => {
        setCharacters(data.slice(0, 8));
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  function handleClick(id) {
    setIsAnimating(false);

    const shuffled = shuffleArray(characters);
    setCharacters(shuffled);

    if (isGameOver) {
      setIsGameOver(false);
      setClicked([id]);
      setCommentary('New game started! Score++');
      setTimeout(() => setIsAnimating(true), 10);
      return;
    }
    if (clicked.includes(id)) {
      setIsGameOver(true);
      setCommentary('You clicked twice on the same character! Try again!');
    } else {
      const newClicked = [...clicked, id];
      setClicked(newClicked);
      setCommentary('Nice! Score++');
      if (newClicked.length > best) {
        setBest(newClicked.length);
        setCommentary('Very good! You set new record!');
      }
      if (newClicked.length === 8) {
        setCommentary(
          'Game over! You were flawless! Will you repeat this achievement?',
        );
        setIsGameOver(true);
      }
    }

    setTimeout(() => setIsAnimating(true), 10);
  }

  return (
    <>
      <Header score={clicked.length} best={best} />

      <Commentary
        message={commentary}
        className={isAnimating ? 'animate' : ''}
      />

      <CardsContainer>
        {isLoading ? (
          <div className="loader">Loading...</div>
        ) : (
          characters.map((ch) => (
            <Card
              key={ch.id}
              className={`card ${isAnimating ? 'animate' : ''}`}
              id={ch.id}
              src={`https://image.tmdb.org/t/p/w400/${ch.profile_path}`}
              name={ch.character}
              onClick={() => handleClick(ch.id)}
            />
          ))
        )}
      </CardsContainer>

      <Footer />
    </>
  );
}

export default App;
