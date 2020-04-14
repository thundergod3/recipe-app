import React from "react";

const RecipeItem = (props) => {
	const { recipeItem } = props;
	const { recipe } = recipeItem;
	const { label, calories, image, ingredients } = recipe;

	return (
		<div className="recipe">
			<h1>{label}</h1>
			<ol>
				{ingredients.map((ingredient, index) => (
					<li key={index}>{ingredient.text}</li>
				))}
			</ol>
			<p>{calories}</p>
			<img src={image} alt="food image" />
		</div>
	);
};

export default RecipeItem;
