import { useEffect, useState } from 'react'

import { useAppSelector } from './app/hooks'
import { useFetchDogsQuery, Dog } from './features/dogs/dogs-api-slice'
import { increment } from './features/counter/counter-slice'
import useInfiniteScroll from './useInfiniteScroll'
import Row from './components/Row'
import Card from './components/Card'
import SpinnerLoading from './components/SpinnerLoading'
import Header from './components/Header'

function App() {
  const [dogs, setDogs] = useState<Dog[]>([])
  const count = useAppSelector((state) => state.counter.value)
  const { data = [], isFetching } = useFetchDogsQuery(count)

  useInfiniteScroll(increment())

  useEffect(() => {
    if (!isFetching) {
      setDogs((prevState) => [...prevState, ...data])
    }
  }, [isFetching, data])

  return (
    <>
      <Header title={`Number of dogs fetched: ${dogs.length}`} />
      <Row>
        {dogs.map(({ id, name, image }) => (
          <Card key={id} dogName={name} urlImage={image.url} />
        ))}
        {isFetching && <SpinnerLoading />}
      </Row>
    </>
  )
}

export default App
