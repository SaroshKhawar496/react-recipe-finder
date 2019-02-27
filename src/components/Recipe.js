import React, {Component} from 'react';

import {Link} from 'react-router-dom';

const RECIPE_API_KEY = '69636edda28df589735b58857ee097cc';

class Recipe extends Component {
    state = {
        activeRecipe: []
    }

    componentDidMount = async () => {

        const title = this.props.location.state.recipe;

        const req = await fetch(`https://www.food2fork.com/api/search?key=${RECIPE_API_KEY}&q=${title}`);
    
        const res = await req.json();

        this.setState({ activeRecipe: res.recipes[0]});

    
    }

    render() {
        const recipe = this.state.activeRecipe;
        return(
            <div className="container">
            {/* content shows only if active recipe is filled */}
                { this.state.activeRecipe.length !== 0 &&
                    <div className='active-recipe'>
                    <img className="active-recipe__img" src={recipe.image_url} alt={recipe.title}/>
                    <h3 className="active-recipe__title">{recipe.title}</h3>
                    
                    <h4 
                    className="active-recipe__publisher">
                        Publisher: <span>{recipe.publisher}</span>
                    </h4>
                    <p className="active-recipe__website">
                        <span>  <a href={recipe.publisher_url}>{recipe.publisher_url} </a> </span>
                    </p>
                    <button 
                    className="active-recipe__button">
                    <Link to='/' >
                        Go Home 
                    </Link>
                    </button>

                </div>
                

                }
            </div>

        )
    }
}

export default Recipe;