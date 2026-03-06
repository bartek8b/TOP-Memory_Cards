export function Card({ className, id, src, name, onClick }) {
  return (
    <figure className={className} id={id} onClick={onClick}>
      <img src={src} alt={name} />
      <figcaption>{name}</figcaption>
    </figure>
  );
}

export function CardsContainer({ children }) {
  return <div className="cards-container">{children}</div>;
}
