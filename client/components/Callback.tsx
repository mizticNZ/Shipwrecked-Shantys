import { useState, useEffect } from 'react'
import { setCookie } from 'cookies-next'

export default function Callback() {
  const params = new URLSearchParams(window.location.search)
  const clientId =
    '190081605054-gj7gm9llbs5mq1vb2n3nl9rcue3rj5nt.apps.googleusercontent.com'
  const clientST = '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'
  const code = params.get('code')

  const [userName, setUserName] = useState('')
  const [userPhoto, setUserPhoto] = useState('')
  const [accessToken, setAccessToken] = useState('')

  useEffect(() => {
    const fetchToken = async () => {
      const googleUrl = 'https://oauth2.googleapis.com/token'
      const response = await fetch(googleUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `client_id=${clientId}&client_secret=${clientST}&redirect_uri=http://localhost:5173/callback&grant_type=authorization_code&code=${code}`,
      })
      const data = await response.json()
      const accessToken = data.access_token
      setAccessToken(accessToken)

      const apiUrl = 'https://openidconnect.googleapis.com/v1/userinfo'
      const headers = {
        Authorization: `Bearer ${accessToken}`,
      }
      const userResponse = await fetch(apiUrl, { headers })
      const userData = await userResponse.json()
      setUserName(userData.name)
      setUserPhoto(userData.picture)

      setCookie('userName', userData.name, { maxAge: 3600 })
      setCookie('userPhoto', userData.picture, { maxAge: 3600 })
      setCookie('accessToken', accessToken, { maxAge: 3600 })

      window.location.href = `/`
    }
    fetchToken()
  }, [code, clientId, clientST])

  return <div></div>
}
