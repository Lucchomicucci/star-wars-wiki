import { IStarship } from "@/interfaces/interfaces"
import { Card } from 'antd';
import styles from './styles.module.css'
interface Props {
    starship: IStarship,
    idx: number
}
import { useRouter } from 'next/navigation'
import { getEven } from "@/helpers";

const ItemStarship: React.FC<Props> = ({ starship, idx }) => {
    const router = useRouter()

    return (
        <Card
            className={`${styles.card} ${getEven(idx) ? styles.cardBlue : styles.cardRed}`}
            onClick={() => router.push(`/starships/${starship.id}`)}
        >
            <h3>{starship?.name}</h3>
            <p>Model: {starship?.model}</p>
            <p style={{ marginTop: 20 }}>Click for more details</p>
        </Card>
    );
}

export default ItemStarship