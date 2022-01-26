import React from 'react';
import OneRecipe from './OneRecipe';


const Recipes = ({recipes}) => {
    
      
  return (
    <div className='all_recipes'>
        {recipes.map((rec)=>{
            return <OneRecipe recipe={rec} key={rec.id} inFav={1}/>;
        })}
    </div>);
};

export default Recipes;
