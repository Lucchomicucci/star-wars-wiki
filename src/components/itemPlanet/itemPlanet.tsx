import { IPlanet } from "@/interfaces/interfaces"
import { Card } from 'antd';
import styles from './styles.module.css'
interface Props {
    planet: IPlanet,
    idx: number
}
import { useRouter } from 'next/navigation'
import { getEven } from "@/helpers";

const ItemPlanet: React.FC<Props> = ({ planet, idx }) => {
    const router = useRouter()

    return (
        <Card
            className={`${styles.card} ${getEven(idx) ? styles.cardBlue : styles.cardRed}`}
            onClick={() => router.push(`/planets/${planet.id}`)}
        >
            <h3>{planet?.name}</h3>
            <p style={{ marginTop: 20 }}>Click for more details</p>
        </Card>
    );
}

export default ItemPlanet