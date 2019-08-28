const axios = require('axios');

const belajarAsync = async () => {
    try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/photos/1000');
    const data = await response.data;
    console.log('albumId = ' + data.albumId);
    console.log('id = ' + data.id);
    console.log('title = ' + data.title);
    console.log('url = ' + data.url);
    console.log('thumbnailUrl = ' + data.thumbnailUrl);
} catch (error) {
    console.log(err);
}
}

belajarAsync()