// import { Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
// import { useParams } from 'react-router-dom'
import request from 'superagent'

export default function Playlist() {
  const playlist = useQuery({
    queryKey: ['playlist'],
    queryFn: async () => {
      const data = await request.get(`/api/v1/playlist`)
      return data.body
    },
  })

  if (playlist.isPending) {
    return <p>Loading...</p>
  }

  if (playlist.isError || !playlist.data) {
    return <p>error</p>
  }
  return (
    <ul>
      <li> Hans Solo solo song</li>
    </ul>
  )
}
