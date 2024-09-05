import { useEffect, useState } from "react";
import Game from "../components/Game";

export default function HomePage() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    initializeGames(); // Initialize and merge default games if none exist
    getGames();

    function getGames() {
      const data = localStorage.getItem("games");
      let gamesData = [];

      if (data) {
        gamesData = JSON.parse(data);
      }

      const defaultGames = getDefaultGames(); // Get default games array
      // Merge default games with any existing games (prevent duplicates based on ID)
      const mergedGames = [...defaultGames, ...gamesData.filter(game => !defaultGames.some(defaultGame => defaultGame.id === game.id))];

      setGames(mergedGames);
    }

    function initializeGames() {
      const data = localStorage.getItem("games");

      // Initialize localStorage if it doesn't exist
      if (!data) {
        localStorage.setItem("games", JSON.stringify([])); // Start with an empty array
      }
    }

    function getDefaultGames() {
      return [
        {
          id: "1",
          gameName: "Cards Against Humanity",
          timeOfPlay: "30",
          numberOfPlayers: "4-16",
          difficulty: "Easy",
          image: "https://miro.medium.com/v2/resize:fit:1400/1*nlbn4eiSld59snNZWOsS3A.jpeg",
          store: "Vestergade",
          tags: "Mature, Popular, Party",
          shelfSpace: "B4",
        },
        {
          id: "2",
          gameName: "Ticket to Ride: Europe 15th Anniversary Ed.",
          timeOfPlay: "30-60",
          numberOfPlayers: "2-5",
          difficulty: "Easy",
          image: "https://digitalassets.sallinggroup.com/image/upload/e_trim/b_white,c_pad,e_sharpen:80,f_auto,q_auto,w_464,h_464/901d8098-081b-4327-897f-7529cf5728e2",
          store: "Fredensgade",
          tags: "Strategy, Family",
          shelfSpace: "A1",
        },
        {
          id: "3",
          gameName: "Trivial Pursuit: Classic Edition",
          timeOfPlay: "45-90",
          numberOfPlayers: "2-6",
          difficulty: "Easy",
          image: "https://image.bog-ide.dk/2007922-159067-1000-1000/webp/0/828/2007922-159067-1000-1000.webp",
          store: "Aalborg",
          tags: "Trivia, Family",
          shelfSpace: "I1",
        },
      ];
    }
  }, []);

  return (
    <div className="page">
      <section className="grid">
        {games.map((game) => (
          <Game key={game.id} game={game} />
        ))}
      </section>
    </div>
  );
}
