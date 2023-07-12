import { Navigate, Route, Routes } from 'react-router-dom'

import { PATH } from '../../common'
import {
  Cards,
  CheckEmailPage,
  ForgotPasswordPage,
  Learn,
  LoginPage,
  NewPasswordPage,
  Packs,
  Profile,
  RegisterPage,
} from '../../features'

import { PrivateRoute } from './private-route'

import { ErrorPage } from '@/components/ui/error/error-page.tsx'

export const Pages = () => {
  return (
    <Routes>
      <Route path={PATH.LOGIN} element={<LoginPage />} />
      <Route path={PATH.REGISTRATION} element={<RegisterPage />} />
      <Route path={PATH.PASSWORD_RECOVERY} element={<ForgotPasswordPage />} />
      <Route path={PATH.CHECK_EMAIL} element={<CheckEmailPage />} />
      <Route path={PATH.NEW_PASSWORD} element={<NewPasswordPage />} />
      <Route path={PATH.ERROR} element={<ErrorPage />} />
      <Route path={'*'} element={<Navigate to={PATH.ERROR} />} />

      <Route element={<PrivateRoute />}>
        <Route index path={'/'} element={<Packs />} />
        <Route path={PATH.PACKS} element={<Packs />} />
        <Route path={PATH.PROFILE} element={<Profile />} />
        <Route path={PATH.PACKS + PATH.CARDS} element={<Cards />} />
        <Route path={PATH.LEARN + PATH.ID} element={<Learn />} />
      </Route>
    </Routes>
  )
}
