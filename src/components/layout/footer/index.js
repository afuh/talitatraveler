import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import Link from '../../../utils/link'
import { SocialIcon } from '../../../utils/UI/icons'

import MailForm from './mailForm'

const flex = css`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Wrapper = styled.footer`
  margin-top: 200px;

  .subscribe {
    ${flex}
    padding: 40px 0;
    background: ${({ theme }) => theme.lightGray}80;

    .subscribe-inner {
      max-width: 520px;
    }
  }

  .nav {
    background: ${({ theme }) => theme.mainColor};
    padding: 40px 20px;
    display: flex;
    justify-content: center;

    .list {
      padding: 2px 0;
      ${flex}
    }

    .link {
      margin: 0 20px;

      a {
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
  }
`

const ListLink = ({ path, name, icon }) => (
  <div className='link'>
    {icon ?
      <SocialIcon
        style={{ marginBottom: 0, fontSize: '2rem' }}
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

const Nav = ({ nav, external }) => (
  <>
    <div className='list'>
      {nav.map(item => (
        <ListLink
          key={item.name}
          path={item.path}
          name={item.name}
        />
      ))}
    </div>
    <div className='list'>
      {external.map(item => (
        <ListLink
          icon
          key={item.name}
          path={item.url}
          name={item.name}
        />
      ))}
    </div>
  </>
)

Nav.propTypes = {
  external: PropTypes.array.isRequired,
  nav: PropTypes.array.isRequired
}

const Subscribe = () => (
  <div className='subscribe'>
    <div className='subscribe-inner'>
      <MailForm />
    </div>
  </div>
)

const Navigation = props => (
  <div className='nav'>
    <div className='nav-inner'>
      <Nav {...props} />
    </div>
  </div>
)

const Footer = props => (
  <Wrapper>
    <Subscribe />
    <Navigation {...props}/>
  </Wrapper>
)

Footer.propTypes = {
  nav: PropTypes.array.isRequired,
  external: PropTypes.array.isRequired
}

export default Footer
