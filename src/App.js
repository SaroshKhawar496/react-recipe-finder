import React, { Component } from 'react';
import './App.css';

import Form from './components/Form';
import Recipes from './components/Recipes';

const RECIPE_API_KEY = '69636edda28df589735b58857ee097cc';


class App extends Component {
  state = {
    recipes: []
  }

  //making api call using async await
  getRecipe = async (e) => {
    // reading the recipe name from the search text box
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault(); //prevents the full page refresh!
    const api_call = await fetch(`https://www.food2fork.com/api/search?key=${RECIPE_API_KEY}&q=${recipeName}&count=5`);

    const data = await api_call.json();

    this.setState({recipes: data.recipes});

    console.log(this.state);

  }

  componentDidMount = () => {
    const json = localStorage.getItem('recipes');
      if (json != null){
      const recipes = JSON.parse(json);

      this.setState({recipes: recipes});
      }

  }

  // to store the inital search and see the result when come back to home
  componentDidUpdate = () => {
    const recipes = JSON.stringify(this.state.recipes);
    localStorage.setItem("recipes", recipes);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe Search</h1>
        </header>

        <Form getRecipe={this.getRecipe}/>
        <Recipes recipes={this.state.recipes} />


      </div>
    );
  }
}

export default App;