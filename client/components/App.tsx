import { useFruits } from '../hooks/useFruits.ts'
import Search from './Search.tsx'

function App() {
  const { data } = useFruits()

  return (
    <>
      {/* <div className="app">
        <h1>Fullstack Boilerplate - with Fruits!</h1>
        <ul>{data && data.map((fruit) => <li key={fruit}>{fruit}</li>)}</ul>
      </div> */}
      <Search />
    </>
  )
}

export default App
