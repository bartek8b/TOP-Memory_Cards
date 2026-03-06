export function Header({ score, best }) {
  return (
    <header>
      <h1>
        <span className="logo-letters">Br</span>{' '}
        <span className="logo-letters">Ba</span> Memory Cards
      </h1>
      <div className="scores-container">
        <p>Score: {score}</p>
        <p>Best: {best}</p>
      </div>
    </header>
  );
}
