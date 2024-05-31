import { useCookies } from 'react-cookie'
import { Link } from 'react-router-dom'
import Search from './Search.tsx'
import Header from './Header.tsx'
import Lyrics from './Lyrics.tsx'

function App() {
  const [cookies, setCookie] = useCookies(['accessToken'])

  if (!cookies.accessToken) {
    return (
      <div className="app">
        <Link to="/connect">Connect to Google</Link>
      </div>
    )
  } else {
    return (
      <div className="app">
        <Header />
        <Search />
        <Lyrics />
      </div>
    )
  }
}

export default App
