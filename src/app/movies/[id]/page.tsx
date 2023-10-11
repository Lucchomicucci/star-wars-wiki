'use client'
import { useEffect, useState } from 'react'
import styles from '../../page.module.css'
import { Spin } from 'antd'
import { getSpecific } from '@/services/services'
import { IMovie } from '@/interfaces/interfaces'
import DetailMovie from '@/components/detailMovie/detailMovie'

const Movie = ({ params }: {
    params: {
        id: string
    }
}) => {

    const [movie, setMovie] = useState<IMovie>()
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        setLoading(true)
        getSpecific(params.id, 'movies')
        .then(res => setMovie(res))
        .catch(error => console.error(error))
        .finally(() => setLoading(false))
    }, [params.id])

    return (
        <main className={styles.main}>
            {loading ? (
                <Spin />
            ) : (   
                <>
                { movie && <DetailMovie movie={movie}/>}
                </>
            )}
        </main>
    )
}

export default Movie