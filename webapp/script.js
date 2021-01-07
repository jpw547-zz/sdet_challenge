let app = new Vue({
    el: '#app',
    data: {
        movies: [],
        query: "",
        message: "" 
    },
    methods: {
        async search() {
            try {
                let url = '/api/movies?search='+this.query;

                const resp = await axios.get(url);
                if (resp.data == false) {
                    this.message = "No movies found that match that search query. Please try another one.";
                } else {
                    this.movies = resp.data
                    console.log(this.movies)
                    this.message = "";
                }
                
            } catch (error) {
                console.log(error);
            }
        }
    }
})