import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import Link from '../../utils/link'
import MailForm from './mailForm'
import { SocialIcon } from '../../utils/UI/icons'

const flex = css`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Wrapper = styled.footer`
  .nav {
    background: ${({ theme }) => theme.lightGray};
    padding: 20px;

    .list {
      padding: 2px 0;
      ${flex}
    }

    .link {
      margin-right: 20px;

      a {
        color: ${({ theme }) => theme.black};

        &:hover,
        &:active,
        &:focus {
          color: ${({ theme }) => theme.mainColor};
          text-decoration: none;
        }

        transition: ${({ theme }) => theme.transition};
      }
    }
  }

  .subscribe {
    ${flex}
    padding: 40px 0;
    background: ${({ theme }) => theme.lightGray}80;
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

const Nav = ({ nav, social, siteUrl }) => (
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
      {social.map(item => (
        <ListLink
          icon
          key={item.name}
          path={item.url}
          name={item.name}
        />
      ))}
      <ListLink
        icon
        path={siteUrl + '/rss.xml'}
        name='rss'
      />
    </div>
  </>
)

Nav.propTypes = {
  social: PropTypes.array.isRequired,
  nav: PropTypes.array.isRequired,
  siteUrl: PropTypes.string.isRequired
}

const Footer = props => (
  <Wrapper>
    <div className='subscribe'>
      <MailForm />
    </div>
    <div className='nav'>
      <Nav {...props} />
    </div>
  </Wrapper>
)

Footer.propTypes = {
  social: PropTypes.array.isRequired,
  nav: PropTypes.array.isRequired,
  siteUrl: PropTypes.string.isRequired
}

export default Footer
