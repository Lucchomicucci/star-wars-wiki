import { IMovie } from "@/interfaces/interfaces"
import { Card } from 'antd';
import styles from './styles.module.css'
interface Props {
    movie: IMovie,
    idx: number
}
import { useRouter } from 'next/navigation'
import { getEven, toRoman } from "@/helpers";

const ItemMovie: React.FC<Props> = ({ movie, idx }) => {
    const router = useRouter()

    return (
        <Card
            className={`${styles.card} ${getEven(idx) ? styles.cardBlue : styles.cardRed}`}
            onClick={() => router.push(`/movies/${movie.id}`)}
        >
            <h3>{movie?.title}</h3>
            <p>Episode {toRoman(movie.episode_id)}</p>
            <p style={{ marginTop: 20 }}>Click for more details</p>
        </Card>
    );
}

export default ItemMovie