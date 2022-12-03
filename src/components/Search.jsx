import React from "react";

class Search extends React.Component {
  state = {
    search: "",
    type: 'all'
  };

  handleKey = (event) => {
    if (event.key === "Enter") {
      this.props.searchMovies(this.state.search); //обрабатываем нажатие Enter. получаем функцию из Main
    }
  };

  handleFilter = (event) => { 
     this.setState(() => ({type: event.target.dataset.type}), () => { //считываем  с помощью dataset значение атрибута data(у нас type), и передаём в state type 
      this.props.searchMovies(this.state.search, this.state.type) //вызываем функцию из Main тогда, когда зна-е type обновлено
     }) 
   
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="input-field ">
            <i className="prefix">👉</i>
            <input
              placeholder="Search movie"
              type="search"
              className="validate"
              value={this.state.search}
              onChange={(event) =>
                this.setState({ search: event.target.value })
              } //записываем в состояние search то, что вводит пользователь
              onKeyDown={this.handleKey}
            />
            <button
              className="search-btn btn teal darken-4"
              onClick={() => this.props.searchMovies(this.state.search, this.state.type)}
            >
              Search
            </button>
          </div>
        </div>

        <div className="type-form" >
            <label>
              <input name="type" type="radio"  
              data-type="all"  /*добавляем дата-атрибут, каждому инпуту свой */
              onChange={this.handleFilter}
              checked={this.state.type === 'all'}
              />  
              <span>All</span>
            </label>

            <label>
              <input name="type" 
              type="radio" 
              data-type="movie" 
              onChange={this.handleFilter}
              checked={this.state.type === 'movie'}
              />
              <span>Movies only</span>
            </label>

            <label >
              <input name="type" 
              type="radio"  
              data-type="series" 
              onChange={this.handleFilter}
              checked={this.state.type === 'series'}
              />
              <span >Series only</span>
            </label>

        </div>
      </div>
    );
  }
}

export { Search };
