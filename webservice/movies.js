const axios = require('axios');
const express = require('express');
const router = express.Router();
const key = process.env.TMDB_API_KEY

// get list of movies
router.get('/', async(req, res) => {
    var search = req.query.search;
    
    var url = `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=${search}&page=1&include_adult=false`

    const response = await axios.get(url);

    var toReturn = [];

    for(const m of response.data.results) {
        let n = {
            movie_id: m.id,
            title: m.title,
            poster_image_url: `https://image.tmdb.org/t/p/w200/${m.poster_path}`,
            popularity_summary: `${m.popularity} out of ${m.vote_count}`
        }
        toReturn.push(n)
        if(toReturn.length == 10) {
            break;
        }
    }

    if (toReturn.length == 0) {
        res.send(false)
    } else {
        res.send(toReturn)    
    }
})
module.exports = router;