import React from 'react';

const Result = props => (

    <form onSubmit={props.getRecipe} style={{ marginBottom:"2rem" }}>
        <input type="range" min="0" max="5000" defaultValue="4000" step="50" className=" slider" name="recipeCalorie" onInput={props.changeCalorie}/>
        <input className="form_input" type="text" name="recipeName"/>
        <button className="form_button" >Search</button>
    </form>
);


export default Result;