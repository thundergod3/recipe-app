export async function fetchData(keyword) {
	const baseURL = `https://api.edamam.com/search?q=${keyword}&app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_API_KEY}`;
	try {
		const response = await fetch(baseURL);
		const results = await response.json();
		return results;
	} catch (error) {
		console.log(error);
	}
}
