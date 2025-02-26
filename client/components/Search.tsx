import React, { useState } from 'react'
import '../styles/lyrics.css'
import { useCookies } from 'react-cookie'

const Search = () => {
  const [searchParam, setSearchParam] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [cookies, setCookie] = useCookies(['accessToken'])

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault()
      const token = cookies.accessToken
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=id,snippet&q=${searchParam}&maxResults=10`,
        {
          headers: {
            Authorization: `Bearer ${token}`, // Use the access token in the Authorization header
          },
        },
      )
      const data = await response.json()
      console.log(data.items)
      setSearchResults(data.items)
      const search = searchParam + 'lyric Video'
      //search youtube
    } catch (err: unknown) {
      console.error(err)
    }
  }

  const addToPlaylist = async () => {}

  const playNow = async () => {}

  return (
    <div>
      <form className="form" onSubmit={onSubmit}>
        <input
          type="text"
          required
          placeholder="Search"
          value={searchParam}
          onChange={(e) => setSearchParam(e.target.value)}
        />
        <button value="add To Playlist" onClick={addToPlaylist}>
          Add To Playlist
        </button>
        <button value="Play" onClick={playNow}>
          Play Now
        </button>
      </form>
      {Array.isArray(searchResults) && searchResults.length > 0 && (
        <ul>
          {searchResults.map((result) => (
            <li key={result.id.videoId}>
              <h3>{result.snippet.title}</h3>
              <p>{result.snippet.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Search
