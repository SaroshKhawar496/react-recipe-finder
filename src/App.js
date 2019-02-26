import React, { Component } from 'react';
import './App.css';

import Form from './components/Form'

const RECIPE_API_KEY = '69636edda28df589735b58857ee097cc';


class App extends Component {

  //making api call using async await
  getRecipe = async (e) => {
    // reading the recipe name from the search text box
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault(); //prevents the full page refresh!
    const api_call = await fetch(`https://www.food2fork.com/api/search?key=${RECIPE_API_KEY}&q=chicken&count=5`);

    const data = await api_call.json();

    console.log(data);

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe Search</h1>
        </header>

        <Form getRecipe={this.getRecipe}/>

      </div>
    );
  }
}

export default App;