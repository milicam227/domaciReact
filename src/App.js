
import './App.css';
import NavigationBar from './components/NavigationBar';
import Recipes from './components/Recipes';
import {useState} from 'react';
import Favourites from './components/Favourites';
import {BrowserRouter,Routes,Route, Link} from "react-router-dom"

function App() {

  const recipes = [
    {
      id: 1,
      title: "Triple Chocolate Chunk Cookies",
      description:
        "Large or small, these triple chocolate cookies are crispy on the outside and chewy on the inside.",
      amount: 0,
    },
    {
      id: 2,
      title: "One Bowl Chocolate Cake ",
      description:
        "This is a rich and moist chocolate cake. It only takes a few minutes to prepare the batter. Frost with your favorite chocolate frosting.",
      amount: 0,
    },
    {
      id: 3,
      title: "Ice Cream",
      description:
        "Make homemade ice cream in exactly the flavor you crave. 31 flavors? We've got way more including peach, pumpkin, even coconut-avocado.",
      amount: 0,
    },
    {
        id: 4,
        title: "Cheesecake",
        description:
          "Baked or no-bake, dark chocolate or white chocolate, you'll find the cheesecake you're looking for right here. A chocolate lover's delight! Top with cherry pie filling or sweetened strawberries.",
        amount: 0,


    },
  ];

  function onFav(){
    console.log("App")
  }

  return (
    <BrowserRouter className="App">
      <NavigationBar></NavigationBar>
     
      <Routes>
        <Route path="/" element={<Recipes recipes={recipes} onFav={onFav}/>}/>
        <Route path="/favourites" element={<Favourites recipes={recipes}/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
