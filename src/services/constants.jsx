const CLIENT_TRENDING_URL = `https://api.giphy.com/v1/gifs/trending?${process.env.REACT_APP_KEY}&limit=25&rating=g`;

const CLIENT_RANDOM_URL = `https://api.giphy.com/v1/gifs/random?${process.env.REACT_APP_KEY}&tag=&rating=g`;

export { CLIENT_TRENDING_URL, CLIENT_RANDOM_URL };
