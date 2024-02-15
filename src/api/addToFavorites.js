import backendApi from "./backendHandler";

async function addToFavorites(videoData) {
	try {
	  const response = await backendApi.post('/fav', videoData);
  
	  return response.data;
	} catch (error) {
	  console.error('Error adding to favorites:', error);
	  throw error;
	}
}

export default addToFavorites