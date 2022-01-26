import React from 'react';
import OneRecipe from './OneRecipe';


const Recipes = ({recipes,addFav}) => {
    
      
  return (
    <div className='all_recipes'>
        {recipes.map((rec)=>{
            return <OneRecipe recipe={rec} key={rec.id} inFav={1} addFav={addFav}/>;
        })}
    </div>);
};

export default Recipes;
