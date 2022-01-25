import React from 'react';
import {AiOutlineLike} from "react-icons/ai"
import {AiOutlineHeart} from "react-icons/ai"

function OneRecipe() {
  return (
  <div className="card"> 
    <img className="card-img" src="https:/picsum.photos/200" alt="Photo"/>
    <div className="card-body">
        <h3 className="card-title">Recipe</h3>
        <p className="card-text">This is the recipe</p>
    </div> 

    <AiOutlineLike className='like'/>
    <AiOutlineHeart className='heart'/>


  </div>);
}

export default OneRecipe;
