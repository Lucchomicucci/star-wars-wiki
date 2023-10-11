'use client'
import { useEffect, useState } from 'react'
import styles from '../../page.module.css'
import { Spin } from 'antd'
import { getSpecific } from '@/services/services'
import { IStarship } from '@/interfaces/interfaces'
import DetailStarship from '@/components/detailStarship/detailMovie'

const Starship = ({ params }: {
    params: {
        id: string
    }
}) => {

    const [starship, setStarship] = useState<IStarship>()
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        setLoading(true)
        getSpecific(params.id, 'starships')
        .then(res => setStarship(res))
        .catch(error => console.error(error))
        .finally(() => setLoading(false))
    }, [params.id])

    return (
        <main className={styles.main}>
            {loading ? (
                <Spin />
            ) : (   
                <>
                { starship && <DetailStarship starship={starship}/>}
                </>
            )}
        </main>
    )
}

export default Starship