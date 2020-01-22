import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'

const INGREDIENT_PRICES = {
    salad : 12,
    cheese: 18,
    meat: 20,
    bacon: 10
}

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad:0,
            bacon: 0,
            cheese: 0,
            meat:0
        },
        totalPrice: 30
    }

    addIngredientHandler = (type) =>{
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type]
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice+ priceAddition;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients})
    }
    remoteIngredientHandler = (type) =>{
        const oldCount = this.state.ingredients[type];
        if(oldCount <=0){
           return;
        }
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCount;
        const priceDeduction = INGREDIENT_PRICES[type]
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients})
    }

    render () {
        const disableInfo ={
            ...this.state.ingredients
        }
        for (let key in disableInfo) {
            disableInfo[key] = disableInfo[key] <=0
        }
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls 
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved= {this.remoteIngredientHandler}
                    disabled= {disableInfo}
                    />
            </Aux>
        );
    }
}

export default BurgerBuilder;