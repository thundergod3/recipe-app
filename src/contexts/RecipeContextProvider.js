import React, { useState, useEffect, createContext } from "react";
import { fetchData } from "../constants/api";

const RecipeContext = createContext();

const RecipeContextProvider = (props) => {
	const [recipes, setRecipes] = useState([]);
	const [search, setSearch] = useState("");
	const [keyword, setKeyWord] = useState("");

	const getData = async () => {
		console.log("hello")
		const data = await fetchData(keyword);
		setRecipes(data.hits);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setKeyWord(search);
		setSearch("")
	};

	const handleChange = (e) => {
		setSearch(e.target.value);
	};

	useEffect(() => {
		getData();
	}, [keyword]);

	return (
		<RecipeContext.Provider value={{ recipes, search, handleChange, handleSubmit }}>
			{props.children}
		</RecipeContext.Provider>
	);
};

export { RecipeContextProvider, RecipeContext };
