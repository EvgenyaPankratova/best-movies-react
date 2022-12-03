function MovieItem(props) {
  const {
    //исп. деструктуризацию и переименовываем объекты с маленькой буквы(они приходят из API с большой)
    Title: title,
    Year: year,
    imdbID: imdbID,
    Type: type,
    Poster: poster,
  } = props;

  return (
    <div>

          <div  className="card movie">
            <div className="card-image">

              {poster === 'N/A' ? <img src={`https://via.placeholder.com/300x420?text=${title}`} /> : <img src={poster} />}
          
            </div>
            <div className="card-content">
              <span className="movie-title card-title activator grey-text text-darken-4">
                {title}<i className="type material-icons right">{type}</i>
              </span>
              <p>
                {year}
              </p>
            </div>
          </div>
        </div>

  );
}

export { MovieItem };
