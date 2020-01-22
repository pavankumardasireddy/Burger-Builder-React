import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const burger = (props) => {
    let transforemdIngredients = Object.keys(props.ingredients)
    .map(igKey => {
        return [...Array(props.ingredients[igKey])].map((_, i)=>{
            return <BurgerIngredient key={igKey+i}
 type={igKey} />;
        });
    })
    .reduce((arr, el) => {
        return arr.concat(el)
    }, []);

    if(transforemdIngredients.length === 0) {
        transforemdIngredients = <p>Please start adding ingredients!</p>
    }
    return (
        <div className="Burger">
            <BurgerIngredient type="bread-top" />
            {transforemdIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
}

export default burger;