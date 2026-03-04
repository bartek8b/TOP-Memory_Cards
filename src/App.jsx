function App() {
  return (
    <>
        <header>
            <h1>Memory Cards</h1>
            <div className="scores-container">
                <p>Score: 0</p>
                <p>Best: 0</p>
            </div>
        </header>

      <div className="cards-container"></div>

      <a
        href="https://github.com/bartek8b"
        target="_blank"
        rel="noopener noreferrer"
        className="signature"
      >
        Created by Bartlomiej Balcerzak
      </a>
    </>
  );
}

export default App;
