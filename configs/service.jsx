

const axios = require('axios');

const YOUTUBE_BASE_URL = 'https://www.googleapis.com/youtube/v3';

const getVideos = async (query) => {
    const params = {
        part: 'snippet',                 // Specifies which parts of the video resource to return
        q: query,                        // Search query term
        maxResults: 1,  
        type:'video',                 // Number of results to return (up to 50)
        key: process.env.NEXT_PUBLIC_YOUTUBE_API_KEY, // Your API key
    };

    try {
        const response = await axios.get(`${YOUTUBE_BASE_URL}/search`, { params });
        return response.data.items;      // Returns the array of video results
    } catch (error) {
        console.error('Error fetching data from YouTube API:', error.response ? error.response.data : error.message);
        throw error;
    }
};

module.exports = {
    getVideos
};