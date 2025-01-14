import React from "react"
import { Helmet } from "react-helmet"
import styled, { createGlobalStyle } from "styled-components"
import Footer from "./Footer"
import Header from "./Header"

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #202124;
    color: #fff;
    height: 100%;
    margin: 0 18px;
    font-family: 'Open Sans', sans-serif;
  }
  a {
    color: #009de0
  }
`

const Layout = ({ children }) => {
  return (
    <Container>
      <Helmet>
        <meta charSet="utf-8" />
        <title>IST Space Finder | Find rooms/buildings in IST campi</title>
        <meta
          name="description"
          content="Don't know where each room is inside IST campi? This web app will help you find your way around your campus!"
        />
      </Helmet>
      <GlobalStyle />
      <Header />
      {children}
      <Footer />
    </Container>
  )
}

const Container = styled.div`
  max-width: 600px;
  height: 100vh;
  margin: auto;
  align-self: center;
  display: flex;
  flex-direction: column;
`

export default Layout
