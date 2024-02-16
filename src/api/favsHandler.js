import backendApi from './backendHandler'

export async function addToFavorites(videoData) {
  try {
    const response = await backendApi.post('/fav', videoData)

    return response.data
  } catch (error) {
    console.error('Error adding to favorites:', error)
    throw error
  }
}
export async function removeFavorite(videoYtId) {
  try {
    const response = await backendApi.delete(`/fav/${videoYtId}`)
    return response.data
  } catch (error) {
    console.error('Error adding to favorites:', error)
    throw error
  }
}

export async function getFavorites() {
  try {
    const response = await backendApi.get('/fav')

    return response
  } catch (error) {
    console.error('Error adding to favorites:', error)
    throw error
  }
}

