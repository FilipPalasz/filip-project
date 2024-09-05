import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function GameDetailPage() {
  const { id } = useParams(); // Get the game ID from URL parameters
  const [game, setGame] = useState(null); // Set initial state to null
  const navigate = useNavigate();

  useEffect(() => {
    const data = localStorage.getItem("games"); // Get games from local storage
    const gamesData = JSON.parse(data) || []; // Parse the data
    const selectedGame = gamesData.find((game) => game.id === id); // Find the game by its ID

    if (selectedGame) {
      setGame(selectedGame); // Set the selected game in the state
    }
  }, [id]);

  function handleDelete() {
    const data = localStorage.getItem("games");
    const gamesData = JSON.parse(data) || [];
    const updatedGames = gamesData.filter((game) => game.id !== id); // Remove the game
    localStorage.setItem("games", JSON.stringify(updatedGames)); // Save the updated list
    navigate("/"); // Navigate back to homepage after deletion
  }

  function handleUpdate() {
    navigate(`/edit-game/${id}`); // Navigate to the update form
  }

  if (!game) {
    return <div>Loading...</div>;
  }

  return (
    <div id="game-page" className="page">
      <div className="container">
        <h1>{game.gameName}</h1>
        <div className="game-details">
          <img
            src={game.image || "https://placehold.co/600x400?text=No+Image"}
            alt={game.gameName}
            className="game-image"
          />
          <ul>
            <li><strong>Time of Play:</strong> {game.timeOfPlay} minutes</li>
            <li><strong>Number of Players:</strong> {game.numberOfPlayers}</li>
            <li><strong>Difficulty:</strong> {game.difficulty}</li>
            <li><strong>Store:</strong> {game.store}</li>
            <li><strong>Tags:</strong> {game.tags}</li>
            <li><strong>Shelf Space:</strong> {game.shelfSpace}</li>
          </ul>
        </div>
        <div className="btns">
          <button className="btn-cancel" onClick={handleDelete}>
            Delete Game
          </button>
          <button onClick={handleUpdate}>Update Game</button>
        </div>
      </div>
    </div>
  );
}
