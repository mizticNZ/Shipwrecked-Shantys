import React, { useState } from 'react'
import '../styles/lyrics.css'

const Search = () => {
  const [searchParam, setSearchParam] = useState('')

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault()
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
    </div>
  )
}

export default Search
