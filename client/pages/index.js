import useSWR from 'swr'
import Link from 'next/link'
import Bar from '../components/Bar'
import Main from '../components/Main'
import { useUser } from '../utils/auth/useUser'

const fetcher = (url, token) =>
  fetch(url, {
    method: 'GET',
    headers: new Headers({ 'Content-Type': 'application/json', token }),
    credentials: 'same-origin',
  }).then((res) => res.json())

const Index = () => {
  const { user, logout } = useUser()
  const { data, error } = useSWR(
    user ? ['/api/getFood', user.token] : null,
    fetcher
  )
  if (!user) {
    return (
      <>
      <Bar auth={false} authPage={false}/>
      <Main auth={false} />
      </>
    )
  } 

  return (
    <>
    <Bar auth={true} logOut={logout} authPage={false} />
    <Main auth={true} />
    </>
  )
}

/*
  <>
    <p>Hi there!</p>
    <p>
      You are not signed in.{' '}
      <Link href={'/auth'}>
        <a>Sign in</a>
      </Link>
    </p>
  </>
*/

export default Index
