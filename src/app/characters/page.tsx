'use client'
import { ICharacter } from '@/interfaces/interfaces'
import styles from './styles.module.css'
import { useEffect, useRef, useState } from 'react'
import { Card, Pagination, PaginationProps, Skeleton, Spin } from 'antd'
import ItemCharacter from '@/components/itemCharacter/itemCharacter'
import { getAll } from '@/services/services'

const Characters = () => {

  const [characters, setCharacters] = useState<ICharacter[]>()
  const [current, setCurrent] = useState<number>(1);
  const [pages, setPages] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const nextRef = useRef<boolean>(false)

  useEffect(() => {
      setLoading(true)
      getAll(current, 'characters')
      .then(res => {
        setCharacters(res.results)
        console.log(res)
        setPages(res.count)
        res.next ? nextRef.current = true : nextRef.current = false
      })
      .catch(error => console.error(error))
      .finally(() => setLoading(false))
  }, [current])

  const onChange: PaginationProps['onChange'] = (page) => {
    console.log(page);
    if(nextRef) setCurrent(page);
  };

  return (
    <main className={'main'}>
      <h1>Characters</h1>
      <div className={styles.container}>
      {loading ? (
          Array.from({ length: 10 }).map((_, index) => (
            <Card key={index} className={styles.cardSkeleton}>
              <Skeleton active avatar paragraph={{ rows: 3 }} />
            </Card>
          ))
        ) : (
          characters && characters.map((ch, index) => <ItemCharacter key={index} idx={index} character={ch}/>)
        )}
      </div>
      {(!loading || pages > 1) ? (
          <Pagination current={current} onChange={onChange} total={pages} showSizeChanger={false}/>
        ):(
          <Skeleton paragraph={{rows: 1}} />
      )}
    </main>
  )
}

export default Characters