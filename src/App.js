import { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/Card-list-component";
import { Search } from "./components/search-component/Search-component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }
  ChangeHandler = (e) => {
    this.setState({ searchField: e.target.value });
  };
  render() {
    const { monsters, searchField } = this.state;
    const FilteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Search Monsters</h1>
        <Search
          placeholder="search mosters"
          ChangeHandler={this.ChangeHandler}
        />
        <h3>names with search {this.state.searchField}</h3>
        <CardList monsters={FilteredMonsters} />
      </div>
    );
  }
}

export default App;
