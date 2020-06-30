import React from "react"
import { Global } from "@emotion/core"
import Header from './header'
import Main from './main'
import GlobalStyles from './GlobalStyles'

export default function Layout({ children }) {
  return (
    <>
      <Global styles={GlobalStyles} />
      <Header />
      <Main>
        {children}
      </Main>
    </>
  )
}