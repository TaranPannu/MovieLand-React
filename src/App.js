
import React, { useState, useEffect } from "react";

import MovieCard from "./MovieCard";
import SearchIcon from "./logo.svg";
import "./App.css";

const API_URL = 'https://www.omdbapi.com/?apikey=f87922ed';

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    searchMovies("Batman");
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies"
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;



















//to learn
// App.js
/*import React, { useEffect, useState } from "react";

const API_URL = 'https://www.omdbapi.com/?apikey=f87922ed';

const App = () => {
  //const [movies, setMovies] = useState([]);
  //const [error, setError] = useState(null);

  const searchMovies = async (title) => {
   /* try {
      const response = await fetch(`${API_URL}&s=${title}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      if (data.Response === "True") {
        setMovies(data.Search);
        setError(null);
      } else {
        setError(data.Error);
      }
    } catch (error) {
      setError('An error occurred while fetching data.');
    }
  };

 

  return (
    <div>
      <h1>Movie Search</h1>
      
    </div>
  );
};

export default App;

*/
/* import {useEffect, useState} from "react";
import './App.css';

const App = () => {
const [counter,setCounter]=useState(0);

useEffect(()=>{
  //whenever we will reload the page this will get reloaded.
  alert("page reloaded")
},[])
  return(<div className="App">
    <button onClick={()=> setCounter((prevCount)=>prevCount-1)}>-</button>
    <h1>{counter}</h1><br/>
    <button onClick={()=>setCounter((prevCount)=>prevCount+1)}>+</button>
  </div>);
}
*/

/* to use prop->
  const name = "Johnny";

return (
    <div className="App">
      <Person name={name} age={12} />
      <Person />
      <Person />
    </div>
  );
   */
/* const Person = (props) => { // Receive the 'props' parameter here
  return (
    <>
      <h1>Name: {props.name}</h1>
      <h2>Age:{props.age}</h2>
    </>
  );
}

export default App; */
//props--props allow to pass dynamic data through react components ,argumensts that we pass into react components
//React state- state is a plain js object used by react to represent piece of info abt to components current situation
//Event ia a action that can be triggered of user action or some kind of system generated event 