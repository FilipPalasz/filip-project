export default function Game({ game }) {
    return (
      <article className="user-card">
        <img
          src={game.image || "https://placehold.co/600x400?text=No+image"}
          alt={game.gameName}
        />
        <h2>{game.gameName}</h2>
        <p>Time of Play: {game.timeOfPlay} mins</p>
        <p>Players: {game.numberOfPlayers}</p>
        <p>Difficulty: {game.difficulty}</p>
        <p>Store: {game.store}</p>
        <p>Tags: {game.tags}</p>
        <p>Shelf Space: {game.shelfSpace}</p>
      </article>
    );
  }
  