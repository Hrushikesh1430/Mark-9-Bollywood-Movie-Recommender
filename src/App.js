import "./styles.css";
import { useState } from "react";

export default function App() {
  const movies_dict = [
    {
      genre: "Horror",
      content: [
        {
          title: "Stree",
          rating: "5/5"
        },
        {
          title: "Go Goa Gone",
          rating: "4.5/5"
        }
      ]
    },
    {
      genre: "Comedy",
      content: [
        {
          title: "Bhool Bhulaiya",
          rating: "5/5"
        },
        {
          title: "Shershah",
          rating: "4/5"
        }
      ]
    },
    {
      genre: "Action",
      content: [
        {
          title: "Sooryavanshi",
          rating: "5/5"
        },
        {
          title: "Khiladi 786",
          rating: "4.5/5"
        }
      ]
    }
  ];

  const [movieList, setMovieList] = useState({});
  const genreHandler = (value) => {
    const select_genre = value;
    var temp_movie = movies_dict.filter((item) => {
      return item.genre === select_genre;
    });
    setMovieList(temp_movie);
  };

  return (
    <div className="App">
      <div className="container">
        <h1>My Bollywood Movie Recommender</h1>
        <div className="filter_buttons">
          {movies_dict.map((item, index) => {
            return (
              <button key={index} onClick={() => genreHandler(item.genre)}>
                {item.genre}
              </button>
            );
          })}
        </div>
        <div className="movies">
          {Object.keys(movieList).length === 0 ? (
            <p>Select your favourite genre to get recommended movies</p>
          ) : (
            Object.values(movieList).map((item) =>
              item.content.map((item2, index) => {
                return (
                  <div className="card" key={index}>
                    <p className="title">{item2.title}</p>
                    <hr />
                    <p className="rating"> {item2.rating}</p>
                  </div>
                );
              })
            )
          )}
        </div>
      </div>
    </div>
  );
}
