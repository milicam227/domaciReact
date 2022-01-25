import React, { useState } from 'react';
import {AiOutlineLike} from "react-icons/ai"
import {AiOutlineHeart} from "react-icons/ai"

function OneRecipe(props) {
 /*   let likes=0;*/

    const [likeNum, setLikeNum] = useState(0);


    function addLike(){
        console.log("Dodat like" +likeNum);
        setLikeNum(likeNum+1);
    }
  return (
  <div className="card"> 
    <img className="card-img" src="https:/picsum.photos/200" alt="Photo"/>
    <div className="card-body">
        <h3 className="card-title">{props.recipe.title}</h3>
        <p className="card-text">{props.recipe.description}</p>
    </div> 



    <button className="like" onClick={addLike}>
        <AiOutlineLike/>
    </button>
    <p className='likesNum'>{likeNum}</p>
    <AiOutlineHeart className='heart'/>


  </div>);
}

export default OneRecipe;
