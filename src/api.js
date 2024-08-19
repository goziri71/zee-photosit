import axios from 'axios';



const searchImages = async (term) => {
    if(!term) {
        return null
    }
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID Te7L3x5tfzqATh2mNvObM9T6axQqM-IaA80EeA_1z8E'
        },
        params: {
            query: term
        }
    });

    
    return response.data.results;
};



export default searchImages;