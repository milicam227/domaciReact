import React from 'react';
import OneRecipe from './OneRecipe';

const Favourites = ({recipes}) => {
  return <div>

      <h1 className='haFav'>Favourite recipes</h1>
     { recipes.map((rec)=>(<OneRecipe recipe={rec} key={rec.id} inFav={0}/>))}
  </div>;
};

export default Favourites;
