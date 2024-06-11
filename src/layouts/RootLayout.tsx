import { Outlet, ScrollRestoration } from 'react-router-dom'

//shared components
import Header from '../components/shared/navbar/Header'
import styled from 'styled-components'

const Main = styled.main`
  max-width: 1440px;
  margin-inline: auto;
  padding-inline: 6.5%;
`

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