import axios from "axios"
const youtubeKey = import.meta.env.VITE_YOUTUBE_KEY

const youtubeApi = axios.create({
	baseURL: import.meta.env.VITE_YOUTUBE_URL,
})

const findVideos = async (query) => {
    try {
      const response = await youtubeApi.get("/search", {
        params: {
          key: youtubeKey,
          q: query,
          type: "video",
          part: "snippet",
          maxResults: 20
        },
      })
      return response.data.items
    } catch (error) {
      console.error("Error finding requested YouTube videos:", error)
      throw error
    }
  }
const findChannels = async (query) => {
    try {
      const response = await youtubeApi.get("/search", {
        params: {
          key: youtubeKey,
          q: query,
          type: "channel",
          part: "snippet",
          maxResults: 20
        },
      })
      return response.data.items
    } catch (error) {
      console.error("Error finding requested YouTube channels:", error)
      throw error
    }
  }
  

export {findVideos, findChannels}

