import { MoviesList } from "../components/MoviesList";
import {Preloader} from "../components/Preloader";
import {Search} from "../components/Search";
import React from "react";

const API_KEY = process.env.REACT_APP_API_KEY; // достаём из env.local наш ключ API

class Main extends React.Component {
      state = {
        movies: [],
        loading: true
    }

    


  componentDidMount(){ //делаем запрос данных в методе жизненного цикла
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=Shrek`) //получаем данные из API, прилож. Postman
    .then(response => response.json()) //преобразуем ответ в JSON-объект
    .then(result => this.setState({movies: result.Search, loading: false})) //обрабатываем ответ: внутрь массива movies "кладём" то, что находится в ключе Searct (см. в Postman)
  }

  searchMovies = (str, type = 'all') => {
    this.setState({loading: true})
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${type !== 'all' ? `&type=${type}` : ''}`) //ищем фильмы по строке, которая подаётся в функцию из Search
    .then(response => response.json()) 
    .then(result => this.setState({movies: result.Search, loading: false}))
  }



  render() {
    const {movies, loading} = this.state;

    return (
      <main className="container content">

        <Search searchMovies={this.searchMovies}/>
        { loading ? <Preloader /> : (<MoviesList movies={movies}/>)} {/*если загрузка false, передаём массив movies в MoviesList */}
        


      </main>
    );
   }
}

export { Main };
