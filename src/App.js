import React, {useState} from 'react'

let moviesData = [
    {
      "title": "The Shawshank Redemption",
      "year": 1994,
      "director": "Frank Darabont",
      "genre": "Drama",
      "rating": 9.3,
      "posterURL": "https://cdn.cinematerial.com/p/136x/yeo9y8pj/the-shawshank-redemption-vhs-movie-cover-sm.jpg?v=1456279340"
    },
    {
      "title": "The Godfather",
      "year": 1972,
      "director": "Francis Ford Coppola",
      "genre": "Crime, Drama",
      "rating": 9.2,
      "posterURL": "https://m.media-amazon.com/images/I/71UZUneV5QL._AC_UL320_.jpg"
    },
    {
      "title": "The Dark Knight",
      "year": 2008,
      "director": "Christopher Nolan",
      "genre": "Action, Crime, Drama",
      "rating": 9.0,
      "posterURL": "https://rukminim2.flixcart.com/image/850/1000/k8xduvk0/poster/j/m/z/medium-the-dark-knight-poster-decorative-wall-poster-wall-d-cor-original-imafqu8euacqngyh.jpeg?q=20"
    },
    {
      "title": "Pulp Fiction",
      "year": 1994,
      "director": "Quentin Tarantino",
      "genre": "Crime, Drama",
      "rating": 8.9,
      "posterURL": "https://m.media-amazon.com/images/I/61y1oH-cTgL._AC_UF1000,1000_QL80_.jpg"
    },
    {
      "title": "The Lord of the Rings: The Fellowship of the Ring",
      "year": 2001,
      "director": "Peter Jackson",
      "genre": "Adventure, Drama, Fantasy",
      "rating": 8.8,
      "posterURL": "https://www.hometheaterseattle.com/thumbnail.asp?file=assets/images/movies/lord-of-the-rings-1-the-fellowship-of-the-ring-movie-2001.jpg&maxx=300&maxy=0"
    },
    {
      "title": "Forrest Gump",
      "year": 1994,
      "director": "Robert Zemeckis",
      "genre": "Drama, Romance",
      "rating": 8.8,
      "posterURL": "https://m.media-amazon.com/images/M/MV5BOWNmNzdjYjQtZjIyOS00MDhiLTg4ZWUtZGZkZDE4ZDQwZTY1XkEyXkFqcGdeQXVyODk2ODI3MTU@._V1_.jpg"
    },
    {
      "title": "Inception",
      "year": 2010,
      "director": "Christopher Nolan",
      "genre": "Action, Adventure, Sci-Fi",
      "rating": 8.7,
      "posterURL": "https://c4.wallpaperflare.com/wallpaper/764/590/391/inception-leonardo-dicaprio-movie-posters-2400x3500-entertainment-movies-hd-art-wallpaper-preview.jpg"
    },
    {
      "title": "The Matrix",
      "year": 1999,
      "director": "The Wachowskis",
      "genre": "Action, Sci-Fi",
      "rating": 8.7,
      "posterURL": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT3bLFqeS9E2ylDdkHG1fFN_ukGU5hLV3lcw&usqp=CAU"
    },
    {
      "title": "Interstellar",
      "year": 2014,
      "director": "Christopher Nolan",
      "genre": "Adventure, Drama, Sci-Fi",
      "rating": 8.6,
      "posterURL": "https://w0.peakpx.com/wallpaper/488/705/HD-wallpaper-interstellar-art-christopher-nolan-inception-movie-poster-nolan.jpg"
    },
    {
      "title": "Gladiator",
      "year": 2000,
      "director": "Ridley Scott",
      "genre": "Action, Adventure, Drama",
      "rating": 8.5,
      "posterURL": "https://i.redd.it/cqbmrjxm5up61.jpg"
    },
    {
      "title": "The Silence of the Lambs",
      "year": 1991,
      "director": "Jonathan Demme",
      "genre": "Crime, Drama, Thriller",
      "rating": 8.6,
      "posterURL": "https://e0.pxfuel.com/wallpapers/786/274/desktop-wallpaper-silence-of-the-lambs-thumbnail.jpg"
    },
    {
      "title": "The Departed",
      "year": 2006,
      "director": "Martin Scorsese",
      "genre": "Crime, Drama, Thriller",
      "rating": 8.5,
      "posterURL": "https://wallpapercave.com/wp/wp2329908.jpg"
    },
    {
      "title": "The Green Mile",
      "year": 1999,
      "director": "Frank Darabont",
      "genre": "Crime, Drama, Fantasy",
      "rating": 8.6,
      "posterURL": "https://i.pinimg.com/originals/69/f9/2f/69f92f0ac390e1b571c515c3f8dd6d15.jpg"
    },
    {
      "title": "The Pianist",
      "year": 2002,
      "director": "Roman Polanski",
      "genre": "Biography, Drama, Music",
      "rating": 8.5,
      "posterURL": "https://alternativemovieposters.com/wp-content/uploads/2019/03/olech_pianist.jpg"
    },
    {
      "title": "Fight Club",
      "year": 1999,
      "director": "David Fincher",
      "genre": "Drama",
      "rating": 8.8,
      "posterURL": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYnkWRxfF1gTlR8Z9qkIrRcthN_uIyOsGavw&usqp=CAU"
    },
    {
      "title": "The Lord of the Rings: The Two Towers",
      "year": 2002,
      "director": "Peter Jackson",
      "genre": "Adventure, Drama, Fantasy",
      "rating": 8.7,
      "posterURL": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLbUlFXPaSp0LhIZ51CEbm6koY5FrKVr4a5EhB6hjk0S-WX53lKOE2hHcsgxB7yPAnpZU&usqp=CAU"
    },
    {
      "title": "The Usual Suspects",
      "year": 1995,
      "director": "Bryan Singer",
      "genre": "Crime, Mystery, Thriller",
      "rating": 8.5,
      "posterURL": "https://c4.wallpaperflare.com/wallpaper/884/1002/487/the-usual-suspects-crime-movie-poster-hd-wallpaper-preview.jpg"
    },
    {
      "title": "The Lion King",
      "year": 1994,
      "director": "Roger Allers, Rob Minkoff",
      "genre": "Animation, Adventure, Drama",
      "rating": 8.5,
      "posterURL": "https://pics.filmaffinity.com/The_Lion_King-497804235-large.jpg"
    },
    {
      "title": "Se7en",
      "year": 1995,
      "director": "David Fincher",
      "genre": "Crime, Drama, Mystery",
      "rating": 8.6,
      "posterURL": "https://e1.pxfuel.com/desktop-wallpaper/102/799/desktop-wallpaper-se7en-movie-se7en.jpg"
    },
    {
      "title": "Saving Private Ryan",
      "year": 1998,
      "director": "Steven Spielberg",
      "genre": "Drama, War",
      "rating": 8.6,
      "posterURL": "https://e1.pxfuel.com/desktop-wallpaper/76/416/desktop-wallpaper-saving-private-ryan-by-robert-bruno.jpg"
    }
]
  


function App () {

    const [selectedMovie,setSelectedMovie] = useState({
        "title": "The Shawshank Redemption",
        "year": 1994,
        "director": "Frank Darabont",
        "genre": "Drama",
        "rating": 9.3,
        "posterURL": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShOYvMdsJoUbFJTmbC-qx1cauLxP2wn2DweKuQdgyGTg1vZM8iOfPpqxeaOP0Fq0_Vl90&usqp=CAU"
      })
    console.log(selectedMovie);
    return(
        <div className='App'>
            <div className='movies-name'>
                {moviesData.map((movies) => (<p className='movies-card' onClick={() =>setSelectedMovie(movies)}>{movies.title}</p>))}
            </div>


            <div className='movie-details'>
                <h1>Movie Details</h1>
                <img src={selectedMovie.posterURL} className='poster'/>
                <p>Movie : {selectedMovie.title}</p>   
                <p>Date of Release : {selectedMovie.year}</p>   
                <p>Director : {selectedMovie.director}</p>   
                <p>Genre : {selectedMovie.genre}</p>   
                <p>Rating : {selectedMovie.rating}</p>   
            </div>

        </div>

       
    )
}





export default App