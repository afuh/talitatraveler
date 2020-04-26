import React from 'react'
import styled, { css } from 'styled-components'

const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;

    span {
      font-size: 400px;

      ${theme.media.mobile(css`
        font-size: 300px;
      `)}

      ${theme.media.phone(css`
        font-size: 140px;
      `)}
    }

    #image-wrapper {
      width: 300px;
      height: 300px;

      ${theme.media.mobile(css`
        width: 200px;
        height: 200px;
      `)}

      ${theme.media.phone(css`
        width: 100px;
        height: 100px;
      `)}
    }
  `};
`

const ImageWrapper = styled.div.attrs({
  id: 'image-wrapper',
})`
  position: relative;
  border-radius: 50%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
    object-position: center center;
  }
`

const NotFound = () => (
  <Wrapper>
    <span>4</span>
    <ImageWrapper>
      <img src="https://source.unsplash.com/random/300/?cat,cats" alt="🐈" />
    </ImageWrapper>
    <span>4</span>
  </Wrapper>
)

export default NotFound
