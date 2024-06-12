import { Outlet, ScrollRestoration } from 'react-router-dom'

//shared components
import Header from '../components/shared/navbar/Header'
import { Main } from '../components/styles/layouts/RootLayout.styles'

function RootLayout() {
  return (
    <>
      <ScrollRestoration />
      <Header />
      <Main>
          <Outlet />
      </Main>

    </>
  )
}

export default RootLayout