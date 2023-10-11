'use client'
import { useEffect, useState } from 'react'
import styles from '../../page.module.css'
import { Spin } from 'antd'
import { getSpecific } from '@/services/services'
import { IPlanet, IStarship } from '@/interfaces/interfaces'
import DetailPlanet from '@/components/detailPlanet/detailPlanet'

const Planet = ({ params }: {
    params: {
        id: string
    }
}) => {

    const [planet, setPlanet] = useState<IPlanet>()
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        setLoading(true)
        getSpecific(params.id, 'planets')
        .then(res => setPlanet(res))
        .catch(error => console.error(error))
        .finally(() => setLoading(false))
    }, [params.id])

    return (
        <main className={styles.main}>
            {loading ? (
                <Spin />
            ) : (   
                <>
                { planet && <DetailPlanet planet={planet}/>}
                </>
            )}
        </main>
    )
}

export default Planet