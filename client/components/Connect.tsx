import { useEffect, useState } from 'react'

const clientId =
  '190081605054-gj7gm9llbs5mq1vb2n3nl9rcue3rj5nt.apps.googleusercontent.com'

const Connect = () => {
  const [authUrl, setAuthUrl] = useState('')

  useEffect(() => {
    const scope = 'profile email'
    const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=http://localhost:5173/callback&scope=${scope}&response_type=code`
    setAuthUrl(authUrl)
    window.location.href = authUrl
  }, [])

  return <div></div>
}

export default Connect
