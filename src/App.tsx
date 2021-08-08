import { useEffect, useState } from 'react'
import { useAppSelector, useAppDispatch } from './app/hooks'
import { useFetchDogsQuery, Dog } from './features/dogs/dogs-api-slice'
import { increment } from './features/counter/counter-slice'

import useInfiniteScroll from './useInfiniteScroll'

function App() {
  const [dogs, setDogs] = useState<Dog[]>([])
  const dispatch = useAppDispatch()
  const count = useAppSelector((state) => state.counter.value)
  const { data = [], isFetching } = useFetchDogsQuery(count)

  useInfiniteScroll(increment())

  function handleClickIncrement() {
    dispatch(increment())
  }

  useEffect(() => {
    console.log('isFetching:', isFetching)
    if (!isFetching) {
      setDogs((prevState) => [...prevState, ...data])
    }
  }, [isFetching, data])

  return (
    <>
      <button onClick={handleClickIncrement}>Increment</button>

      <div style={{ paddingBottom: '60px' }}>
        <p>Number of dogs fetched: {dogs.length}</p>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Picture</th>
            </tr>
          </thead>
          <tbody>
            {dogs.map((breed) => (
              <tr key={breed.id}>
                <td>{breed.name}</td>
                <td>
                  <img src={breed.image.url} alt={breed.name} height={250} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {isFetching && <div>Loading....</div>}
      </div>
    </>
  )
}

export default App
