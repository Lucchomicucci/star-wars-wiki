import { ICharacter } from "@/interfaces/interfaces"
import { Button, Card } from 'antd';
import styles from './styles.module.css'
interface Props {
    character: ICharacter,
    idx: number
}
import { useRouter } from 'next/navigation'
import { getEven } from "@/helpers";

const ItemCharacter: React.FC<Props> = ({ character, idx }) => {
    const router = useRouter()

    return (
        <Card
            className={`${styles.card} ${getEven(idx) ? styles.cardBlue : styles.cardRed}`}
            onClick={() => router.push(`/characters/${character.id}`)}
        >
            <h3>{character?.name}</h3>
            <div style={{ textAlign: 'left', marginBottom: 10, marginTop: 10 }}>
                <p>Birthyear: {character?.birth_year}</p>
                <p>Gender: {character?.gender}</p>
                <p>Mass: {character?.mass}</p>
            </div>
            <p style={{ marginTop: 20 }}>Click for more details</p>
        </Card>
    );
}

export default ItemCharacter