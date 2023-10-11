import { IMovie } from "@/interfaces/interfaces"

interface Props{
    movie: IMovie
}

const DetailMovie: React.FC<Props> = ({movie}) => {
    return(
        <>      
                <h2 style={{fontSize: 40}}>{movie?.title}</h2>
                <p>{movie.opening_crawl}</p>
                <div>   
                    <p>Director: {movie.director}</p>
                    <p>Release date: {movie.release_date}</p>
                    <p>Producers: {movie.producer}</p>
                </div>

        </>
    )
}

export default DetailMovie