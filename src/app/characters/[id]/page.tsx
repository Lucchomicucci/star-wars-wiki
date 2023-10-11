'use client'
import { useEffect, useState } from 'react'
import styles from '../../page.module.css'
import { ICharacter } from '@/interfaces/interfaces'
import { Spin } from 'antd'
import DetailCharacter from '@/components/detailCharacter/detailCharacter'
import { getSpecific } from '@/services/services'

const Character = ({ params }: {
    params: {
        id: string
    }
}) => {

    const [character, setCharacter] = useState<ICharacter>()
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        setLoading(true)
        getSpecific(params.id, 'characters')
        .then(res => setCharacter(res))
        .catch(error => console.error(error))
        .finally(() => setLoading(false))
    }, [params.id])

    return (
        <main className={styles.main}>
            {loading ? (
                <Spin />
            ) : (   
                <>
                { character && <DetailCharacter character={character}/>}
                </>
            )}
        </main>
    )
}

export default Character