const BASE_URL = 'https://api.mapbox.com';

export const reverseLookup = async (longitude, latitude, accessToken) => {
    try {
        const url = BASE_URL + `/search/searchbox/v1/reverse?longitude=${longitude}&latitude=${latitude}&limit=1&access_token=${accessToken}`;
        const response = await fetch(url);
        const data = await response.json();
        return data.features[0].properties.name;
    } catch (error) {
        console.error('Error fetching address: ', error);
        return '';
    }
};