import { Link } from 'react-router-dom'

import { Pages } from '@/app/route-pages'
import { PATH } from '@/common'
import { Header } from '@/components/ui/header'

export function App() {
  return (
    <>
      <Header
        isAuth={true}
        onSignOut={() => alert('Вы вышли!!')}
        onProfileClick={() => alert('Переходим в профиль')}
      />
      <div
        style={{
          display: 'flex',
          color: 'white',
          gap: 20,
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)',
          top: '20px',
        }}
      >
        <Link to={PATH.LOGIN}>Login</Link>
        <Link to={PATH.REGISTRATION}>Register</Link>
        <Link to={PATH.NEW_PASSWORD}>New password</Link>
        <Link to={PATH.PASSWORD_RECOVERY}>password recovery</Link>
        <Link to={PATH.CHECK_EMAIL}>Check email</Link>
        <Link to={PATH.PACKS}>packs</Link>
        <Link to={PATH.PACKS + PATH.CARDS}>Cards</Link>
        <Link to={PATH.LEARN + '/2'}>learn</Link>
        <Link to={PATH.PROFILE}>Profile</Link>
        <Link to={PATH.ERROR}>Error</Link>
      </div>
      <Pages />
    </>
  )
}
