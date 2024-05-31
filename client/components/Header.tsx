import { useCookies } from 'react-cookie'

export default function Header() {
  const [cookies, setCookie] = useCookies([''])
  const userName = cookies.userName
  const userPhoto = cookies.userPhoto

  return (
    <div>
      <center>
        <img src={userPhoto} alt={userName}></img>
        <br></br>Welcome {userName}
      </center>
    </div>
  )
}
