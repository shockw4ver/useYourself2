import React from 'react'
import styled from '@emotion/styled'
import {
  useNavigate,
  useLocation
} from '@reach/router'

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
  color: ${props => props.active ? '#333' : '#999' };
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

const navList = [
  { path: '/', label: 'Home' },
  { path: '/posts', label: 'Posts' },
  { path: '/', label: 'Samael', logo: true },
  { path: '/tags', label: 'Tags' },
  { path: '/about', label: 'about' }
]

export default () => {
  const navigate = useNavigate()
  const location = useLocation()

  function handleNavClick(path) {
    navigate(path)  
  }

  return (
    <Wrapper>
      <Nav>
        {navList.map(item => item.logo ? (
          <Logo>{ item.label }</Logo>
        ) : (
          <NavItem
            key={item.label}
            onClick={() => handleNavClick(item.path)}
            active={location.pathname === item.path}
          >
            {item.label}
          </NavItem>
        ))}
      </Nav>
    </Wrapper>
  )
}

