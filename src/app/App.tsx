import { Link, useNavigate } from 'react-router-dom'

import { Pages } from '@/app/route-pages'
import { PATH } from '@/common'
import { Header } from '@/components/ui/header'

export function App() {
  const navigate = useNavigate()

  const signOutHandler = () => {
    // isAuth=false     fake code
    navigate(PATH.LOGIN)
  }

  return (
    <>
      <Header
        isAuth={true}
        onSignOut={signOutHandler}
        onProfileClick={() => navigate(PATH.PROFILE)}
      />
      <div
        style={{
          display: 'flex',
          color: 'white',
          gap: 20,
          position: 'fixed',
          left: '50%',
          transform: 'translateX(-50%)',
          bottom: '20px',
        }}
      >
        <Link to={PATH.LOGIN}>Login</Link>
        <Link to={PATH.REGISTRATION}>Register</Link>
        <Link to={PATH.NEW_PASSWORD}>New password</Link>
        <Link to={PATH.PASSWORD_RECOVERY}>Password recovery</Link>
        <Link to={PATH.CHECK_EMAIL}>Check email</Link>
        <Link to={PATH.PACKS}>Packs</Link>
        <Link to={PATH.PACKS + PATH.CARDS}>Cards</Link>
        <Link to={PATH.LEARN + '/2'}>Learn</Link>
        <Link to={PATH.PROFILE}>Profile</Link>
        <Link to={PATH.ERROR}>Error</Link>
      </div>
      <Pages />
    </>
  )
}
