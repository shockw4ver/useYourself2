import React from "react"
import { Global, css } from "@emotion/core"
import Header from './header'
import Main from './main'

export default function Layout({ children }) {
  return (
    <>
      <Global
        styles={css`
          html,
          body {
            height: 100%;
            width: 100%;
          }

          #___gatsby,
          #gatsby-focus-wrapper {
            height: 100%;
            width: 100%;
          }
        `}
      />
      <Header />
      <Main>
        {children}
      </Main>
    </>
  )
}