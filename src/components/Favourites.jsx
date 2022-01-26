import React from 'react';
import OneRecipe from './OneRecipe';

const Favourites = ({recipes}) => {
  return <div>

      <p>Omiljeni</p>
     { recipes.map((rec)=>(<OneRecipe recipe={rec} key={rec.id} inFav={0}/>))}
  </div>;
};

export default Favourites;
