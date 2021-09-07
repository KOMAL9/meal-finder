import React , {useEffect, useState} from 'react' ;
import Recipe from './Recipe';
import './App.css';

function App() {

   const APP_ID = "168ba6a6";
   const APP_KEY = "b5edad914535a7df5755c820938a6ac6";

   /* State is set to whatever data comes back from the API .So , recipes = data.hits */

   const [recipes, setRecipes] = useState([]);

   
   const [search,setSearch] = useState("");



   /*The state submits itself after we click the button */
   const [query,setQuery] = useState('cheese');

  

/* Only runs when mounted and query changes */
   useEffect(() =>{
     getRecipes();
   },[query]);




   const getRecipes = async() => {
     const response = await fetch(
       `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
     );
     const data= await response.json();
  
      setRecipes([]);
      setRecipes(data.hits);
      /*now recipes(state variable) contains all the data fetched from API */
      console.log(data.hits);
   }
  


   const updateSearch = e =>
   {setSearch(e.target.value);
    console.log(search);
   }


   const getSearch = e =>
   {
     e.preventDefault();
     setQuery(search);
     setSearch("");
       getRecipes();
   }




  return (
    <div className="App">

     <form className="search-form" onSubmit={getSearch}>
       <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
       <button className="search-button" type="submit" style={{borderRadius:"2px"}}>SEARCH</button>
     </form>

     <div className="recipes">
     {recipes.map(recipe=>(
       <Recipe 
       key={recipe.recipe.label}
       title={recipe.recipe.label}
       calories={recipe.recipe.calories}
       image={recipe.recipe.image}
       ingredients={recipe.recipe.ingredients}
       />
     ))}
     </div>
    
    </div>
  );
};

export default App;
