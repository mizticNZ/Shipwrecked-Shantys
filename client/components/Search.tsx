import React, { useState } from 'react'

const Search = () => {
  const [searchParam, setSearchParam] = useState('')

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault()
      //actually do the thing to look up the song
    } catch (err: unknown) {
      console.error(err)
    }
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          required
          placeholder="Search"
          value={searchParam}
          onChange={(e) => setSearchParam(e.target.value)}
        />
      </form>
    </div>
  )
}

export default Search
