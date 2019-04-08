import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { Link } from "gatsby"

import { media } from '../../../utils/style'
import { SocialIcon } from '../../../utils/UI/icons'

import MailForm from './mailForm'

const SubscribeWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 80px 0;

  ${({ theme }) => theme && css`
    background: ${theme.lightGray};
    box-shadow: ${theme.innerShadow}
  `};

  ${media.phone(css`
    padding: 80px 10px;
  `)}

  .inner {
    max-width: 520px;
  }
`

const NavWrapper = styled.nav`
  background: ${({ theme }) => theme.mainColor};
  padding: 40px 0;

  .list {
    padding: 10px 0;

    .list-inner {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
    }
  }

  .link {
    padding: 4px 20px;

    a {
      margin: 0;
      font-weight: 700;
      color: ${({ theme }) => theme.black};
      transition: none;

      &.test {
        &:hover,
        &:active,
        &:focus {
          color: ${({ theme }) => theme.black} !important;
        }
      }

      &:hover,
      &:active,
      &:focus {
        color: ${({ theme }) => theme.white};
        text-decoration: none;
      }
    }
  }
`

const ListLink = ({ path, name, icon }) => (
  <div className='link'>
    {icon ?
      <SocialIcon
        style={{ fontSize: '2rem' }}
        href={path}
        name={name}
      /> :
      <Link
        className={'test'}
        style={{ color: '#fff' }}
        to={path}
        state={name !== 'Buscar' ? {} : { focus: true }}
        >
          {name}
      </Link>
    }
  </div>
)

ListLink.propTypes = {
  icon: PropTypes.bool,
  path: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}

const List = ({ data, ...others }) => (
  <div className='list'>
    <div className='list-inner'>
      {data.map(item => (
        <ListLink
          {...others}
          key={item.name}
          path={item.path || item.url}
          name={item.name}
        />
      ))}
    </div>
  </div>
)

List.propTypes = {
  data: PropTypes.array.isRequired
}

const Nav = ({ nav, external }) => (
  <NavWrapper>
    <List data={nav} />
    <List data={external} icon />
  </NavWrapper>
)

Nav.propTypes = {
  external: PropTypes.array.isRequired,
  nav: PropTypes.array.isRequired
}

const Subscribe = () => (
  <SubscribeWrapper>
    <div className='inner'>
      <MailForm />
    </div>
  </SubscribeWrapper>
)

const Footer = props => (
  <footer>
    <Subscribe />
    <Nav {...props}/>
  </footer>
)

Footer.propTypes = {
  nav: PropTypes.array.isRequired,
  external: PropTypes.array.isRequired
}

export default Footer
