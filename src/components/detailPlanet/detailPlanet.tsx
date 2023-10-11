import { IPlanet } from "@/interfaces/interfaces"
interface Props{
    planet: IPlanet
}

const DetailPlanet: React.FC<Props> = ({planet}) => {
    return(
        <>      
                <h2 style={{fontSize: 40}}>{planet?.name}</h2>
                <div>   
                    <p>Climate: {planet.climate}</p>
                    <p>Diameter: {planet.diameter}</p>
                    <p>Gravity: {planet.gravity}</p>
                    <p>Orbital period: {planet.orbital_period}</p>
                    <p>Population: {planet.population}</p>
                    <p>Rotation period: {planet.rotation_period}</p>
                    <p>Surface water: {planet.surface_water}</p>
                    <p>Terrain: {planet.terrain}</p>
                </div>

        </>
    )
}

export default DetailPlanet