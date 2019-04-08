import React, { useState } from 'react'
import styled, { css } from 'styled-components'

import { media } from '../../utils/style'

const Wrapper = styled.div`
  ${({ theme }) => theme && css`
    min-height: calc(100vh - ${theme.headerHeight}px);
  `};

  display: flex;
  align-items: center;
  justify-content: center;

  p {
    margin: 0;
    font-size: 400px;

    ${media.mobile(css`
      font-size: 300px;
    `)}

    ${media.phone(css`
      font-size: 140px;
    `)}
  }

  #image-wrapper {
    width: 300px;
    height: 300px;

    ${media.mobile(css`
      width: 200px;
      height: 200px;
    `)}

    ${media.phone(css`
      width: 100px;
      height: 100px;
    `)}
  }

`

const ImageWrapper = styled.div.attrs({
  id: 'image-wrapper'
})`
  position: relative;
  border-radius: 50%;
  overflow: hidden;

  .placeholder {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #f6f6f680;
    z-index: -1;
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
    object-position: center center;

    opacity: ${p => p.loading ? 0 : 1};

    transition: opacity 1s;
  }
`

const NotFound = () => {
  const [loading, setLoading] = useState(true)

  return (
    <Wrapper>
      <p>4</p>
      <ImageWrapper loading={loading}>
        <p className='placeholder' />
        <img
          onLoad={() => setLoading(false)}
          src='https://source.unsplash.com/random/300/?cat,cats'
          alt='🐈'
        />
      </ImageWrapper>
      <p>4</p>
    </Wrapper>
  )
}

export default NotFound
