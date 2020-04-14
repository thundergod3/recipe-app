import React, { useContext } from "react";
import logo from "./logo.svg";
import "./App.scss";
import RecipesList from "./components/RecipesList";
import { RecipeContext } from "./contexts/RecipeContextProvider";

const App = () => {
	const { search, handleChange, handleSubmit } = useContext(RecipeContext);

	return (
		<div className="App">
			<form className="search-form" onSubmit={handleSubmit}>
				<input type="text" className="search-bar" value={search} onChange={handleChange} />
				<button type="submit" className="search-btn">
					Search
				</button>
			</form>
			<RecipesList />
		</div>
	);
};

export default App;
