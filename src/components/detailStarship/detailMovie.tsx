import { IStarship } from "@/interfaces/interfaces"
interface Props{
    starship: IStarship
}

const DetailStarship: React.FC<Props> = ({starship}) => {
    return(
        <>      
                <h2 style={{fontSize: 40}}>{starship?.name}</h2>
                <p>{starship.model}</p>
                <div>   
                    <p>Cost in credits: {starship.cost_in_credits}</p>
                    <p>Manufacturer: {starship.manufacturer}</p>
                    <p>Length: {starship.length}</p>
                    <p>Max atmosphering speed: {starship.max_atmosphering_speed}</p>
                    <p>Cargo capacity: {starship.cargo_capacity}</p>
                    <p>Consumables: {starship.consumables}</p>
                    <p>MGLT: {starship.MGLT}</p>
                    <p>Hyperdrive rating: {starship.hyperdrive_rating}</p>
                    <p>Passengers: {starship.passengers}</p>
                </div>

        </>
    )
}

export default DetailStarship