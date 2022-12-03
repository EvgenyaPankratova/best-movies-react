
import { MovieItem } from "./MovieItem";

function MoviesList(props){
    const {movies = []} = props; //по умолчанию movies - пустой массив 

        return (<div className="movies">
             {movies.length ? movies.map(movie => (
                <MovieItem key={movie.imdbID} {...movie}/>
                )) : <h4>Nothing found</h4>
            } {/*если в массиве movies что-то есть, проходимся по каждому элементу массива фильмов и передаем все пропсы в MovieItem через спред оператор*/}
            
        </div>
    );
}

export {MoviesList}