import { setCookie } from 'cookies-next'

export default function GCallback() {
  const params = new URLSearchParams(window.location.hash)
  const gAccessToken = params.get('#access_token')

  setCookie('gAccessToken', gAccessToken)
  window.location.href = '/'
  return <div></div>
}
