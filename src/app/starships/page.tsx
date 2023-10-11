'use client'
import styles from './styles.module.css'
import { useEffect, useRef, useState } from 'react'
import { Card, Pagination, PaginationProps, Skeleton, Spin } from 'antd'
import { getAll } from '@/services/services'
import { IStarship } from '@/interfaces/interfaces'
import ItemStarship from '@/components/itemStarship/itemStarship'

const Starships = () => {

  const [starships, setStarships] = useState<IStarship[]>()
  const [current, setCurrent] = useState<number>(1);
  const [pages, setPages] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const nextRef = useRef<boolean>(false)

  useEffect(() => {
      setLoading(true)
      getAll(current, 'starships')
      .then(res => {
        setStarships(res.results)
        setPages(res.count)
        res.next ? nextRef.current = true : nextRef.current = false
      })
      .catch(error => console.error(error))
      .finally(() => setLoading(false))
  }, [current])

  const onChange: PaginationProps['onChange'] = (page) => {
    if(nextRef) setCurrent(page);
  };

  return (
    <main className={'main'}>
      <h1>Starships</h1>
      <div className={styles.container}>
      {loading ? (
          Array.from({ length: 10 }).map((_, index) => (
            <Card key={index} className={styles.cardSkeleton}>
              <Skeleton active avatar paragraph={{ rows: 3 }} />
            </Card>
          ))
        ) : (
          starships && starships.map((sts, index) => <ItemStarship key={index} idx={index} starship={sts}/>)
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

export default Starships