import React, { useEffect, useState } from 'react'

function HomePageContent() {

    // apiKey = "0477f5f21bb6f8f9d6406faeb32c0ef9"

    const [topRatedMovies, setTopRatedMovies] = useState([])

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=0477f5f21bb6f8f9d6406faeb32c0ef9&language=en-US&page=1")
        .then(res => res.json())
        .then(data => setTopRatedMovies(data.results))
        .catch(error => console.log(error))
    }, [])

  return (
    <div>
        {topRatedMovies.map((value, key) => (
            <p>{value.title}</p>
        ))}
    </div>
  )
}

export default HomePageContent