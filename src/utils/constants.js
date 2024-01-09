export const API_OPTIONS = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMjRlZDhhNWJmYWVlYTU0YzI4MDg3ZDgzMWQ1MTcxNyIsInN1YiI6IjY1ODFhMDY0M2E0OGM1NzNkYmFmNjZlYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.awsNzlMrUjnUZPbenNpVsQkySMXNCCLcWNjV7c0Bakg'
    }
};
export const IMG_CDN_URL = 'https://image.tmdb.org/t/p/w500/';
export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;
console.log(OPENAI_KEY);

// new api key = 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