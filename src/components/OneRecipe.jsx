import React, { useState } from 'react';
import {AiOutlineLike} from "react-icons/ai"
import {AiOutlineHeart} from "react-icons/ai"

function OneRecipe({recipe, addFav, inFav }) {

    const [likeNum, setLikeNum] = useState(0);


    function addLike(){
        console.log("Dodat like" +likeNum);
        setLikeNum(likeNum+1);
        
    }

    
  return (
  <div className={inFav===1 ? "card" : "favCard"}> 
    <img className="card-img" src="https:/picsum.photos/200" alt="Photo"/>
    <div className="card-body">
        <h3 className="card-title">{recipe.title}</h3>
        <p className="card-text">{recipe.description}</p>
    </div> 


    {inFav === 1 ?(
    <div>
        <button className="like" onClick={addLike}>
            <AiOutlineLike/>
        </button>
        <p className='likesNum'>{likeNum}</p>
        <button className="heart"  onClick={()=>addFav(recipe.title,recipe.id)}>
            <AiOutlineHeart/>
        </button>
    </div>):
    (<></>)}

    


  </div>);
}

export default OneRecipe;
