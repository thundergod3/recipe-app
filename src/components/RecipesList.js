import React, { useContext } from "react";
import RecipeItem from "./RecipeItem";
import { RecipeContext } from "../contexts/RecipeContextProvider";

const RecipesList = () => {
	const { recipes } = useContext(RecipeContext);

	return (
		<>
			<div className="recipes">
				{recipes.map((recipeItem, index) => (
					<RecipeItem key={index} recipeItem={recipeItem} />
				))}
			</div>
		</>
	);
};

export default RecipesList;
