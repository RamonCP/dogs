import React from 'react';

import { useAppSelector, useAppDispatch } from './app/hooks'
import { useFetchDogsQuery } from './features/dogs/dogs-api-slice'
import { increment } from './features/counter/counter-slice'

function App() {
	const dispatch = useAppDispatch()
	const count = useAppSelector(state => state.counter.value)
	const { data = [] } = useFetchDogsQuery(count)

	console.log(count)

	function handleClickIncrement() {
		dispatch(increment())
	}

  return (
    <>
			<button onClick={handleClickIncrement}>Increment</button>

			 <div>
          <p>Number of dogs fetched: {data.length}</p>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Picture</th>
              </tr>
            </thead>
            <tbody>
              {data.map((breed) => (
                <tr key={breed.id}>
                  <td>{breed.name}</td>
                  <td>
                    <img src={breed.image.url} alt={breed.name} height={250} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
		</>
  );
}

export default App;
