import React, {useState} from "react";

const Search = (props) =>  {
  const {
    searchMovies = Function.prototype, //делаем дестр. присв. из пропсов + устанавливаем значение по умолчанию для searchMovies: это некая функция (чтобы в случае если функция не передана, код не ломался)
  } = props;

  const [search, setSearch] = useState('');
  const [type, setType] = useState('all');

  const handleKey = (event) => {
    if (event.key === "Enter") {
      searchMovies(search, type); //обрабатываем нажатие Enter. получаем функцию из Main
    }
  };

  const handleFilter = (event) => { 
      setType(event.target.dataset.type); //считываем  с помощью dataset значение атрибута data(у нас type), и передаём в state type 
      searchMovies(search, event.target.dataset.type);  //вызываем функцию из Main тогда, когда зна-е type обновлено
     };
   
    return (
      <div>
        <div className="row">
          <div className="input-field ">
            <i className="prefix">👉</i>
            <input
              placeholder="Search movie"
              type="search"
              className="validate"
              value={search}
              onChange={(event) =>
                setSearch(event.target.value)
              } //записываем в состояние search то, что вводит пользователь
              onKeyDown={handleKey}
            />
            <button
              className="search-btn btn teal darken-4"
              onClick={() => searchMovies(search, type)}
            >
              Search
            </button>
          </div>
        </div>

        <div className="type-form" >
            <label>
              <input name="type" type="radio"  
              data-type="all"  /*добавляем дата-атрибут, каждому инпуту свой */
              onChange={handleFilter}
              checked={type === 'all'}
              />  
              <span>All</span>
            </label>

            <label>
              <input name="type" 
              type="radio" 
              data-type="movie" 
              onChange={handleFilter}
              checked={type === 'movie'}
              />
              <span>Movies only</span>
            </label>

            <label >
              <input name="type" 
              type="radio"  
              data-type="series" 
              onChange={handleFilter}
              checked={type === 'series'}
              />
              <span >Series only</span>
            </label>

        </div>
      </div>
    );
}

export { Search };
