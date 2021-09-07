import React from 'react' ;
import style from './recipe.module.css';

/* for each individual recipe box*/
const Recipe = ({title,calories,image,ingredients}) =>
{
    return (
      <>
     
        <div className={style.recipe}>
            
            <h1>{title}</h1>

            {
           <ul style={{ listStyleType: "none" }}>
             <b>  Ingredients list : </b>
              { ingredients.map(ingredient => (
                <li>{ingredient.text}</li> ))
              } 
            </ul> } 
            
            <p><b>Total Calories:{calories.toFixed(0)}</b></p>
            <img src={image} alt="image" className={style.image}/>
        </div>
        </>
    );
};

export default Recipe;
