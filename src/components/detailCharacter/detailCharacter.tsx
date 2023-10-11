import { ICharacter } from "@/interfaces/interfaces"
import {
    GlobalOutlined,
    TeamOutlined,
    GiftOutlined,
    EyeOutlined,
    UserOutlined,
    AliwangwangOutlined,
    AreaChartOutlined,
    ColumnHeightOutlined
} from '@ant-design/icons';

import TextItem from "./textItem";
interface Props{
    character: ICharacter
}

const DetailCharacter: React.FC<Props> = ({character}) => {
    return(
        <>      
                <h2 style={{fontSize: 40}}>{character?.name}</h2>
                <TextItem text={'Height'} value={character?.height}>
                    <ColumnHeightOutlined />
                </TextItem>
                <TextItem text={'Mass'} value={character?.mass}>
                    <AreaChartOutlined />
                </TextItem>
                <TextItem text={'Hair Color'} value={character?.hair_color}>
                    <AliwangwangOutlined />
                </TextItem>
                <TextItem text={'Skin Color'} value={character?.skin_color}>
                    <UserOutlined />
                </TextItem>
                <TextItem text={'Eye Color'} value={character?.eye_color}>
                    <EyeOutlined />
                </TextItem>
                <TextItem text={'Birthyear'} value={character?.birth_year}>
                    <GiftOutlined />
                </TextItem>
                <TextItem text={'Gender'} value={character?.gender}>
                    <TeamOutlined />
                </TextItem>
                <TextItem text={'Home'} value={character?.world.name}>
                    <GlobalOutlined />
                </TextItem>
        </>
    )
}

export default DetailCharacter