import { MoviesList } from "../components/MoviesList";
import {Preloader} from "../components/Preloader";
import {Search} from "../components/Search";
import React, {useState, useEffect} from "react";

const API_KEY = process.env.REACT_APP_API_KEY; // достаём из env.local наш ключ API

function Main () {

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  



  const searchMovies = (str, type = 'all') => {
    setLoading(true)
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${type !== 'all' ? `&type=${type}` : ''}`) //ищем фильмы по строке, которая подаётся в функцию из Search
    .then(response => response.json()) 
    .then((result) => {setLoading(false); setMovies(result.Search)})
    .catch((err) => {
      console.error(err);
      setLoading(false);
    })
  }

  useEffect( () => {
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=Shrek`) //получаем данные из API, прилож. Postman
    .then(response => response.json()) //преобразуем ответ в JSON-объект
    .then((result) => {setLoading(false); setMovies(result.Search)}) //обрабатываем ответ: внутрь массива movies "кладём" то, что находится в ключе Searct (см. в Postman)
    .catch((err) => {
      console.error(err);
      setLoading(false)
    })
  }, [])

    return (
      <main className="container content">

        <Search searchMovies={searchMovies}/>
        { loading ? <Preloader /> : (<MoviesList movies={movies}/>)} {/*если загрузка false, передаём массив movies в MoviesList */}
        


      </main>
    );
   
}

export { Main };
