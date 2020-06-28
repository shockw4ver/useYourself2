import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

const Wrapper = styled.header`
  height: 60px;
  width: 100%;
  background-color: #efefef;
`

const Nav = styled.nav`
  display: flex;
  height: 100%;
  width: 500px;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
`

const NavItem = styled.div`
  color: #999;
  font-size: 20px;
  font-weight: bold;

  :hover {
    color: #333;
    cursor: pointer;
  }
`

const Logo = styled.div`
  color: #000;
  font-size: 28px;
  font-weight: bold;
`

export default () => {
  return (
    <Wrapper>
      <Nav>
        <NavItem>
          <Link to="/">Home</Link>
        </NavItem>
        <NavItem>Posts</NavItem>

        <Logo>
          Samael
        </Logo>

        <NavItem>Tags</NavItem>
        <NavItem>About</NavItem>
      </Nav>
    </Wrapper>
  )
}

